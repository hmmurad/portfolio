import { Component, OnInit, ViewChild } from '@angular/core';


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


  ngOnInit(): void {
    
  }

  onshow() {
    this.showmenu = !this.showmenu
  }
  

}
