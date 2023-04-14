import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConfigService } from 'src/app/shared/services/config.service';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  portfolioItems: any;

  @Input() title = '';
  items = this.portfolioService.getPortfolioItems()

  constructor(private config: ConfigService, private portfolioService: PortfolioService, private route: ActivatedRoute) {}


  ngOnInit(): void {    this.portfolioItems = this.getPortfolioItems()
  

    
  }

  getPortfolioItems() {
    return this.config.getConfig().portfolioItems;
  }
}
