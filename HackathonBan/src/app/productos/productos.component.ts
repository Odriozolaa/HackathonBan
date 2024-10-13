import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule], // Asegúrate de agregar CommonModule aquí
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { image: 'assets/tdc.png', subtitle: 'Tarjetas de Crédito' },
    { image: 'assets/nomina.png', subtitle: 'Cuenta de Nomina' },
    { image: 'assets/hipoteca.png', subtitle: 'Credito hipotecario' },
    { image: 'assets/fondos.png', subtitle: 'Fondos de inversion' }
  ];

  recomendaciones = [
    { image: 'assets/Seguro-de-Vida-thumbnail.png', subtitle: 'Seguro de vida' },
    { image: 'assets/stdc.png', subtitle: 'Seguro de tarjeta de credito' },
    { image: 'assets/auto.png', subtitle: 'Seguro de auto' },
    { image: 'assets/shipo.png', subtitle: 'seguros de credito hipotecario' }
  ];
}
