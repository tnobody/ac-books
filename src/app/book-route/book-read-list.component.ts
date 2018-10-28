import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSelectionListChange} from '@angular/material';
import {BookRead, Languages} from '../state/book-read/book-read.model';

@Component({
  selector: 'acb-book-read-list',
  template: `
    <mat-selection-list #doneList (selectionChange)="selectionChanged($event)">
      <mat-list-option value="gb" [selected]="bookRead.gb">
        <span class="flag-icon flag-icon-gb"></span>
      </mat-list-option>
      <mat-list-option value="dk" [selected]="bookRead.dk">
        <span class="flag-icon flag-icon-dk"></span>
      </mat-list-option>
      <mat-list-option value="de" [selected]="bookRead.de">
        <span class="flag-icon flag-icon-de"></span>
      </mat-list-option>
      <mat-divider></mat-divider>
      <mat-list-option value="read" [selected]="bookRead.read">
        <mat-icon>remove_red_eye</mat-icon>
      </mat-list-option>
    </mat-selection-list>
  `,
  styles: [`
    mat-list-option {
      display: flex;
      flex-direction: row;
    }
    mat-list-option span {
      display: block;
    }
  `]
})
export class BookReadListComponent {
  @Input() bookRead: BookRead;
  @Output() changeLanguage = new EventEmitter<[Languages, boolean]>();
  @Output() changeRead = new EventEmitter<boolean>();


  selectionChanged($event: MatSelectionListChange) {
    const {option} = $event;
    if (option.value === 'read') {
      this.changeRead.next(option.selected);
    } else {
      this.changeLanguage.next([
        option.value,
        option.selected
      ]);
    }
  }

}
