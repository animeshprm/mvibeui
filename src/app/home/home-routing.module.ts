import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const homeRoutes: Routes = [
  { path: 'home', component: HomeScreenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
