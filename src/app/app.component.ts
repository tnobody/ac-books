import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BookService } from './book.service';
import { Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { map, debounce, debounceTime, tap, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
