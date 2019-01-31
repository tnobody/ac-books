import { Routes } from '@angular/router';
import { BookListRouteComponent } from './book-list-route/book-list-route.component';
import { BookRouteComponent } from './book-route/book-route.component';

export const routes: Routes = [
    { path: '', component: BookListRouteComponent,  data: {animation: 'HomePage'}  },
    { path: 'book/:slug', component: BookRouteComponent,  data: {animation: 'BookPage'}  },
];
