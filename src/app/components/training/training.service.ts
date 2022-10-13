import { Exercise } from "./exercise.model";
import { Subject } from 'rxjs';

export class TrainingService {
  
    private exercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    exerciseChange = new Subject<Exercise>();
    private runningExercise: Exercise = {id: '', name: '', duration: 0, calories: 0};

    getExercises() {
        return [...this.exercises]
    } 

    startExercise(selectedId: string) {
        this.runningExercise =  (this.exercises.find(ex => ex.id === selectedId)) as Exercise;
        this.exerciseChange.next({...this.runningExercise})
    }


}