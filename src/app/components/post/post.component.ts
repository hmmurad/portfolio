import { Component , Input, OnInit} from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { PostService } from 'src/app/shared/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  @Input() post:any;
 

  constructor(private config: ConfigService) {}

  ngOnInit(): void {

  }


}
