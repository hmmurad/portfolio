import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {title: 'frontend', icon: 'bx bx-code-alt', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure laborum doloribus fuga ipsa labore fugiat quae nemo'},
    {title: 'Backend', icon: 'bx bxs-data', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure laborum doloribus fuga ipsa labore fugiat quae nemo'},
    {title: 'Support', icon: 'bx bx-cog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iure laborum doloribus fuga ipsa labore fugiat quae nemo'},

  ]


}
