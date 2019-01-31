import { BookAction, SET_BOOKS } from './book-actions.class';
import {Book} from './book.model';
import {toStateMap} from '../state-map.model';

export function bookReducer(state: Book[], action: BookAction) {
    switch (action.type) {
        case SET_BOOKS: {
            return toStateMap(action.books, book => book.slug);
        }
    }
    return state || [];
}
