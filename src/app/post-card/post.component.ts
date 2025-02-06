import { Component, Input } from '@angular/core';
import { Post } from '../data/interfaces/post.interface.';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post !: Post;
}
