import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TutorialPage } from './tutorial.page';
import { TutorialPageRoutingModule } from './tutorial-routing.module';

const routes: Routes = [
  {
    path: '',
    component: TutorialPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TutorialPageRoutingModule
  ],
  declarations: [TutorialPage]
})
export class TutorialPageModule {}
