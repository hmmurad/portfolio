import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/shared/services/config.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent {
  blog: any;
  posts:any[] = []
  constructor(private config: ConfigService, private postService: PostService) {}

  ngOnInit(): void {
    this.blog = this.getBlog()
    this.postService.getPosts()
    .pipe(
      map( resData => {
        const postsArray: any[] = [];
        for(const key in resData) {
          if(resData.hasOwnProperty(key)){
            postsArray.push({...resData[key], id: key})
          }
        }
        return postsArray;        
      }),
    )
    .subscribe({
      next: (posts) => {
        this.posts = posts        
      }
    })
    
  }
  

  getBlog() {
    return this.config.getConfig().blogPage;
  }
}
