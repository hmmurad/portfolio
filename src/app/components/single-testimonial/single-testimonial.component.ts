import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-testimonial',
  templateUrl: './single-testimonial.component.html',
  styleUrls: ['./single-testimonial.component.scss']
})
export class SingleTestimonialComponent {

  @Input() testimonial:any;
}
