import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SurveyComponent } from "../../survey/survey.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LoginComponent, SurveyComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}