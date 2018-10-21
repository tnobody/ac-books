import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'acb-search',
  template: `
  <ng-template #hasValue>
    <mat-icon matSuffix (click)="search.next(''); searchInput.value = ''">close</mat-icon>
  </ng-template>
  <ng-template #hasNoValue>
    <mat-icon matSuffix>search</mat-icon>
  </ng-template>
    <mat-toolbar color="primary" class="mat-elevation-z2">
      <form class="search-form">
        <mat-form-field class="">
          <input type="search"
            matInput
            placeholder="Search"
            #searchInput
            (keyup)="search.next(searchInput.value)"
            autocomplete="off"
          />
          <ng-container *ngIf="hasValue$ | async; then hasValue; else hasNoValue"></ng-container>
        </mat-form-field>
      </form>
    </mat-toolbar>
    `,
  styles: [`
    mat-toolbar {
      display: flex;
      flex-direction: row;
    }

    .search-form {
      flex: 1;
      display: flex;
    }

    mat-form-field {
      flex: 1
    }
  `]
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  hasValue$ = this.search.pipe(map(v => v.length !== 0));

  constructor() { }

  ngOnInit() {
  }

}
