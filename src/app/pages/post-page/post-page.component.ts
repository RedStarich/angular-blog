import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from '../../data/services/blog-data.service';
import { Post } from '../../data/interfaces/post.interface.';
import { PostComponent } from '../../components-ui/post-card/post.component'; // Импортируем компонент
import { CommentSectionComponent } from '../../components-ui/comment-section/comment-section.component';
import { Comment } from '../../data/interfaces/comment.interface';
import { CommentCardComponent } from '../../components-ui/comment-card/comment-card.component';

@Component({
  selector: 'app-post-page',
  standalone: true,
  imports: [PostComponent, CommentSectionComponent, CommentCardComponent],
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post!: Post;
  comments: Comment[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogDataService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log("Slug из URL:", slug);
    

    if (slug) {
      this.blogService.getPostBySlug(slug).subscribe(
        (data) => {
          if (data) {
            this.post = data;
            if(this.post.id) {
              this.blogService.getAllComments().subscribe(
                (data) => {
                  console.log('All comments:', data);
                  console.log('Current post ID:', this.post.id);
                  this.comments = data.filter((comment) => Number(comment.postId) === Number(this.post.id));
                },
                (error) => console.error("Ошибка загрузки комментариев", error)
              );
            }
          } else {
            console.error("Пост не найден");
            this.comments = [];
          }
        },
        (error) => console.error("Ошибка загрузки поста", error)
      );
    }
  }
}
