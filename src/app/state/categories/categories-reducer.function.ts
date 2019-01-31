import { BookAction, SET_CATEGORIES } from './categories-actions.class';
import { StateMap, toStateMap } from '../state-map.model';
import {Category} from './categories.model';

export function categoriesReducer(state: StateMap<Category>, action: BookAction): StateMap<Category> {
    switch (action.type) {
        case SET_CATEGORIES: {
            return toStateMap(action.categories, book => book.slug);
        }
    }
    return state || {};
}
