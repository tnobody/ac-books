import { Routes } from '@angular/router';
import { BookListRouteComponent } from './book-list-route/book-list-route.component';
import { BookRouteComponent } from './book-route/book-route.component';
import { PersitsScrollOnLeaveGuardGuard } from './persits-scroll-on-leave-guard.guard';
import { ImportRouteComponent } from './data-sync/import-route.component';

export const routes: Routes = [
    {
        path: '',
        component: BookListRouteComponent,
        data: { animation: 'HomePage' },
        canDeactivate: [PersitsScrollOnLeaveGuardGuard],
        /*
        resolve: {
            'contentScroll': RestoreScrollPositionResolver
        }
        */
    },
    {
        path: 'book/:slug',
        component: BookRouteComponent,
        data: { animation: 'BookPage' }
    },
    {
        path: 'import',
        component: ImportRouteComponent
    }
];
