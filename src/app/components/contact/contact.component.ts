import { Component, ViewEncapsulation } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [GoogleMapsModule ],
  templateUrl: './contact.component.html',
  styles: `
    .map-container {
      width: 100% !important;
      border-radius: 10px !important;
    }
  
  `,
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {

  mapOptions: any = {
    center: { lat: 23.76854212107803, lng: 90.39211157644824 },
    zoom : 13
 }
 marker = {
    position: { lat: 23.76854212107803, lng: 90.39211157644824 },
 }

}
