import { Component } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
  blog: any;
  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.blog = this.getBlog()
  }

  getBlog() {
    return this.config.getConfig().blogPage;
  }
}
