import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list-route/book-list/book-list.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BookListEntryComponent} from './book-list-route/book-list-entry/book-list-entry.component';
import {
  MatButtonModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';
import {SearchComponent} from './search/search.component';
import {BookListRouteComponent} from './book-list-route/book-list-route.component';
import {BookRouteComponent} from './book-route/book-route.component';
import {routes} from './routes.const';
import {BookReadListComponent} from './book-route/book-read-list.component';
import {StateModule} from './state/state.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

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
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
