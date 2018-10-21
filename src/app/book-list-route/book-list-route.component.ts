import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BookService } from '../book.service';
import { Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { map, debounce, debounceTime, tap, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  template: `
    <acb-search
      (search)="filter$.next($event)"
    ></acb-search>
    <acb-book-list
      [books]="books$ | async"
    ></acb-book-list>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      max-height: 100vh;
    }

    acb-book-list {
      flex: 1;
      overflow: auto;
    }
  `]
})
export class BookListRouteComponent {

  readonly filter$ = new BehaviorSubject<string>('');
  readonly books$ = combineLatest(
    this.bookService.getBooks(),
    this.filter$.pipe(
      filter(f => typeof f === 'string'),
      map(f => f.trim()),
      debounceTime(1)
    )
  ).pipe(
    map(([books, filterValue]) => filterValue.length === 0 ? books : books
    .filter(book => book.title.toLowerCase().includes(filterValue.toLowerCase())),
    tap(v => console.log(v))
  ));

  constructor(
    private bookService: BookService
  ) {}


}
