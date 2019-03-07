import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  exerciseItems: any;
  jsonData: any;
  exerciseFavorite = false;

  constructor(private db: AngularFireDatabase) {
    }

  getExercises(): Observable<any[]> {
    return this.db.list('/exercises').valueChanges();
  }

  getExercise(name): Observable<any[]> {
    return this.db.list('/exercises/' + name).valueChanges();
  }

  createExercise(exerciseObject) {
    let newExercise = {
      area: exerciseObject.area,
      fxf: exerciseObject.fxf,
      hatfield: exerciseObject.hatfield,
      name: exerciseObject.name,
      weight: exerciseObject.weight
    }

    this.db.list('/exercises/').push(newExercise);
  }

  //does not work:
  updateWorkout(exercise){
    console.log("hey there");
    console.log(exercise);
    
    this.db.list('/workouts/' + exercise).set(
      name, "NANANANA"
    
    );
    console.log("error");
    
  }
//

  getWorkouts(): Observable<any[]> {
    return this.db.list('/workouts').valueChanges();
  }


}
