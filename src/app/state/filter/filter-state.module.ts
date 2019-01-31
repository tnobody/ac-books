import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { filterReducer as filter } from './filter-reducer.function';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature('filter', filter)
     ],
    exports: [],
    providers: [],
})
export class FilterStateModule {}