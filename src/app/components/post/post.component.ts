import { Component , OnInit} from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  blog: any;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.blog = this.getBlog()
  }

  getBlog() {
    return this.config.getConfig().blogPage;
  }

}
