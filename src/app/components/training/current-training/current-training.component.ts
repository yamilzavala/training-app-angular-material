import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TrainingService } from '../training.service';
import { StopComponent } from './stop-training.component';
import { Subscription } from 'rxjs'
import { Exercise } from '../exercise.model';
import { SubsHelper } from '../../../helpers/subscriptions'

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 10;
  timer: any;
  subscriptionTraining = new Subscription();
  currentExercise: Exercise = {id: '', name: '', duration: 0, calories: 0};
  subscriptions = new SubsHelper();

  constructor(private dialog: MatDialog,
              private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.startOrResumeTraining();
  }

  startOrResumeTraining() {
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    console.log(this.trainingService.getRunningExercise().duration);
    
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.trainingService.completeExercise()
        clearInterval(this.timer);
      }
    }, step)
  }

  openDialog(){
    const dialogRef =  this.dialog.open(StopComponent, {
      width: '250px',
      data: {
        progress: this.progress
      }
    })

    dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.trainingService.cancelExercise(this.progress)
        } else {
          this.startOrResumeTraining()
        }
    })
  }

  stopProgress() {
      clearInterval(this.timer);
      this.openDialog();
  }
}
