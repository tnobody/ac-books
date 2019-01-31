import {Category} from './categories/categories.model';
import {Book} from './books/book.model';
import {BookRead} from './book-read/book-read.model';

export interface StateMap<T> {
    [key: string]: T;
}

export function toStateMap<T>(data: T [], idPicker: (e: T) => string): StateMap<T> {
    return data.reduce((smap, entity) => ({[idPicker(entity)]: entity, ...smap}), {});
}

export function toArray<T>(sm: StateMap<T>): T[] {
  return Object.values(sm);
}

export type BookWithRead = [Book, BookRead];
export type BooksByCategory = [Category, BookWithRead[]];
