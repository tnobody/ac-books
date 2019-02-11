import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { StateService } from '../state/state.service';
import { isReadingStatus } from '../state/filter/filte-state.model';
import { BookListComponent } from './book-list/book-list.component';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'acb-book-list-route',
  template: `
    <acb-search
      (search)="state.setTextFilter($event)"
      (category)="state.setCategoryFilter($event)"
    ></acb-search>
    <acb-book-list
      #bookList
      [booksByCategory]="state.filteredBooksByCategory$ | async"
    ></acb-book-list>
    <div>
      <mat-tab-group
        color="primary"
        mat-stretch-tabs
        headerPosition="below"
        [selectedIndex]="state.readingState$ | async"
        (selectedTabChange)="filterChanged($event)"
      >
        <mat-tab label="Alle"></mat-tab>
        <mat-tab label="Besitz"></mat-tab>
        <mat-tab label="Gelesen"></mat-tab>
        <mat-tab label="Fehlt"></mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    acb-book-list {
      flex: 1;
      overflow: auto;
    }
  `]
})
export class BookListRouteComponent implements OnInit {

  @ViewChild(BookListComponent) bookList: BookListComponent;

  getContentScroll(): any {
    return this.bookList.contentScroll;
  }

  constructor(
    readonly state: StateService,
    readonly route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.state.contentScroll$.pipe(first()).subscribe(scroll => {
      this.bookList.contentScroll = scroll;
    });
  }

  filterChanged({ index }: MatTabChangeEvent) {
    if (isReadingStatus(index)) {
      this.state.setReadingStatus(index);
    }
  }

}
