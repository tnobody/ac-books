import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StateMap, toArray} from '../state-map.model';
import {Book} from './book.model';

export const selectBooks = createFeatureSelector<StateMap<Book>>('books');
export const selectAllBooks = createSelector(selectBooks, sm => toArray(sm));
