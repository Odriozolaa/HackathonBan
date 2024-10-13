import { Component} from '@angular/core';
import { CalculadoraComponent } from "../calculadora/calculadora.component";
import { LineaComponent } from "../linea/linea.component";

@Component({
  selector: 'app-ruta',
  standalone: true,
  imports: [CalculadoraComponent, LineaComponent],
  templateUrl: './ruta.component.html',
  styleUrl: './ruta.component.css'
})
export class RutaComponent {

}
