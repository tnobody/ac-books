import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StateMap, toArray} from '../state-map.model';
import {Category} from './categories.model';

export const selectCategories = createFeatureSelector<StateMap<Category>>('categories');
export const selectAllCategories = createSelector(selectCategories, toArray);
