import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  showCurrentTraining = false;
  exerciseSubscription = new Subscription();

  constructor(private trainingService: TrainingService) {
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChange.subscribe(currentExercise => {
      if (currentExercise) {
        this.showCurrentTraining = true;
      } else {
        this.showCurrentTraining = false;
      }
    })
  }

}
