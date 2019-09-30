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

export const encodeBooksRead = (br: BookRead): number => {
    const b2n = (b: boolean) => b ? 1 : 0;
    return parseInt([
        b2n(br.de),
        b2n(br.dk),
        b2n(br.gb),
        b2n(br.read),
    ].join(''), 2);
};

export const decodeBooksRead = (dec: number): BookRead => {
    const bin = parseInt(`${dec}`, 10).toString(2).padStart(4, '0');
    const [
        de, dk, gb, read
    ] = Array.from(bin).map(digit => digit === '1');
    return ({ de, dk , gb, read});
};

export interface BookReadState {
    [bookSlug: string]: BookRead;
}

export const BOOK_READ_STORAGE_KEY = 'book-read-storage-key';
export const bookReadInit: BookReadState = JSON.parse(localStorage.getItem(BOOK_READ_STORAGE_KEY)) || {};
