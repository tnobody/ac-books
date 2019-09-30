import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { StateService } from '../state/state.service';
import { decodeBooksRead, BookRead } from '../state/book-read/book-read.model';
import { BookWithRead } from '../state/state-map.model';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'acb-import-route',
    template: `
        <ng-container *ngIf="toImport$ | async as toImport">
        <mat-toolbar
            color="primary"
            class="mat-elevation-z2 mat-body"
            style="padding-right: 32px"
        >
            <button mat-icon-button [routerLink]="['/']">
                <mat-icon>keyboard_arrow_left</mat-icon>
            </button>
            <span>Import </span>
            <span>({{toImport.length}})</span>
            <span class="example-fill-remaining-space"></span>
            <button mat-icon-button (click)="doImport(toImport)">
                <mat-icon>check</mat-icon>
            </button>
        </mat-toolbar>
        <div class="book-list">
            <mat-list>
                <acb-book-list-entry [books]="toImport"></acb-book-list-entry>
            </mat-list>
        </div>
        </ng-container>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
        }

        .example-fill-remaining-space {
            flex: 1 1 auto;
        }

        .book-list {
            flex: 1;
            overflow: auto;
        }
    `]
})
export class ImportRouteComponent implements OnInit {

    data$: Observable<string>;
    toImport$: Observable<BookWithRead[]>;
    importCount$: Observable<number>;

    constructor(
        readonly route: ActivatedRoute,
        readonly state: StateService,
        readonly snackBar: MatSnackBar,
        readonly router: Router
    ) {
    }

    ngOnInit(): void {
        this.data$ = this.route.queryParams.pipe(
            map(p => p['data']),
            take(1)
        );

        this.toImport$ = combineLatest(
            this.state.allBooks$,
            this.data$.pipe(
                map(d => d
                    .split('x')
                    .map(Number)
                    .map(decodeBooksRead)
                ),
            )
        ).pipe(map(([books, bookReads]) => {
            const result = [];
            const len = Math.min(books.length, bookReads.length);
            for (let i = 0; i < len; i++) {
                const { de, dk, gb, read } = bookReads[i];
                if (de || dk || gb || read) {
                    result.push([books[i], bookReads[i]]);
                }
            }
            return result;
        }));

        this.importCount$ = this.toImport$.pipe(map(i => i.length));
    }

    doImport(booksWithRead: BookWithRead[]) {
        booksWithRead.forEach(([book, read]) => {
            this.state.setBookLanguageRead(book, 'de', read.de);
            this.state.setBookLanguageRead(book, 'dk', read.dk);
            this.state.setBookLanguageRead(book, 'gb', read.gb);
            this.state.setBookRead(book, read.read);
        });
        this.snackBar.open(`Imported ${booksWithRead.length} entries`);
        this.router.navigate(['/'])
    }
}
