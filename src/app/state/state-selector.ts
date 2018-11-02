import {createSelector} from '@ngrx/store';
import {selectAllBooks} from './books/book-selector.class';
import {selectAllCategories} from './categories/categories-selector.class';
import {Category} from './categories/categories.model';
import {Book} from './books/book.model';
import {FilterState, ReadingStatus} from './filter/filte-state.model';
import {selectFilter} from './filter/filter-selector.class';
import {BookRead, createBookRead} from './book-read/book-read.model';
import {selectBookRead} from './book-read/book-read-selector.class';
import {BookWithRead} from './state-map.model';


export const selectBooksWithRead = createSelector(
  selectAllBooks,
  selectBookRead,
  (books: Book[], bookReads) => books.map(book => [
    book,
    bookReads[book.slug] || createBookRead()
  ] as BookWithRead)
);

type BookFilterPredicate = (b: BookRead) => boolean;

const FilterIndexMap: {[name: string]: ReadingStatus} = {
  ALL: 0,
  OWN: 1,
  READ: 2,
  MISSING: 3
};
const filters: { [key: string]: BookFilterPredicate } = {
  [FilterIndexMap.ALL]: (_) => true,
  [FilterIndexMap.OWN]: (book: BookRead) => book.de || book.dk || book.gb,
  [FilterIndexMap.READ]: (book: BookRead) => book.read,
  [FilterIndexMap.MISSING]: (book: BookRead) => !(book.de || book.dk || book.gb || book.read)
};

export const selectFilteredBooks = createSelector(
  selectFilter,
  selectBooksWithRead,
  ({category, text, readingStatus}: FilterState, books: BookWithRead[]) => {
    const filterPredicate = filters[readingStatus];
    console.log(category);
    return <BookWithRead[]> books
      .filter(([_, read]) => filterPredicate(read))
      .filter(([book]) => text.length === 0 || book.title.toLowerCase().includes(text.toLowerCase()))
      .filter(([book]) => !category || (category === book.cat));
  }
);

const booksByCategoryProjector = (categories: Category[], bookWithReads: BookWithRead[]) => categories
  .map(category => [
    category,
    bookWithReads.filter(([book]) => book.cat === category.slug)
  ] as [Category, BookWithRead[]])
  .filter(([c, b]) => b.length);


export const selectBooksByCategory = createSelector(
  selectAllCategories,
  selectBooksWithRead,
  booksByCategoryProjector
);

export const selectFilteredBooksByCategory = createSelector(
  selectAllCategories,
  selectFilteredBooks,
  booksByCategoryProjector
);

export const selectBookReadByBook = (book: string) => createSelector(
  selectBooksWithRead,
  (bwr: BookWithRead[]) => bwr.find(([b]) => b.slug === book)
);
