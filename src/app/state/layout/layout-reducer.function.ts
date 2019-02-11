import { LayoutAction, SET_CONTENT_SCROLL } from './layout-actions';
import { LayoutState, LayoutStateInit } from './layout.model';

export function layoutReducer(state: LayoutState = LayoutStateInit, action: LayoutAction): LayoutState {
    switch (action.type) {
        case SET_CONTENT_SCROLL: {
            return {... state, contentScroll: action.scroll}
        }
    }
    return state || LayoutStateInit;
}
