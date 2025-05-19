import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'; // exemple
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  apiSpec: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getOpenApiSpec().subscribe({
      next: (data: any) => {        // Typage explicite de data
        this.apiSpec = data;
        console.log(data);
      },
      error: (err: HttpErrorResponse) => {  // Typage explicite de err
        console.error('Erreur API:', err.message);
      }
    });
  }
}
