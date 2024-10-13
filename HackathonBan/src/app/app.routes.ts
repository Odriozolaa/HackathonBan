import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';import { AuthGuard } from './guards/auth.guard';
import { ProductosComponent } from './productos/productos.component';

export const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '', component: DashboardComponent, pathMatch: 'full' }, 
{ path: 'productos', component: ProductosComponent },
];
