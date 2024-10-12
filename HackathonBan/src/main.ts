import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Asegúrate de que la ruta sea correcta

// Bootstrap de la aplicación con la configuración exportada
bootstrapApplication(AppComponent, appConfig);
