import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, switchMap, tap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/internal/Observable';
import {Book} from '../state/books/book.model';
import {StateService} from '../state/state.service';
import {BookRead, Languages} from '../state/book-read/book-read.model';

@Component({
  selector: 'acb-book-route',
  template: `
    <ng-container *ngIf="book$ | async as book">
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <button mat-icon-button (click)="gotBack()">
            <mat-icon>keyboard_arrow_left</mat-icon>
          </button>
          <span>{{book.title}}</span>
        </mat-toolbar-row>
      </mat-toolbar>
      <article *ngIf="read$ | async as read">
        <acb-book-read-list
          (changeLanguage)="languageChanged($event, book)"
          (changeRead)="readChanged($event, book)"
          [bookRead]="read"
        ></acb-book-read-list>
      </article>
    </ng-container>
  `,
  styles: [``]
})
export class BookRouteComponent implements OnInit {
  slug$: Observable<string>;
  book$: Observable<Book>;
  read$: Observable<BookRead>;

  constructor(
    readonly route: ActivatedRoute,
    readonly state: StateService,
    readonly router: Router
  ) {
  }

  async gotBack() {
    return this.router.navigate(['']);
  }

  languageChanged([language, read]: [Languages, boolean], book: Book) {
    this.state.setBookLanguageRead(book, language, read);
  }

  readChanged(read: boolean, book: Book) {
    this.state.setBookRead(book, read);
  }

  ngOnInit(): void {
    this.slug$ = this.route.paramMap.pipe(
      map(m => m.get('slug')),
    );

    const bookWithRead = this.slug$.pipe(
      switchMap(slug => this.state.getBookRead$(slug)),
      tap(t => console.log('Test', t)),
      filter(read => read != null)
    );

    this.book$ = bookWithRead.pipe(map(([book]) => book));
    this.read$ = bookWithRead.pipe(map(([_, read]) => read));
  }
}
