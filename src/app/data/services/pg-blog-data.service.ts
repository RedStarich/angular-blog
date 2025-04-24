import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface.';

@Injectable({
  providedIn: 'root',
})
export class PgBlogDataService {

  private apiUrl = 'http://127.0.0.1:8000/blog/api/posts/';  // URL к API

  constructor(private http: HttpClient) {}

  // Получаем все посты
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
