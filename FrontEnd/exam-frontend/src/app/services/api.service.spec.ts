import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080'; // ton backend Spring Boot

  constructor(private http: HttpClient) { }

  // Exemple : récupérer la doc OpenAPI JSON
  getOpenApiSpec(): Observable<any> {
    return this.http.get(`${this.baseUrl}/v3/api-docs`);
  }

  // Ici tu peux rajouter d'autres méthodes selon ton API
}
