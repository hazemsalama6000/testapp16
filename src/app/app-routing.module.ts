import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { preloadingService } from './services/preloading.service';
import { employeeResolve } from './services/employee.resolve';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },

  {
    path: 'auth',
    loadChildren: () => import('./authorization/authorization-route').then(a => a.routes)
  },

  { path: "**", component: NotFoundComponent ,resolve:{data:employeeResolve}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: preloadingService} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
