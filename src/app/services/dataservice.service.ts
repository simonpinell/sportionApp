import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private db: AngularFireDatabase) { }

  getExercises(): Observable<any[]> {
    return this.db.list('/exercises').valueChanges();
    //this.exerciseService.getexercises().subscribe(exercises => this.exercises = exercises);
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
}
