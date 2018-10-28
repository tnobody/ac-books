import {Languages} from './book-read.model';
import {Action} from '@ngrx/store';
import {Book} from '../books/book.model';

export const SET_LANGUAGE_READ = '[READ] SET_LANGUAGE';
export class SetLanguageRead implements Action {
  readonly type = SET_LANGUAGE_READ;
  constructor(
    readonly book: Book,
    readonly language: Languages,
    readonly read: boolean) {}
}

export const SET_READ = '[READ] SET';
export class SetRead implements Action {
  readonly type = SET_READ;
  constructor(
    readonly book: Book,
    readonly read: boolean) {}
}

export type BookReadActions = SetLanguageRead | SetRead;
