import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  user: any = {
    name: 'Hosne Mobarak',
    image: '0011'
  }
  title = 'pgdit-project';
  showmenu = false;



  onshow() {
    this.showmenu = !this.showmenu
  }
  
}
