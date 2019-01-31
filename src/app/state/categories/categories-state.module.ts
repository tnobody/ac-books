import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { categoriesReducer as categories } from './categories-reducer.function';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature('categories', categories)
     ],
    exports: [],
    providers: [],
})
export class CategoryStateModule {}
