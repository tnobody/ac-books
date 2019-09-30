import {Injectable} from '@angular/core';
import { Book } from './state/books/book.model';
import { BookRead, createBookRead, encodeBooksRead} from './state/book-read/book-read.model';
import {ZipCelXSheet, ZipCelXDataSet, ZipCelXRow, ZipCelXCell} from 'zipcelx';
import zipcelx from 'zipcelx';

@Injectable({
    providedIn: 'root'
})
export class ExportService {

    private readonly header: ZipCelXRow = [
        {type: 'string', value: 'Title'},
        {type: 'string', value: 'Kategorie'},
        {type: 'string', value: 'Jahr'},
        {type: 'string', value: 'DE'},
        {type: 'string', value: 'DK'},
        {type: 'string', value: 'GB'},
        {type: 'string', value: 'Gelesen'},
    ];

    createSheetData(
        books: Book[],
        reads: Record<string, BookRead>
    ): ZipCelXDataSet {
        const boolString = (b: boolean) => b ? 'x' : '';
        const rows: ZipCelXRow[] = this.mergeData(books, reads).map(book => <ZipCelXRow>[
            {type: 'string', value: book.title},
            {type: 'string', value: book.cat},
            {type: 'number', value: book.year},
            {type: 'string', value: boolString(book.de)},
            {type: 'string', value: boolString(book.dk)},
            {type: 'string', value: boolString(book.gb)},
            {type: 'string', value: boolString(book.read)},
        ]);

        return [
            this.header,
            ...rows
        ];
    }

    createQrData(
        books: Book[],
        reads: Record<string, BookRead>
    ): string {
        const data = this.mergeData(books, reads);
        return data
            .map(encodeBooksRead)
            .join('x');
    }

    private mergeData(
        books: Book[],
        reads: Record<string, BookRead>
    ): (Book & BookRead)[] {
        const emptyRead: BookRead = createBookRead();
        return books.map(book => {
            const read = reads[book.slug] || emptyRead;
            return ({
                ...book,
                ...read
            });
        });
    }


    export(data: ZipCelXDataSet) {
        zipcelx({
            filename: 'agatha-christie',
            sheet: {data}
        });
    }
}
