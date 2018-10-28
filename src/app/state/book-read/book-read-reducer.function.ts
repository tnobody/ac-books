import {bookReadInit, BookReadState} from './book-read.model';
import {BookReadActions, SET_LANGUAGE_READ, SET_READ} from './book-read.actions';

export function bookReadReducer(state: BookReadState = bookReadInit, action: BookReadActions) {
  switch (action.type) {
    case SET_LANGUAGE_READ: {
      console.log(state[action.book.slug], action.language);
      return ({
        ...state,
        [action.book.slug]: {
          ...state[action.book.slug],
          [action.language]: action.read,
        },
      });
    }
    case SET_READ: {
      return ({
        ...state,
        [action.book.slug]: {
          ...state[action.book.slug],
          read: action.read,
        },
      });
    }
  }
  return state || bookReadInit;
}
