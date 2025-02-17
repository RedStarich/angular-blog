import { Component, Input, inject, OnInit } from '@angular/core';
import { Post } from '../../data/interfaces/post.interface.';
import { Comment } from '../../data/interfaces/comment.interface';
import { CommentCardComponent } from "../comment-card/comment-card.component";
import { BlogDataService } from '../../data/services/blog-data.service';

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommentCardComponent],
  templateUrl: './comment-section.component.html',
  styleUrl: './comment-section.component.scss'
})
export class CommentSectionComponent {
  blogService = inject(BlogDataService);
  posts: Post[] = [];
  @Input() comments!: Comment[];
  @Input () post!: Post;
}
