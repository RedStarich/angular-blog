import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from '../../data/services/blog-data.service';
import { Post } from '../../data/interfaces/post.interface.';
import { PostComponent } from '../../post-card/post.component'; // Импортируем компонент

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [PostComponent], // Добавляем в imports
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogDataService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log("Slug из URL:", slug); // Отладка

    if (slug) {
      this.blogService.getPostBySlug(slug).subscribe(
        (data) => {
          if (data) {
            this.post = data;
          } else {
            console.error("Пост не найден");
          }
        },
        (error) => console.error("Ошибка загрузки поста", error)
      );
    }
  }
}
