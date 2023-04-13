import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PortfolioDetailComponent } from './pages/portfolio-detail/portfolio-detail.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '',  children: [
    { path: '' , component: AboutComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'portfolio/:id', component: PortfolioDetailComponent},
    { path: 'posts', component: BlogPageComponent},
    { path: 'posts/:id', component: PostDetailComponent},
    { path: 'contact', component: ContactPageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
