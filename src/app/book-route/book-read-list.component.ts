import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../book.service';
import { BookReadAdapterService } from '../book-read-adapter.service';
import { MatSelectionListChange } from '@angular/material';

@Component({
    selector: 'acb-book-read-list',
    template: `
    <mat-selection-list #doneList (selectionChange)="selectionChanged($event, book)">
        <mat-list-option value="gb" [selected]="bookRead.gb">
            <span class="flag-icon flag-icon-gb"></span>
        </mat-list-option>
        <mat-list-option  value="dk" [selected]="bookRead.dk">
            <span class="flag-icon flag-icon-dk"></span>
        </mat-list-option>
        <mat-list-option  value="de" [selected]="bookRead.de">
            <span class="flag-icon flag-icon-de"></span>
        </mat-list-option>
        <mat-list-option  value="read" [selected]="bookRead.read">
            <mat-icon>remove_red_eye</mat-icon>
        </mat-list-option>
    </mat-selection-list>
    `,
    styles: [``]
})
export class BookReadListComponent implements OnInit {
    @Input() book: Book;

    constructor(
        readonly bookService: BookService,
        readonly bookReadService: BookReadAdapterService
    ) { }

    ngOnInit(): void { }

    get bookRead() {
        return this.bookReadService.getBookRead(this.bookService.slugifyName(this.book.title));
    }

    selectionChanged($event: MatSelectionListChange, book: Book) {
        const {option} = $event;
        const slug = this.bookService.slugifyName(book.title);
        if (option.value === 'read') {
            this.bookReadService.setRead(
                slug,
                option.selected
            );
        } else {
            this.bookReadService.setGotIn(
                slug,
                option.value,
                option.selected
            );
        }
    }

}
