import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'First Post',
      slug: 'first-post',
      content: 'Content of first post'
    }
  ];

  getPostBySlug(slug: string): Observable<Post | undefined> {
    return of(this.posts.find(post => post.slug === slug));
  }

  // Utility function to generate slugs
  generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/-+/g, '-'); // Replace multiple - with single -
  }
}