import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StoreModule, StoreRootModule } from '@ngrx/store'

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { counterReducer } from './app/store/count.reducer';
import { reducers } from './app/store/store';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers))]
})
  .catch(err => console.error(err));
