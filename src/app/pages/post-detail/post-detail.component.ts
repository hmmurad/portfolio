import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit{
  id!:any;
  post:any;

  constructor(private config: ConfigService, private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.postService.getPostById(this.id).subscribe({
      next: (post) => {
        console.log(post);
        this.post = post
      }
    })
  }

  back() {
   this.config.cancel()    
  }
}
