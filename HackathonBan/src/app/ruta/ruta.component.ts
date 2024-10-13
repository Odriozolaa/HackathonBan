import { Component} from '@angular/core';
import { CalculadoraComponent } from "../calculadora/calculadora.component";

@Component({
  selector: 'app-ruta',
  standalone: true,
  imports: [CalculadoraComponent],
  templateUrl: './ruta.component.html',
  styleUrl: './ruta.component.css'
})
export class RutaComponent {

}
