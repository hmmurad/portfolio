import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
 

  portfolioItems:any;
  
  portfolio = this.portfolioService.getPortfolioItems()

  constructor(private config: ConfigService, private portfolioService: PortfolioService) {}


  ngOnInit(): void {
    this.portfolioItems = this.getPortfolioItems()
    console.log(this.portfolioItems);
    
  }

  getPortfolioItems() {
    return this.config.getConfig().portfolioItems;
  }
}
