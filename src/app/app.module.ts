import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, provideRoutes, Routes, RouterOutlet, RouterLink } from '@angular/router'
import { HashLocationStrategy } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { HighlightModule } from 'ngx-highlight/fill-highlight.module';

import { AppRoutingModule } from './app-routing.module';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabMenuMvibeComponent } from './tab-menu-mvibe/tab-menu-mvibe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabMenuMvibeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    MenuModule,
    TabMenuModule,
    HighlightModule,
    LoginModule,
    HomeModule,
    AboutModule
  ],
  providers: [{provide: HashLocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
