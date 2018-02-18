import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogMeInComponent } from './log-me-in/log-me-in.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    LoginRoutingModule
  ],
  declarations: [LogMeInComponent]
})
export class LoginModule { }
