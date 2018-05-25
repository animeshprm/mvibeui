import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home/home-screen/home-screen.component'

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeScreenComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }