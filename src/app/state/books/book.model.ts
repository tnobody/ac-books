import {Category} from '../categories/categories.model';

export interface Book {
    title: string;
    order: number;
    slug: string;
    cat: string;
}

export interface BookResponse {
    cats: Category[];
    books: Book[];
}
