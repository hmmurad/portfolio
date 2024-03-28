import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  portfolioItem = [
    {title: 'Blog Site', description: 'Simple Blog Application', link: 'https://blog-task-793fb.web.app/', image: 'blog'},
    {title: 'Recipe Application', description: 'Simple Blog Application', link: 'https://mymenu-197f7.web.app/', image: 'recipe'},
    {title: 'Angular Quiz Application', description: 'Simple Blog Application', link: 'https://ngquiz-fe887.web.app/', image: 'quiz'},
    {title: 'Angular Portfolio Application', description: 'Simple Blog Application', link: 'https://ngmurad-portfolio.netlify.app/', image: 'portfolio'},
    {title: 'Angular todo Application', description: 'Simple Blog Application', link: 'https://6587259fb8d635b272d201ed--angular-todo-signal.netlify.app/todos', image: 'todos'},
  ]

}
