import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent }  from './app.component';
import { NewAdComponent } from './components/newAd/newAd.component';
import { FormsModule } from '@angular/forms';
import * as $ from "jquery";
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot([
                  
                  {path:"newAd", component: NewAdComponent},
                  {path:"", component: HomeComponent},
                  {path:":category", component: HomeComponent},
                  
                  
                  
  ]) ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, SearchbarComponent, HomeComponent, NewAdComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
