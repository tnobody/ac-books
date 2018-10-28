import {createFeatureSelector} from '@ngrx/store';
import {BookReadState} from './book-read.model';

export const selectBookRead = createFeatureSelector<BookReadState>('book-read');
