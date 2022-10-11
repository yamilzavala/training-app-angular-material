import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StopComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter();
  progress = 10;
  timer: any;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeTraining()
  }

  startOrResumeTraining() {
    this.timer = setInterval(() => {
      this.progress = this.progress + 10;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 300)
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
          this.trainingExit.emit()  
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
