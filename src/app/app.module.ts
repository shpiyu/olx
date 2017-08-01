import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AppComponent }  from './app.component';
import * as $ from "jquery";
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, SearchbarComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
