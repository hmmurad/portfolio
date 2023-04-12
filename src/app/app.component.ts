import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pgdit-project';
  showmenu = false;


  ngOnInit(): void {
    
  }

  onshow() {
    this.showmenu = !this.showmenu
  }
  

}
