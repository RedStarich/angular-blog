import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  
  http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/gemini'; // Backend URL

  getGeminiResponse(prompt: string): Observable<string> {
    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }]
    };
    return this.http.post(this.apiUrl, requestBody, { responseType: 'text' });
  }
}
