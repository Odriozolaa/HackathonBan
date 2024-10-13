import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '86a394869e30483e88a0e43a722314bc'; // Reemplaza con tu API Key de NewsAPI
  private apiUrl = `https://newsapi.org/v2/everything?q=finance&language=es&apiKey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
