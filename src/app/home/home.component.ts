import { Component } from '@angular/core';
import { PostsComponent } from "../components-ui/post-list/posts.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
