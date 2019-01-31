import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { bookReducer as book } from './book-reducer.function';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature('books', book)
     ],
    exports: [],
    providers: [],
})
export class BookStateModule {}
