import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { layoutReducer as layout } from './layout-reducer.function';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature('layout', layout)
     ],
    exports: [],
    providers: [],
})
export class LayoutStateModule {}
