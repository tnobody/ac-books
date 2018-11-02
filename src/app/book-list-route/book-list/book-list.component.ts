import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BooksByCategory} from '../../state/state-map.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'acb-book-list',
  template: `
    <mat-list>
      <ng-container *ngFor="let bbc of booksByCategory">
        <mat-divider></mat-divider>
        <h3 mat-subheader>
          <mat-icon style="margin-right: 5px;">collections_bookmark</mat-icon>
          <span>{{bbc[0].title}}</span>
        </h3>
        <mat-divider></mat-divider>
        <acb-book-list-entry [books]="bbc[1]"></acb-book-list-entry>
      </ng-container>
    </mat-list>
  `,
  styles: []
})
export class BookListComponent {

  @Input() booksByCategory: BooksByCategory[];

}