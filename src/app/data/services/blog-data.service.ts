import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Post } from '../interfaces/post.interface.';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  http = inject(HttpClient);
  baseApiUrl = 'assets/blog-data.json';
  commentApiUrl = 'assets/comments.json';

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
  getCommentsByPostId(postId: String): Observable<Comment[] | undefined> {
    return this.getAllComments().pipe(
      map(comments => {
        const postComments = comments.filter(comment => comment.postId === postId);
        if (!postComments) {
          console.error(`Error: Comments for post with id ${postId} not found`);
        }
        return postComments;
      })
    );
  }
  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentApiUrl);
  }
}
