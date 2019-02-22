import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  exercisesObservable: Observable<any[]>;
  freeExercises: false;

  constructor(public appRouter: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.exercisesObservable = this.getExercises('/exercises');
  }

  getExercises(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
    //this.exerciseService.getexercises().subscribe(exercises => this.exercises = exercises);
  }
}
