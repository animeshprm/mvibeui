import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogMeInComponent } from './log-me-in/log-me-in.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LogMeInComponent]
})
export class LoginModule { }
