// src/app/signup-page/signup-page.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  username: string = '';
  password: string = '';
  private apiUrl: string = 'http://127.0.0.1:8000/api/register/';  // URL для регистрации на твоём Django backend

  constructor(private http: HttpClient) {}

  onRegister(): void {
    // Проверка, что поля не пустые
    if (!this.username || !this.password) {
      alert('Please fill in both username and password.');
      return;
    }

    // Создание тела запроса
    const body = {
      username: this.username,
      password: this.password
    };

    // Отправка POST-запроса на сервер
    this.http.post(this.apiUrl, body).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // После успешной регистрации, перенаправляем пользователя на страницу логина
        alert('Registration successful!');
        window.location.href = '/login';  // Перенаправляем на страницу логина
      },
      (error) => {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }
}
