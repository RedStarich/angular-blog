import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface.';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  http = inject(HttpClient);

  baseApiUrl = 'assets/blog-data.json';


  getTestBlogData() {
    return this.http.get<Post[]>(`${this.baseApiUrl}`);
  }
} 
