import { Component } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  workoutsObservable: any;
  filteredWorkouts: any;

  showAllDetails = false;
  showDetails = false;
  queryText: string;
  exerciseFavorite = false;

  constructor(public appRouter: Router, private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.workoutsObservable = this.dataService.getWorkouts();  
  }

  toggleAllDetails() {
    this.showAllDetails = !this.showAllDetails;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  setFavorite() {
    this.dataService.updateWorkout("Morpheus");    
  }

}


