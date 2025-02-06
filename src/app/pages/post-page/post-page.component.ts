import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent implements OnInit {
  slug: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the slug from the route parameters
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
      // Here you can fetch post data using the slug
      this.loadPost();
    });
  }

  private loadPost() {
    // Add your logic to fetch post data using the slug
    console.log('Loading post with slug:', this.slug);
  }
}
