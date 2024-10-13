import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = ''; // Cambia la URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Guarda el token en el localStorage si el login es exitoso
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Método para cerrar sesión (eliminar token)
  logout(): void {
    localStorage.removeItem('token');
  }
}
