import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { SnackbarI, UIService } from '../../shared/ui.service';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  
  //exercises: any;
  exercises: Exercise[];
  isLoading = false;
  loadingSub: Subscription;
  
  constructor(private trainingService: TrainingService, 
              private db: AngularFirestore,
              private uiService: UIService) { }

  ngOnInit(): void {

    this.loadingSub = this.uiService.loadingStateChange
    .subscribe(loading => {
      this.isLoading = loading;
    })
    this.fetchData();
  }

  startTraining(form: NgForm) {
   this.trainingService.startExercise(form.value.exercise)
  }

  fetchData() {
    this.exercises = this.trainingService.getExercises();
    if (!this.exercises) {
      const snackbar: SnackbarI = {
        message: 'Error to load exercises... Try to fetch again since the botton above',
        action: undefined,
        duration: 5000 
      }
    this.uiService.createSnackbar(snackbar);
    } 
  }
}
