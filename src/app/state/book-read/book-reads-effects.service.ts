import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {SET_LANGUAGE_READ, SET_READ} from './book-read.actions';
import {switchMap, tap} from 'rxjs/operators';
import {StateService} from '../state.service';
import {BOOK_READ_STORAGE_KEY, BookRead, BookReadState} from './book-read.model';

@Injectable({
  providedIn: 'root'
})
export class BookReadsEffectsService {

  constructor(
    readonly actions$: Actions,
    readonly state: StateService,
  ) {}

  @Effect({dispatch: false}) changeBookREad$ = this.actions$.pipe(
    ofType(SET_READ, SET_LANGUAGE_READ),
    switchMap(_ => this.state.bookRead$),
    tap((br: BookReadState) => {
      localStorage.setItem(BOOK_READ_STORAGE_KEY, JSON.stringify(br));
    })
  );
}
