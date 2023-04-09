import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  products: any[] = [
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'hm murad', text: 'this is text', designation: 'Software', image: '0011'},
  ]

}
