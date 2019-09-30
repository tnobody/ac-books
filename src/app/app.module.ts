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
  MatSnackBarModule,
  MatMenuModule,
  MatDialogModule
} from '@angular/material';
import {SearchComponent} from './search/search.component';
import {BookListRouteComponent} from './book-list-route/book-list-route.component';
import {BookRouteComponent} from './book-route/book-route.component';
import {routes} from './routes.const';
import {BookReadListComponent} from './book-route/book-read-list.component';
import {StateModule} from './state/state.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { ExportDialogComponent } from './data-sync/export-dialog.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ImportDialogComponent } from './data-sync/import-dialog.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ImportRouteComponent } from './data-sync/import-route.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListEntryComponent,
    SearchComponent,
    BookListRouteComponent,
    BookRouteComponent,
    BookReadListComponent,
    ExportDialogComponent,
    ImportDialogComponent,
    ImportRouteComponent
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
    MatMenuModule,
    MatDialogModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgxQRCodeModule,
    ZXingScannerModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled'
    }),
    StateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  entryComponents: [
    ExportDialogComponent,
    ImportDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
