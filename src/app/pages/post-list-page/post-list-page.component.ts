import { Component } from '@angular/core';
import { PostsComponent } from '../../post-list/posts.component';
@Component({
  selector: 'app-post-list-page',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './post-list-page.component.html',
  styleUrl: './post-list-page.component.scss'
})
export class PostListPageComponent {

}
