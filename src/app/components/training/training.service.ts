import { Exercise } from "./exercise.model";
import { Subject } from 'rxjs';

export class TrainingService {
  
    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 18, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    emptyExercise: Exercise = {id: '', name: '', duration: 0, calories: 0};
    exercises: Exercise[] = [];
    exerciseChange = new Subject<any>();
    private runningExercise: Exercise = {...this.emptyExercise};

    getExercises() {
        return [...this.availableExercises]
    } 

    startExercise(selectedExercise: string) {
        this.runningExercise =  (this.availableExercises.find(ex => ex.id === selectedExercise)) as Exercise;
        this.exerciseChange.next({...this.runningExercise})
    }

    completeExercise() {
        this.exercises.push({
            ...this.runningExercise, 
            date: new Date(),
            state: 'complete'
        });
        this.runningExercise = {...this.emptyExercise};
        this.exerciseChange.next(null)
        console.log(this.exercises)
    }

    
    cancelExercise(progress: number) {
        this.exercises.push({
            ...this.runningExercise, 
            date: new Date(),
            state: 'cancelled', 
            calories: this.runningExercise.calories * (progress / 100),
            duration: this.runningExercise.duration * (progress / 100),
        });
        this.runningExercise = {...this.emptyExercise};
        this.exerciseChange.next(null)
        console.log(this.exercises)
    }


    getRunningExercise(): Exercise {
        return {...this.runningExercise}
    }

}