import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', password: '' };

  constructor(private authService: AuthService) { }

  register(): void {
    this.authService.register(this.user).subscribe(response => {
      console.log('Usuario registrado exitosamente', response);
    }, error => {
      console.error('Error en el registro', error);
    });
  }
}
