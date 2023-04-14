import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit{
  item:any;
  id:any;

  constructor(private route:ActivatedRoute, private portfolioService: PortfolioService) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')
    this.item = this.portfolioService.getPortfolioItem(this.id);
    console.log(this.id);
    console.log( this.item );
    
    
  }

  

}
