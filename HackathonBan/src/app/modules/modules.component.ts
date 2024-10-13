import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {
  contentMap = {
    "Conceptos Básicos de Finanzas Personales": {
      "resources": ["Introducción a Finanzas Personales", "Presupuesto Básico", "Ahorro vs. Inversión"]
    },
    "Cómo Crear un Presupuesto": {
      "resources": ["Cómo Crear un Presupuesto", "Control de Gastos", "Herramientas para Presupuesto"]
    },
    "Ahorro vs. Inversión": {
      "resources": ["Introducción a Ahorro", "Tipos de Inversiones", "Riesgo y Rendimiento"]
    },
    "Estrategias de Ahorro": {
      "resources": ["Estrategias de Ahorro", "Ahorro a Largo Plazo", "Inversiones de Bajo Riesgo"]
    },
    "Tipos de Cuentas de Ahorro": {
      "resources": ["Tipos de Cuentas", "Intereses y Beneficios", "Apertura de Cuentas"]
    },
    "Introducción a las Inversiones": {
      "resources": ["Guía de Inversiones", "Riesgo y Rendimiento", "Mercados Financieros"]
    },
    "Gestión de Deudas": {
      "resources": ["Tipos de Deudas", "Estrategias de Pago de Deudas", "Control de Créditos"]
    },
    "Planificación Financiera": {
      "resources": ["Establecimiento de Metas Financieras", "Uso de Herramientas Financieras", "Presupuesto Personal"]
    },
    "Aspectos Fiscales de Inversiones": {
      "resources": ["Declaración de Impuestos", "Beneficios Fiscales", "Planificación Fiscal"]
    },
    "Ética Financiera": {
      "resources": ["Principios de Ética Financiera", "Responsabilidad Financiera", "Sostenibilidad Financiera"]
    }
  };

  // Convertir el contentMap en un arreglo para poder usar *ngFor
  modules = Object.entries(this.contentMap);
}
