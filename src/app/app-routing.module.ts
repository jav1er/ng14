import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { DebtsComponent } from './pages/debts/debts.component';

import { Error404Component } from './pages/error404/error404.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { CelsiusComponent } from './pages/celsius/celsius.component';

const routes: Routes = [
  //{ path: '', component: FirstPageComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id/:name', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'deuda', component: DebtsComponent },
  { path: 'celsius', component: CelsiusComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
