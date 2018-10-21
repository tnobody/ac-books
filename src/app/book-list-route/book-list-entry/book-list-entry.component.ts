import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Book } from '../../model/book.model';
import { BookService } from 'src/app/book.service';
import { BookReadAdapterService } from 'src/app/book-read-adapter.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-book-list-entry',
  template: `
    <mat-list-item [routerLink]="['book', slugify]">
      <img mat-list-icon [src]="book.imgSrc" />
      <h3 matLine>
        {{book.title}}
      </h3>
      <p matLine>
        <span *ngIf="bookRead.dk" class="flag-icon flag-icon-dk"></span>
        <span *ngIf="bookRead.gb" class="flag-icon flag-icon-gb"></span>
        <span *ngIf="bookRead.de" class="flag-icon flag-icon-de"></span>
        {{book.year}}
      </p>
    </mat-list-item>
  `,
  styles: []
})
export class BookListEntryComponent implements OnInit {

  @Input() book: Book;

  constructor(
    readonly booksService: BookService,
    readonly booksReadService: BookReadAdapterService
  ) { }

  get slugify() {
    return this.booksService.slugifyName(this.book.title);
  }

  get bookRead() {
    return this.booksReadService.getBookRead(this.slugify);
  }

  ngOnInit() {
  }

}
