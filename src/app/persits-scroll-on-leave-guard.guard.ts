import { Injectable } from '@angular/core';
import { CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BookListRouteComponent } from './book-list-route/book-list-route.component';
import { Store } from '@ngrx/store';
import { StateService } from './state/state.service';

@Injectable({
  providedIn: 'root'
})
export class PersitsScrollOnLeaveGuardGuard implements CanDeactivate<BookListRouteComponent> {

  constructor(
    private state: StateService
  ) {}

  canDeactivate(
    component: BookListRouteComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    this.state.setContentScroll(component.getContentScroll());
    return true;
  }

}
