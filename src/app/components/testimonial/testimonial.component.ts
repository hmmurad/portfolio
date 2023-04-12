import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit{
  testimonials: any;

  constructor(private config: ConfigService) {

  }

  ngOnInit(): void {
    this.testimonials = this.gettestimonials()
  }

  gettestimonials() {
    return this.config.getConfig().testimonials;
  }

}
