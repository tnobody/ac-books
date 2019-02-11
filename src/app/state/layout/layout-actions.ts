import { Action } from '@ngrx/store';

export const SET_CONTENT_SCROLL = '[layout] set innner scroll';
export class SetContentScroll implements Action {
    readonly type = SET_CONTENT_SCROLL;
    constructor(
        readonly scroll: number
    ) {}
}

export type LayoutAction = SetContentScroll;
