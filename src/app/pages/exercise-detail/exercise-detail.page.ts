import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {

  exercisesObservable: any;

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataserviceService){}

  ngOnInit() {
    console.log(location);
    
    this.exercisesObservable = this.dataService.getExercise(location);
    console.log(this.exercisesObservable);
    

  }

  goBack(): void {
    this.location.back();
  }

}
