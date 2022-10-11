import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Excersise } from '../exercise.model';
import { TrainingService } from '../training.service';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() newTraining = new EventEmitter<void>();
  exercises: Excersise[] = [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercises = this.trainingService.getExercises();
    console.log(this.exercises);
    
  }

  startTraining() {
    this.newTraining.emit();
  }
}
