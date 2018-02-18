import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }