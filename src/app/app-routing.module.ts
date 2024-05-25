import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';
import { Grid3Component } from './grid3/grid3.component';
import { Grid4Component } from './grid4/grid4.component';

const routes: Routes = [
  { path: 'grid1', component: Grid1Component },
  { path: 'grid2', component: Grid2Component },
  { path: 'grid3', component: Grid3Component },
  { path: 'grid4', component: Grid4Component },
  { path: '', redirectTo: '/grid1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
