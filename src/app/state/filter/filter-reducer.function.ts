import { FilterState, filterStateInit } from './filte-state.model';
import { FilterAction, SET_TEXT_FILTER, SET_CATEGORY_FILTER, SET_READING_STATUS_FILTER } from './filter-state.actions';

export function filterReducer(state: FilterState = filterStateInit, action: FilterAction): FilterState {
    switch (action.type) {
        case SET_TEXT_FILTER: {
            return ({
                ...state,
                text: action.text
            });
        }
        case SET_CATEGORY_FILTER: {
            return ({
                ...state,
                category: ((action.category) || {slug: undefined}).slug
            });
        }
        case SET_READING_STATUS_FILTER: {
            return ({
                ...state,
                readingStatus: action.readingStatus
            });
        }
    }
    return state || filterStateInit;
}
