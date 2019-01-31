import { Action } from '@ngrx/store';
import { ReadingStatus } from './filte-state.model';
import {Category} from '../categories/categories.model';

export const SET_TEXT_FILTER = '[filter] SET_TEXT';
export class SetTextFilter implements Action {
    readonly type = SET_TEXT_FILTER;
    constructor(public text: string) { }
}

export const SET_READING_STATUS_FILTER = '[filter] SET_READING_STATUS';
export class SetReadingStatusFilter implements Action {
    readonly type = SET_READING_STATUS_FILTER;
    constructor(public readingStatus: ReadingStatus) { }
}

export const SET_CATEGORY_FILTER = '[filter] SET_CATEGORY';
export class SetCategoryFilter implements Action {
    readonly type = SET_CATEGORY_FILTER;
    constructor(public category: Category | null) { }
}


export type FilterAction = SetTextFilter | SetReadingStatusFilter | SetCategoryFilter;
