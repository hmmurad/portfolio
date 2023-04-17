import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from './shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  user: any = {
    name: 'Hosne Mobarak',
    image: '0011'
  }
  title = 'pgdit-project';
  showmenu = false;

  constructor(private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    
  }

  onshow() {
    this.showmenu = !this.showmenu
  }
  getPosts() {
    this.router.navigate(['/posts'], {queryParams: {limit: 10}})
  }
  

}
