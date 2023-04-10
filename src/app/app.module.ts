import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';


import { CarouselModule } from 'primeng/carousel';
import { HeroComponent } from './components/hero/hero.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FeatureComponent } from './components/feature/feature.component';
import { PostComponent } from './components/post/post.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MainComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    HeroComponent,
    TestimonialComponent,
    FeatureComponent,
    PostComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
