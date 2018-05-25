import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogMeInComponent } from './log-me-in/log-me-in.component';
import { AboutUsComponent } from '../about/about-us/about-us.component';

const loginRoutes: Routes = [
  { path: 'login',  component: LogMeInComponent },
  { path: 'aboutus',  component: AboutUsComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
