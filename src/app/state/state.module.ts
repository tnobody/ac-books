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
import { LayoutStateInit } from './layout/layout.model';
import { LayoutStateModule } from './layout/layout-state.module';

@NgModule({
  declarations: [],
  imports: [
    BookStateModule,
    FilterStateModule,
    CategoryStateModule,
    BookReadStateModule,
    LayoutStateModule,
    StoreModule.forRoot({} as any, {
      initialState: {
        filter: filterStateInit,
        books: {},
        category: {},
        layout: LayoutStateInit
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
