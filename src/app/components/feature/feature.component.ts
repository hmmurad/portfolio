import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit{

  whatIDo:any;

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
      this.whatIDo = this.getFeaturePage()
      
      
  }

  getFeaturePage() {
    return this.config.getConfig().whatIDo;
  }


}
