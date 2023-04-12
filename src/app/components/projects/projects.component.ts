import { Component, Input } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  portfolioItems: any;

  @Input() title = '';

  constructor(private config: ConfigService) {}


  ngOnInit(): void {
    this.portfolioItems = this.getPortfolioItems()
    console.log(this.portfolioItems);
    
  }

  getPortfolioItems() {
    return this.config.getConfig().portfolioItems;
  }
}
