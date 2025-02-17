import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'http://localhost:3000/api/gemini'; // Backend URL

  constructor(private http: HttpClient) {}

  sendPrompt(prompt: string): Observable<any> {
    const requestBody = {
      contents: [{ parts: [{ text: prompt }] }]
    };
    return this.http.post<any>(this.apiUrl, requestBody);
  }
}
