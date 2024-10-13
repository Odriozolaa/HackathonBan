import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { appRoutes } from './app.routes'; // Importar las rutas definidas
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Exportamos la configuración general de la aplicación
export const appConfig = {
providers: [
  provideRouter(appRoutes, withComponentInputBinding()), // Usa las rutas importadas aquí
  provideHttpClient(withFetch()),
  importProvidersFrom(FormsModule, HttpClientModule) // Añadir HttpClientModule aquí
]
};