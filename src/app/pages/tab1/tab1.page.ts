import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  points = 230;

  constructor() {

  }

  ngOnInit(): void {


  }

  getUserPoints() {
    //TODO: Implement function after auth
  }

}
