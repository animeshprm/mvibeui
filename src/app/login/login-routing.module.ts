import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogMeInComponent } from './log-me-in/log-me-in.component';

const loginRoutes: Routes = [
  { path: 'login',  component: LogMeInComponent }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
