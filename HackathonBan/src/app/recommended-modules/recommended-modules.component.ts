import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommended-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended-modules.component.html',
  styleUrl: './recommended-modules.component.css'
})
export class RecommendedModulesComponent {
  moduleNames: string[] = [];

  // Aquí tienes los 10 módulos predefinidos con icono y descripción
  modulesData = [
    { name: 'Conceptos Básicos de Finanzas Personales', icon: 'ruta-al-icono1.png' },
    { name: 'Cómo Crear un Presupuesto', icon: 'ruta-al-icono2.png' },
    { name: 'Ahorro vs. Inversión', icon: 'ruta-al-icono3.png' },
    { name: 'Estrategias de Ahorro', icon: 'ruta-al-icono4.png' },
    { name: 'Tipos de Cuentas de Ahorro', icon: 'ruta-al-icono5.png' },
    { name: 'Introducción a las Inversiones', icon: 'ruta-al-icono6.png' },
    { name: 'Gestión de Deudas', icon: 'ruta-al-icono7.png' },
    { name: 'Planificación Financiera', icon: 'ruta-al-icono8.png' },
    { name: 'Aspectos Fiscales de Inversiones', icon: 'ruta-al-icono9.png' },
    { name: 'Ética Financiera', icon: 'ruta-al-icono10.png' }
  ];
  

  // Aquí almacenarás los módulos que coinciden con los nombres que recibes de la API
  recommendedModules: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llama a la API para obtener los nombres de los módulos
    this.fetchModuleNames();
  }

  // Método para obtener los nombres de los módulos desde la API
  fetchModuleNames(): void {
    const apiUrl = 'https://hackathon-banorte-390732037168.us-central1.run.app';  // Cambia la URL por la correcta

    this.http.get<string[]>(apiUrl).subscribe(
      (names) => {
        this.moduleNames = names;  // Guardamos los nombres obtenidos

        // Filtrar los módulos en base a los nombres recibidos de la API
        this.recommendedModules = this.modulesData.filter(module =>
          this.moduleNames.includes(module.name)
        );
      },
      (error) => {
        console.error('Error al obtener los nombres de los módulos:', error);
      }
    );
  }
}
