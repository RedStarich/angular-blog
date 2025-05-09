import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PostComponent } from "../../components-ui/post-card/post.component";
import { Post } from '../../data/interfaces/post.interface.';
import { PostsComponent } from '../../components-ui/post-list/posts.component';

@Component({
  selector: 'app-post-list-page',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './post-list-page.component.html',
  styleUrl: './post-list-page.component.scss'
})

export class PostListPageComponent {
  private http = inject(HttpClient);
  posts: any[] = [];

  constructor() {
    this.http.get('http://127.0.0.1:8000/api/blog/posts/').subscribe((data: any) => {
      this.posts = data;
    });
  }
}
