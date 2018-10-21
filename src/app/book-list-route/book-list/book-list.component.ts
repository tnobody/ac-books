import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../model/book.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-book-list',
  template: `
    <mat-list *ngFor="let book of books">
      <acb-book-list-entry [book]="book"></acb-book-list-entry>
    </mat-list>
  `,
  styles: []
})
export class BookListComponent implements OnInit {

  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
