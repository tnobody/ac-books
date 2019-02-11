
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { StateService } from './state/state.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RestoreScrollPositionResolver implements Resolve<number> {

    constructor(
        readonly state: StateService
    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.state.contentScroll$;
    }
}
