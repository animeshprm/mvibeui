import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

const aboutRoutes: Routes = [
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(aboutRoutes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
