import { Component , Input, OnInit} from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent  implements OnInit{

  @Input() portfolio:any;
  constructor(private config: ConfigService) {}

  ngOnInit(): void {

    
  }



}
