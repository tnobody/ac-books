import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {BookResponse} from './state/books/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private _data$: Observable<BookResponse>;
  get data$() {
    if (!this._data$) {
      this._data$ = this.http.get<BookResponse>('assets/data.json')
        .pipe(shareReplay());
    }
    return this._data$;
  }

  getBooks() {
    return this.data$.pipe(map(r => r.books));
  }

  getCategories() {
    return this.data$.pipe(map(r => r.cats));
  }

}
