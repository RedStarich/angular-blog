import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Post } from '../data/interfaces/post.interface.'; 

@Injectable({ providedIn: 'root' })
export class PostService {
  private apiUrl = 'assets/blog-data.json'; // JSON-файл с постами

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostBySlug(slug: string): Observable<Post | undefined> {
    return this.getPosts().pipe(
      map(posts => posts.find(post => post.id === slug)) // Ищем пост по slug
    );
  }
}
