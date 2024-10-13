import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SurveyComponent } from "../../survey/survey.component";
import { ChatbotComponent } from '../../chatbot/chatbot.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginComponent, SurveyComponent, ChatbotComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToModules(): void {
    this.router.navigate(['/modules']); // Redirige a la página de "modules"
  }

}