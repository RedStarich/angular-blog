import { Component, inject } from '@angular/core';
import { PostComponent } from "../post-card/post.component";
import { BlogDataService } from '../../data/services/blog-data.service';
import { Post } from '../../data/interfaces/post.interface.';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  blogService = inject(BlogDataService);
  posts: Post[] = [];

  constructor() {
    this.blogService.getAllPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
