import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/internal/Observable';
import { BookService } from '../book.service';
import { Book } from '../model/book.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSelectionListChange } from '@angular/material/list';
import { BookReadAdapterService } from '../book-read-adapter.service';

@Component({
    selector: 'acb-book-route',
    template: `
    <ng-container *ngIf="book$ | async as book">
        <mat-toolbar color="primary">
        <mat-toolbar-row>
            <a mat-icon-button [routerLink]="['']">
                <mat-icon>keyboard_arrow_left</mat-icon>
            </a>
            <span>{{book.title}}</span>
        </mat-toolbar-row>
        </mat-toolbar>
        <article>
            <acb-book-read-list
                [book]="book"
            ></acb-book-read-list>
            <!--
                <iframe [src]="sanitizeUrl(book.link)"></iframe>
            -->
        </article>
    </ng-container>
    `,
    styles: [``]
})
export class BookRouteComponent implements OnInit {
    slug$: Observable<string>;
    book$: Observable<Book>;
    constructor(
        readonly route: ActivatedRoute,
        readonly bookService: BookService,
        readonly sanitizer: DomSanitizer,
        readonly bookReadService: BookReadAdapterService
    ) { }

    sanitizeUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    ngOnInit(): void {
        this.slug$ = this.route.paramMap.pipe(
            map(m => m.get('slug')),
        );
        this.book$ = this.slug$.pipe(
            switchMap(slug => this.bookService.getBookBySlug(slug))
        );
    }
}
