import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar Router
import { CalculadoraComponent } from "../calculadora/calculadora.component";
import { LineaComponent } from "../linea/linea.component";
import { ChatbotComponent } from "../chatbot/chatbot.component";

@Component({
  selector: 'app-ruta',
  standalone: true,
  imports: [CalculadoraComponent, LineaComponent, ChatbotComponent],
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {

  // Inyecta el Router en el constructor
  constructor(private router: Router) {}

  // Define el método para redirigir a la página "modules"
  goToModules(): void {
    this.router.navigate(['/modules']);  // Redirige a /modules
  }
}
