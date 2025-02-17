import { Component, Input } from '@angular/core';
import { Post } from '../../data/interfaces/post.interface.';

@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post!: Post;
}
