import { Action } from '@ngrx/store';
import {Book} from './book.model';

export const SET_BOOKS = '[books] LOAD_BOOK_SUCCESS';
export class SetBooks  implements Action {
    readonly type = SET_BOOKS;
    constructor(readonly books: Book[]) { }
}

export type BookAction = SetBooks;
