import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  exercisesObservable: Observable<any[]>;
  queryText = "";
  showOverlay: boolean;
  newExercise = {
    name: "",
    weight: "",
    fxf: "",
    hatfield: "",
    area: "",
  };

  constructor(public appRouter: Router, private dataService: DataserviceService) { }

  ngOnInit() {
    this.exercisesObservable = this.dataService.getExercises();
    this.showOverlay = false;
    
  }

  addExercise() {
    this.dataService.createExercise(this.newExercise);    
    this.newExercise.name = "";
    this.newExercise.area = "";
    this.newExercise.weight = "";
    this.newExercise.fxf = "";
    this.newExercise.hatfield = "";
  }

  openAddOverlay() {
    this.showOverlay = !this.showOverlay;
  }

  


  updateView() {
    this.dataService.searchExercises(this.queryText);
  }
  /*
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }*/
}
