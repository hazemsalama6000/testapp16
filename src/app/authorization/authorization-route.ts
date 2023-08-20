import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./components/base/base.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

export const routes: Routes = [
    {
        path: 'ss',
        component: BaseComponent,
        children: [
            { path: 'login', loadComponent: ()=>import('./components/login/login.component').then(a=>a.LoginComponent) },
            { path: 'register', loadComponent: ()=>import('./components/register/register.component').then(a=>a.RegisterComponent) }
        ]
    }
];