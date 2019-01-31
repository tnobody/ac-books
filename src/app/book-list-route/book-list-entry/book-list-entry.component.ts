import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import {BookWithRead} from '../../state/state-map.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-book-list-entry',
  template: `
    <ng-container *ngFor="let book of books">
      <mat-list-item [routerLink]="['book', book[0].slug]">
        <mat-icon mat-list-icon *ngIf="book[1].read">done</mat-icon>
        <h3 matLine>
          <span>{{book[0].title}} </span>
          <span class="deemphasized">{{book[0].year}}</span>
        </h3>
        <p matLine>
          <span *ngIf="book[1].dk" class="flag-icon flag-icon-dk"></span>
          <span *ngIf="book[1].gb" class="flag-icon flag-icon-gb"></span>
          <span *ngIf="book[1].de" class="flag-icon flag-icon-de"></span>
        </p>
      </mat-list-item>
    </ng-container>
  `,
  styles: [`
    .deemphasized {
      color: silver;
    }
  `]
})
export class BookListEntryComponent {

  @Input() books: BookWithRead[];

}
