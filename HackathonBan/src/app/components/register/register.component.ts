import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], // Importar FormsModule para usar ngModel
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', password: '' }; // Datos del usuario para registrar

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Usuario registrado exitosamente', response);
        alert('Registro exitoso, ahora puede iniciar sesión.');
      },
      error => {
        console.error('Error en el registro', error);
        alert('Hubo un error en el registro. Intente nuevamente.');
      }
    );
  }
}
