import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';

// Interfaz para las preguntas de la encuesta
interface SurveyQuestion {
  question: string;
  options: string[];  // Las opciones textuales
  selectedAnswerValue?: number;  // El valor de la respuesta seleccionada (1 al 4)
}

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

  private apiUrl = 'https://hackathon-banorte-390732037168.us-central1.run.app/survey';

  // Preguntas y respuestas de la encuesta
  surveyQuestions: SurveyQuestion[] = [
    {
      question: "¿Conoces los conceptos básicos de finanzas personales?",
      options: ["Sí", "No", "Algunos conceptos", "Nunca lo he oído"]
    },
    {
      question: "¿Tienes un presupuesto personal?",
      options: ["Sí, lo sigo rigurosamente", "Sí, pero no lo sigo", "No, pero planeo tener uno", "No, nunca he tenido"]
    },
    {
      question: "¿Conoces la diferencia entre ahorro e inversión?",
      options: ["Sí, completamente", "Sí, pero no en profundidad", "He oído hablar de ello", "No tengo idea"]
    },
    {
      question: "¿Has invertido alguna vez en acciones o fondos de inversión?",
      options: ["Sí, regularmente", "Sí, alguna vez", "No, pero planeo hacerlo", "No, nunca"]
    },
    {
      question: "¿Tienes deudas en este momento?",
      options: ["Sí, muchas", "Sí, algunas", "No, estoy libre de deudas", "No estoy seguro"]
    },
    {
      question: "¿Entiendes cómo funciona el interés compuesto?",
      options: ["Sí, lo entiendo bien", "He oído hablar de ello", "No estoy seguro", "No, nunca lo he escuchado"]
    },
    {
      question: "¿Sabes cómo mejorar tu score de crédito?",
      options: ["Sí, tengo un plan", "He leído sobre ello", "No estoy seguro", "No, no tengo idea"]
    }
  ];

  leftColumnQuestions = this.surveyQuestions.slice(0, Math.ceil(this.surveyQuestions.length / 2));
  rightColumnQuestions = this.surveyQuestions.slice(Math.ceil(this.surveyQuestions.length / 2));

  constructor(private http: HttpClient) {}

  // Método para manejar el envío de la encuesta
  submitSurvey(): void {
    const answers = this.surveyQuestions.map(q => ({
      question: q.question,
      answerValue: q.selectedAnswerValue || 0  // Captura los valores de las respuestas seleccionadas (1 a 4)
    }));

    // Enviar respuestas a la API
    this.sendAnswersToApi(answers).subscribe(
      response => {
        console.log('Respuestas enviadas con éxito', response);
        alert('Gracias por completar la encuesta.');
      },
      error => {
        console.error('Error al enviar respuestas', error);
        alert('Hubo un problema al enviar tus respuestas. Inténtalo de nuevo más tarde.');
      }
    );
  }

  // Método para hacer el POST a la API
  sendAnswersToApi(answers: any[]): Observable<any> {
    return this.http.post(this.apiUrl, { answers });
  }
}
