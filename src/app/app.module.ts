import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CarouselModule } from 'primeng/carousel';


import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';


import { HeroComponent } from './components/hero/hero.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PostComponent } from './components/post/post.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleFeatureComponent } from './components/single-feature/single-feature.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { PortfolioDetailComponent } from './pages/portfolio-detail/portfolio-detail.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { SingleTestimonialComponent } from './components/single-testimonial/single-testimonial.component';
import { ResumeComponent } from './pages/resume/resume.component';

import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    AboutComponent,
    PortfolioComponent,
    HeroComponent,
    TestimonialComponent,
    FeatureComponent,
    PostComponent,
    PortfolioItemComponent,
    FooterComponent,
    ProjectsComponent,
    SingleFeatureComponent,
    BlogContentComponent,
    PortfolioDetailComponent,
    ContactPageComponent,
    BlogPageComponent,
    PostDetailComponent,
    SingleTestimonialComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    TabViewModule,
    ProgressBarModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
