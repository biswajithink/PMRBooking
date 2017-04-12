 import { ModuleWithProviders } from '@angular/core';
 import { Routes, RouterModule} from '@angular/router';

import { LogInComponent } from './pages/login.component';
import { SignupComponent } from './pages/signup.component';
import { HomeComponent } from './pages/home.component';

export const appRoutes : Routes =[
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LogInComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'home',
        component:HomeComponent
    }
]

export const appRoutingProviders: any[] = [

];
export const AppRouting : ModuleWithProviders = RouterModule.forRoot(appRoutes);
