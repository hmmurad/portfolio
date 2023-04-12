import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-feature',
  templateUrl: './single-feature.component.html',
  styleUrls: ['./single-feature.component.scss']
})
export class SingleFeatureComponent {

  @Input() feature:any;

}
