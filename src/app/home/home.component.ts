import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { PostsComponent } from "../posts/posts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
