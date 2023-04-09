import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '',  children: [
    { path: '', component: MainComponent},
    { path: 'about' , component: AboutComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: 'contact' , component: ContactComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
