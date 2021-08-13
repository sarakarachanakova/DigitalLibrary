import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BooksMenuComponent } from './books-menu/books-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { FooterComponent } from './footer/footer.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavBarComponent,
    HeroSectionComponent,
    BooksMenuComponent,
    SearchBarComponent,
    SortFilterComponent,
    FooterComponent,
    HomeMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
