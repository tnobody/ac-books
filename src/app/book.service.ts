import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './model/book.model';
import {shareReplay, map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks() {
    return this.http.get<Book[]>('assets/data.json')
      .pipe(shareReplay());
  }

  getBookBySlug(slug: string) {
    return this.getBooks().pipe(
      map(books => books.find(book => this.slugifyName(book.title) === slug))
    );
  }

  slugifyName(name: string) {
    return name.split(' ').map(w => w.toLowerCase()).join('_');
  }

}
