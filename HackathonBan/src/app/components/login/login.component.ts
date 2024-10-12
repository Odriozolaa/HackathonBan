import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.credentials).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard']);
    }, error => {
      console.error('Error en el inicio de sesión', error);
    });
  }
}
