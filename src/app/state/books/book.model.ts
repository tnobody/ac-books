import {Category} from '../categories/categories.model';

export interface Book {
    title: string;
    order: number;
    slug: string;
    cat: string;
    year: number;
}

export interface BookResponse {
    cats: Category[];
    books: Book[];
}
