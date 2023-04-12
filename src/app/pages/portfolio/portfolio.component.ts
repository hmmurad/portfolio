import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
 

  portfolioItems:any

  constructor(private config: ConfigService) {}


  ngOnInit(): void {
    this.portfolioItems = this.getPortfolioItems()
    console.log(this.portfolioItems);
    
  }

  getPortfolioItems() {
    return this.config.getConfig().portfolioItems;
  }
}
