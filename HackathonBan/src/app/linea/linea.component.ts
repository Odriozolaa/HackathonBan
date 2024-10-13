// timeline.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 'app-linea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {
  lineaPoints = [
    'Conceptos Básicos de Finanzas Personales',
    'Cómo Crear un Presupuesto',
    'Ahorro vs. Inversión',
    'Estrategias de Ahorro',
    'Tipos de cuentas de ahorro',
    'Introduccion a las inversiones',
    'Gestion de deusas',
    'Planificación financiera',
    'Aspectos fiscales de inversiones',
    'Etica financiera'
  ];
  highlightedIndex = 8; // Puedes cambiar este índice para resaltar otro punto
  colorHex = '#5B6670';
}
