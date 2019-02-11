import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout.model';

export const selectLayout = createFeatureSelector<LayoutState>('layout');
export const selectContentScroll = createSelector(
    selectLayout,
    s => s ? s.contentScroll : 0
);
