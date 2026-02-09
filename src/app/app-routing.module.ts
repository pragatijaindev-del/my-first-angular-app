import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth-guard.service';
// routing  configuration
const routes: Routes = [
  // public uRL
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {

    // Renders DashboardComponent , blocks access unless authGurad alloes it, prevents unauthorized acccess


    path: 'dashboard',
    component: DashboardComponent,
    // route guard execute logic before route  activation
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
