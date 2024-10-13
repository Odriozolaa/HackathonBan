import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importamos HttpClient para hacer las peticiones a la API
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  userQuestion: string = '';  // Almacena la pregunta del usuario
  chatHistory: { text: string, from: 'user' | 'bot' }[] = [];  // Historial del chat
  private apiUrl = 'https://hackathon-banorte-390732037168.us-central1.run.app/chatbot';  // URL de la API

  constructor(private http: HttpClient) {}

  sendQuestion() {
    if (this.userQuestion.trim()) {
      // Agrega la pregunta del usuario al historial
      this.chatHistory.push({ text: this.userQuestion, from: 'user' });

      // Llamar a la API para obtener la respuesta
      this.http.post<any>(this.apiUrl, { question: this.userQuestion }).subscribe(
        (response) => {
          // Cuando la API responde, agregamos la respuesta del chatbot al historial
          this.chatHistory.push({ text: response.answer, from: 'bot' });
        },
        (error) => {
          // Si hay un error, mostramos un mensaje de error en el chat
          this.chatHistory.push({ text: 'Lo siento, ocurrió un error al procesar tu pregunta.', from: 'bot' });
        }
      );

      // Limpiar el campo de entrada del usuario
      this.userQuestion = '';
    }
  }
}