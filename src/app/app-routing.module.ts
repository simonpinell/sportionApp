import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: './pages/tabs/tabs.module#TabsPageModule' 
  },
  { 
    path: 'tutorial', 
    loadChildren: './tutorial/tutorial.module#TutorialPageModule' 
  },
  {
    path: 'details/:name',
    loadChildren: './pages/exercise-detail/exercise-detail.module#ExerciseDetailPageModule'
  }

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
