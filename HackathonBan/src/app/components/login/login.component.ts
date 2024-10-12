import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para usar ngModel
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' }; // Credenciales para iniciar sesión

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token); // Guarda el token en localStorage
        console.log('Inicio de sesión exitoso', response);
        this.router.navigate(['/dashboard']); // Redirige al dashboard
      },
      error => {
        console.error('Error en el inicio de sesión', error);
        alert('Credenciales incorrectas. Intente nuevamente.');
      }
    );
  }
}
