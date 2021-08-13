import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {BooksMenuComponent} from "./books-menu/books-menu.component";

const routes: Routes = [
  { path: 'cards', component: BooksMenuComponent },
  { path: 'books', component: BooksMenuComponent },
  { path: 'books-menu.component.html', component: BooksMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
