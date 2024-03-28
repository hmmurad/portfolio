import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileNavDirective } from '../../mobilenav.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MobileNavDirective, RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuItems = ['Services', 'About', 'Contact',]
  open:boolean = false

  openMenu(event:Event) {
    event.preventDefault();
    this.open = !this.open;
  }
  


 
}
