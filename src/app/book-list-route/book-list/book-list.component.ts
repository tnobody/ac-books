import { ChangeDetectionStrategy, Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { BooksByCategory, BookWithRead } from '../../state/state-map.model';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-book-list',
  template: `
    <mat-list >
      <ng-container *ngFor="let bbc of booksByCategory">
        <mat-divider></mat-divider>
        <h3 mat-subheader>
          <mat-icon style="margin-right: 5px;">collections_bookmark</mat-icon>
          <span>{{bbc[0].title}}</span>
        </h3>
        <mat-divider></mat-divider>
        <acb-book-list-entry [books]="bbc[1]" (entryClick)="entryClick.next($event)"></acb-book-list-entry>
      </ng-container>
    </mat-list>
  `,
  styles: []
})
export class BookListComponent {

  @Input() booksByCategory: BooksByCategory[];
  @Output() entryClick = new EventEmitter<BookWithRead>();

  get contentScroll(): number {
    return this.elRef.nativeElement.scrollTop;
  }

  set contentScroll(scroll: number) {
    delay(250)(of(scroll)).subscribe(s => {
      this.elRef.nativeElement.scrollTop = s;
    });
  }

  constructor(
    readonly elRef: ElementRef
  ) { }

}
