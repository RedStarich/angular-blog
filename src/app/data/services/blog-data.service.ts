import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../interfaces/post.interface.';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  http = inject(HttpClient);
  baseApiUrl = 'assets/blog-data.json';

  // Получаем все посты
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseApiUrl);
  }

  getPostBySlug(slug: string): Observable<Post | undefined> {
    return this.getAllPosts().pipe(
      map(posts => {
        const post = posts.find(post => post.id.toString() === slug); // Приводим id к строке
        if (!post) {
          console.error(`Error: Post with slug ${slug} not found`);
        }
        return post;
      })
    );
  }  
}
