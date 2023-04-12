import { Component } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent {
  blog: any;
  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.blog = this.getBlog()
  }

  getBlog() {
    return this.config.getConfig().blogPage;
  }
}
