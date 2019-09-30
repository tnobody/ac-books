import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map, first, take } from 'rxjs/internal/operators';
import { MatSelectChange, MatDialog } from '@angular/material';
import { StateService } from '../state/state.service';
import { Category } from '../state/categories/categories.model';
import { combineLatest } from 'rxjs';
import { ExportService } from '../export.service';
import { ExportDialogComponent } from '../data-sync/export-dialog.component';
import { ImportDialogComponent } from '../data-sync/import-dialog.component';
import { Router } from '@angular/router';

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
      <button mat-icon-button [matMenuTriggerFor]="appMenu">
        <mat-icon>more_vert</mat-icon>
      </button>
    </mat-toolbar>
    <mat-menu #appMenu="matMenu">
        <button mat-menu-item (click)="download()">
          <mat-icon>cloud_download</mat-icon> Download Excel
        </button>
        <button mat-menu-item (click)="openExportDialog()">
          <mat-icon>import_export</mat-icon> Export
        </button>
        <button mat-menu-item (click)="openImportDialog()">
          <mat-icon>import_export</mat-icon> Import
        </button>
      </mat-menu>
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
    readonly exportService: ExportService,
    readonly dialog: MatDialog,
    readonly router: Router
  ) {
  }

  catChange($event: MatSelectChange) {
    const val = $event.value === this.initCat ? null : $event.value;
    this.category.next(val);
  }

  ngOnInit() {
  }

  get exportData$() {
    return combineLatest(
      this.state.allBooks$,
      this.state.bookRead$
    ).pipe(first());
  }

  download() {
    this.exportData$.pipe(
      map(([allBooks, bookRead]) => this.exportService.createSheetData(allBooks, bookRead))
    ).subscribe(d => {
      this.exportService.export(d);
    });
  }

  openExportDialog() {
    this.exportData$.pipe(
      map(([allBooks, bookRead]) => this.exportService.createQrData(allBooks, bookRead)),
      take(1),
    ).subscribe(qrValue => {
      this.dialog.open(ExportDialogComponent, {
        data: { qrValue }
      });
    });
  }

  openImportDialog() {
    this.dialog.open(ImportDialogComponent, {})
      .afterClosed()
      .subscribe(data => {
        if (data) {
          this.router.navigate(['/import'], { queryParams: { data } });
        }
      });
  }

}
