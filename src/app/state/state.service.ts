import {Injectable} from '@angular/core';
import {Action, select, Store} from '@ngrx/store';
import {SetCategoryFilter, SetReadingStatusFilter, SetTextFilter} from './filter/filter-state.actions';
import {SetCategories} from './categories/categories-actions.class';
import {SetBooks} from './books/book-actions.class';
import {ReadingStatus} from './filter/filte-state.model';
import {selectFilter, selectReadingState} from './filter/filter-selector.class';
import {selectAllCategories, selectCategories} from './categories/categories-selector.class';
import {BookService} from '../book.service';
import {combineLatest, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Category} from './categories/categories.model';
import {Book} from './books/book.model';
import {selectBookReadByBook, selectBooksByCategory, selectFilteredBooks, selectFilteredBooksByCategory} from './state-selector';
import {Languages} from './book-read/book-read.model';
import {SetLanguageRead, SetRead} from './book-read/book-read.actions';
import {selectBookRead} from './book-read/book-read-selector.class';
import { SetContentScroll } from './layout/layout-actions';
import { selectContentScroll } from './layout/layout-selector.class';
import { selectAllBooks } from './books/book-selector.class';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    readonly store: Store<any>,
    readonly bookService: BookService
  ) {
    combineLatest(
      this.bookService.getBooks().pipe(map(books => new SetBooks(books))),
      this.bookService.getCategories().pipe(map(cats => new SetCategories(cats))),
    ).subscribe((actions: Action[]) => actions.forEach(action => this.store.dispatch(action)));
  }

  /** Layout */
  setContentScroll(scroll: number): any {
    this.store.dispatch(new SetContentScroll(scroll));
  }

  get contentScroll$() {
    return this.store.pipe(select(selectContentScroll));
  }


  /** Filter */

  setTextFilter(filter: string) {
    this.store.dispatch(new SetTextFilter(filter));
  }

  setReadingStatus(rs: ReadingStatus) {
    this.store.dispatch(new SetReadingStatusFilter(rs));
  }

  setCategoryFilter(cf: Category | null) {
    this.store.dispatch(new SetCategoryFilter(cf));
  }

  setBookLanguageRead(book: Book, language: Languages, read: boolean) {
    this.store.dispatch(new SetLanguageRead(book, language, read));
  }

  setBookRead(book: Book, read: boolean) {
    this.store.dispatch(new SetRead(book, read));
  }

  /** Cats */

  setCategories(cats: Category[]) {
    this.store.dispatch(new SetCategories(cats));
  }

  /** Books */

  setBooks(books: Book[]) {
    this.store.dispatch(new SetBooks(books));
  }

  get allBooks$() {
    return this.store.pipe(select(selectAllBooks));
  }

  get categories$() {
    return this.store.pipe(select(selectAllCategories));
  }

  get booksByCategories$() {
    return this.store.pipe(select(selectBooksByCategory));
  }

  get filteredBooksByCategory$() {
    return this.store.pipe(select(selectFilteredBooksByCategory));
  }

  get filter$() {
    return this.store.pipe(select(selectFilter));
  }

  get readingState$() {
    return this.store.pipe(select(selectReadingState));
  }

  get filteredBooks$() {
    return this.store.pipe(select(selectFilteredBooks));
  }

  get bookRead$() {
    return this.store.pipe(select(selectBookRead));
  }

  getBookRead$(book: string) {
    return this.store.pipe(select(selectBookReadByBook(book)));
  }

}
