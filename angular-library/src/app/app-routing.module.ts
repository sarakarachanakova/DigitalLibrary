import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {BooksMenuComponent} from "./books-menu/books-menu.component";
import {HomeMenuComponent} from "./home-menu/home-menu.component";

const routes: Routes = [
  { path: '', component: HomeMenuComponent},
  { path: 'books-menu', component: BooksMenuComponent},
  { path: 'home-menu', component: HomeMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
