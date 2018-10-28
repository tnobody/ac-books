export interface GotInLanguage {
    de: boolean;
    gb: boolean;
    dk: boolean;
}

export type Languages = keyof GotInLanguage;

export interface BookRead extends GotInLanguage {
    read: boolean;
}

export const createBookRead = (): BookRead => ({
    de: false,
    dk: false,
    gb: false,
    read: false
});

export interface BookReadState {
    [bookSlug: string]: BookRead;
}

export const BOOK_READ_STORAGE_KEY = 'book-read-storage-key';
export const bookReadInit: BookReadState = JSON.parse(localStorage.getItem(BOOK_READ_STORAGE_KEY)) || {};
