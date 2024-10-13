import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';import { AuthGuard } from './guards/auth.guard';
import { ProductosComponent } from './productos/productos.component';
import { RutaComponent } from './ruta/ruta.component';
import { RecommendedModulesComponent } from './recommended-modules/recommended-modules.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LineaComponent } from './linea/linea.component';
import { ModulesComponent } from './modules/modules.component';
import { SurveyComponent } from './survey/survey.component';


export const appRoutes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: '', component: DashboardComponent, pathMatch: 'full' }, 
{ path: 'productos', component: ProductosComponent },
{ path: 'ruta', component: RutaComponent },
{ path: 'recommended-modules', component: RecommendedModulesComponent},
{path: 'calculadora', component: CalculadoraComponent},
{ path: 'modules', component: ModulesComponent},
{path: 'linea', component: LineaComponent},
{path: 'survey', component: SurveyComponent}
];
