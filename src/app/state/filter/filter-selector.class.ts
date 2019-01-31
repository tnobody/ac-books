import {createFeatureSelector, createSelector} from '@ngrx/store';
import { FilterState } from './filte-state.model';

export const selectFilter = createFeatureSelector<FilterState>('filter');

export const selectReadingState = createSelector(selectFilter, filter => filter.readingStatus);
export const selectFilterText = createSelector(selectFilter, filter => filter.text);
export const selectFilterCategory = createSelector(selectFilter, filter => filter.category);

