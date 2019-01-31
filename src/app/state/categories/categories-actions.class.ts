import {Action} from '@ngrx/store';
import {Category} from './categories.model';

export const SET_CATEGORIES = '[categories] set';

export class SetCategories implements Action {
  readonly type = SET_CATEGORIES;

  constructor(readonly categories: Category[]) {
  }
}

export type BookAction = SetCategories;
