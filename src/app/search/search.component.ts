import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {map, first} from 'rxjs/internal/operators';
import {MatSelectChange} from '@angular/material';
import {StateService} from '../state/state.service';
import {Category} from '../state/categories/categories.model';
import { combineLatest } from 'rxjs';
import {ExportService} from '../export.service';
import zipcelx from 'zipcelx';

@Component({
  selector: 'acb-search',
  template: `
    <ng-template #hasValue>
      <mat-icon matSuffix (click)="search.next(''); searchInput.value = ''">close</mat-icon>
    </ng-template>
    <ng-template #hasNoValue>
      <mat-icon matSuffix>search</mat-icon>
    </ng-template>
    <mat-toolbar
      color="primary"
      class="mat-elevation-z2 mat-body"
      style="padding-right: 32px"
    >
      <form class="search-form mat-body">
        <mat-form-field class="mat-body">
          <input type="search"
                 class="mat-body"
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
    <mat-toolbar class="mat-elevation-z2">
      <mat-form-field>
        <mat-select class="mat-body" [(value)]="selectedCat" (selectionChange)="catChange($event)">
          <mat-option [value]="initCat">
            Alle
          </mat-option>
          <ng-container *ngFor="let cat of state.booksByCategories$ | async">
            <mat-option class="mat-body" *ngIf="cat[1].length" [value]="cat[0]">
              <span>{{cat[0].title}}</span>
              ({{cat[1].length}})
            </mat-option>
          </ng-container>
        </mat-select>
      </mat-form-field>
      <button mat-icon-button (click)="download()">
        <mat-icon>cloud_download</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: [`

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
  @Output() category = new EventEmitter<Category | null>();

  initCat: any = {};
  selectedCat: Category = this.initCat;
  hasValue$ = this.search.pipe(map(v => v.length !== 0));

  constructor(
    readonly state: StateService,
    readonly xlsexport: ExportService
  ) {
  }

  catChange($event: MatSelectChange) {
    const val = $event.value === this.initCat ? null : $event.value;
    this.category.next(val);
  }

  ngOnInit() {
  }

  download() {
    combineLatest(
      this.state.allBooks$,
      this.state.bookRead$
    ).pipe(
      first(),
      map(([allBooks, bookRead]) => this.xlsexport.createSheetData(allBooks, bookRead))
    ).subscribe(d => {
        this.xlsexport.export(d);
    });
  }

}
