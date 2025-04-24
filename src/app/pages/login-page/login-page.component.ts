import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {
  username: string = '';
  password: string = '';
  private apiUrl: string = 'http://127.0.0.1:8000/api/token/';  // URL для логина

  constructor(private http: HttpClient) {}

  onLogin(): void {
    if (!this.username || !this.password) {
      alert('Please fill in both username and password.');
      return;
    }

    // Создание тела запроса
    const body = {
      username: this.username,
      password: this.password
    };

    // Отправка POST-запроса на сервер для получения токенов
    this.http.post(this.apiUrl, body).subscribe(
      (response: any) => {
        console.log('Login successful:', response);
        // Сохранение токенов в localStorage или sessionStorage
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        alert('Login successful!');
        window.location.href = '/dashboard';  // Перенаправление на главную страницу после логина
      },
      (error) => {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    );
  }
}
