import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list-route/book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookListEntryComponent } from './book-list-route/book-list-entry/book-list-entry.component';
import {
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { BookListRouteComponent } from './book-list-route/book-list-route.component';
import { BookRouteComponent } from './book-route/book-route.component';
import { routes } from './routes.const';
import { BookReadListComponent } from './book-route/book-read-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListEntryComponent,
    SearchComponent,
    BookListRouteComponent,
    BookRouteComponent,
    BookReadListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
