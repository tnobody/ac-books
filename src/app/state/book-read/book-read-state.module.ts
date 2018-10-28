import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {bookReadReducer as bookRead} from './book-read-reducer.function';
import {EffectsModule} from '@ngrx/effects';
import {BookReadsEffectsService} from './book-reads-effects.service';

@NgModule({
  imports: [
    StoreModule.forFeature('book-read', bookRead),
    EffectsModule.forFeature([BookReadsEffectsService])
  ],
})
export class BookReadStateModule {
}
