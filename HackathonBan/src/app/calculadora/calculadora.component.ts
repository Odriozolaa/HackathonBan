import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  amount: string = '0.00';  // Empezamos en $0.00
  time: number = 0;
  rate: string = '';  // Tasa de interés será una cadena para manejar el signo de %
  totalSavings: number | null = null;

  // Método para calcular el ahorro
  calculateSavings(): void {
    const amountNumber = parseFloat(this.amount.replace(/[^0-9.-]+/g, ''));  // Convertimos a número removiendo los caracteres no numéricos
    const rateNumber = parseFloat(this.rate.replace(/[^0-9.]+/g, '')) / 100;  // Convertimos a número y lo tratamos como porcentaje
    this.totalSavings = amountNumber * Math.pow(1 + rateNumber, this.time);
  }

  // Formatear la cantidad de dinero en tiempo real con comas
  formatAmount(event: any): void {
    let cleanAmount = this.amount.replace(/[^0-9]+/g, '');  // Remueve caracteres no numéricos

    // Si el usuario ingresa un dígito válido (0-9)
    const inputDigit = event.data;
    if (!isNaN(Number(inputDigit)) && inputDigit !== null) {
      cleanAmount += inputDigit;

      // Formateamos la cantidad con comas y dos decimales
      const formattedAmount = (parseFloat(cleanAmount) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      
      this.amount = `$${formattedAmount}`;
    }

    // Si el usuario borra un dígito
    if (event.inputType === 'deleteContentBackward') {
      cleanAmount = cleanAmount.slice(0, -1);
      if (cleanAmount === '') {
        cleanAmount = '0';
      }
      const formattedAmount = (parseFloat(cleanAmount) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      this.amount = `$${formattedAmount}`;
    }
  }

  // Formatear la tasa de interés en tiempo real con el signo %
  formatRate(event: any): void {
    let cleanRate = this.rate.replace(/[^0-9.]+/g, '');  // Remueve caracteres no numéricos excepto el punto

    // Si el usuario ingresa un dígito válido (0-9)
    const inputDigit = event.data;
    if (!isNaN(Number(inputDigit)) && inputDigit !== null) {
      cleanRate += inputDigit;
      this.rate = `${cleanRate}%`;  // Añadimos el signo %
    }

    // Si el usuario borra un dígito
    if (event.inputType === 'deleteContentBackward') {
      cleanRate = cleanRate.slice(0, -1);
      this.rate = cleanRate ? `${cleanRate}%` : '';  // Si está vacío, lo dejamos vacío
    }
  }
}