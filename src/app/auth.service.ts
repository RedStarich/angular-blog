// src/app/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/'; // URL к Django API

  constructor(private http: HttpClient) { }

  // Регистрация
  register(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + 'register/', { username, password });
  }

  // Логин (получение токена)
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + 'token/', { username, password });
  }

  // Получение данных пользователя с использованием токена
  getUserData(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.apiUrl + 'user/', { headers });
  }
}
