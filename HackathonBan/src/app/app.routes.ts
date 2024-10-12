import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
{ path: '', component: HomeComponent, pathMatch: 'full' } 
];
