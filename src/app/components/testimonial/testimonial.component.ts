import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  products: any[] = [
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'murad', text: 'this is text', designation: 'Software', image: '0011'},
    {name: 'hm murad', text: 'this is text', designation: 'Software', image: '0011'},
  ]
}
