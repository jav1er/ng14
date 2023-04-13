import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { FirstPipe } from './pipes/first.pipe';
import { DebtsComponent } from './pages/debts/debts.component';
import { PersonalInformationComponent } from './components/forms/personal-information/personal-information.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCelsiusComponent } from './components/form-celsius/form-celsius.component';
import { CelsiusComponent } from './pages/celsius/celsius.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FirstPageComponent,
    HeaderComponent,
    FormRegisterComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    Error404Component,
    FirstPipe,
    DebtsComponent,
    PersonalInformationComponent,
    FormCelsiusComponent,
    CelsiusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
