import {NgModule} from '@angular/core';
import {BookStateModule} from './books/book-state.module';
import {FilterStateModule} from './filter/filter-state.module';
import {CategoryStateModule} from './categories/categories-state.module';
import {StoreModule} from '@ngrx/store';
import {filterStateInit} from './filter/filte-state.model';
import {environment} from 'src/environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BookReadStateModule} from './book-read/book-read-state.module';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    BookStateModule,
    FilterStateModule,
    CategoryStateModule,
    BookReadStateModule,
    StoreModule.forRoot({} as any, {
      initialState: {
        filter: filterStateInit,
        books: {},
        category: {}
      }
    }),
    EffectsModule.forRoot([]),
    ...(environment.production
      ? []
      : [StoreDevtoolsModule.instrument({})])
  ],
  exports: [],
  providers: [],
})
export class StateModule {
}
