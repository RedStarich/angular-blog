import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PostComponent } from "../../components-ui/post-card/post.component";
import { Post } from '../../data/interfaces/post.interface.';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent {
  private http = inject(HttpClient);
  posts: any[] = [];

  constructor() {
    this.http.get('http://127.0.0.1:8000/api/blog/posts/').subscribe((data: any) => {
      this.posts = data;
    });
  }
}
