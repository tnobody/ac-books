import { Injectable } from '@angular/core';
import { Languages, BookReadState, createBookRead } from './state/book-read/book-read.model';

@Injectable({
    providedIn: 'root'
})
export class BookReadAdapterService {

    private static get storageKey() {
        return BookReadAdapterService.name;
    }

    storage = localStorage;
    constructor() {
    }

    private _data: BookReadState | null = null;

    get data(): BookReadState {
        return this._data || JSON.parse(this.storage.getItem(BookReadAdapterService.storageKey)) || {};
    }

    set data(data: BookReadState) {
        this.storage.setItem(BookReadAdapterService.storageKey, JSON.stringify(data));
        this._data = null;
    }

    setGotIn(bookSlug: string, language: Languages, got: boolean) {
        this.update(s => {
            const rb = this.getBookRead(bookSlug);
            s[bookSlug] = {...rb, [language]: got};
            return s;
        });
    }

    setRead(bookSlug: string, read: boolean) {
        this.update(s => {
            const rb = this.getBookRead(bookSlug);
            s[bookSlug] = {...rb, read};
            return s;
        });
    }

    getBookRead(slug: string) {
        return this.data[slug] || createBookRead();
    }

    private update(writeAction: (curr: BookReadState) => BookReadState) {
        this.data = writeAction({...this.data});
    }
}
