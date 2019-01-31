(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.animations.ts":
/*!***********************************!*\
  !*** ./src/app/app.animations.ts ***!
  \***********************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('HomePage => BookPage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '200%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '00%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('BookPage => HomePage', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ])
]);


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.animations */ "./src/app/app.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(swUpdate, snackBar, overlay) {
        this.swUpdate = swUpdate;
        this.snackBar = snackBar;
        this.overlay = overlay;
        this.cssClass = 'mat-typography';
    }
    AppComponent.prototype.beforeInstallPrompt = function ($event) {
        $event.prompt();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.overlay.getContainerElement().classList.add('mat-typography');
        this.swUpdate.available.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.askForUpdate(); })).subscribe(function (e) {
            window.location.reload();
        });
    };
    AppComponent.prototype.askForUpdate = function () {
        this.snackBarRef = this.snackBar.openFromTemplate(this.updateSnackBar, {});
        return this.snackBarRef.onAction();
    };
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "cssClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateSnackBar', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], AppComponent.prototype, "updateSnackBar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window.beforeinstallprompt', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "beforeInstallPrompt", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'acb-root',
            animations: [
                _app_animations__WEBPACK_IMPORTED_MODULE_5__["slideInAnimation"]
            ],
            template: "\n    <ng-template #updateSnackBar>\n      <div style=\"display: flex; flex: 1; flex-direction: row; align-content: space-between; align-self: center\">\n        <div style=\"align-self: center\">An update is available</div>\n        <div style=\"flex: 1\"></div>\n        <div>\n          <button mat-button (click)=\"snackBarRef.dismiss()\">Cancel</button>\n          <button mat-button (click)=\"snackBarRef.dismissWithAction()\">Install</button>\n        </div>\n      </div>\n    </ng-template>\n    <div [@routeAnimations]=\"prepareRoute(outlet)\">\n      <router-outlet #outlet=\"outlet\"></router-outlet>\n    </div>\n  ",
            styles: ["\n    :host {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _book_list_route_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-list-route/book-list/book-list.component */ "./src/app/book-list-route/book-list/book-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_list_route_book_list_entry_book_list_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-list-route/book-list-entry/book-list-entry.component */ "./src/app/book-list-route/book-list-entry/book-list-entry.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _book_list_route_book_list_route_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-list-route/book-list-route.component */ "./src/app/book-list-route/book-list-route.component.ts");
/* harmony import */ var _book_route_book_route_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-route/book-route.component */ "./src/app/book-route/book-route.component.ts");
/* harmony import */ var _routes_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes.const */ "./src/app/routes.const.ts");
/* harmony import */ var _book_route_book_read_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-route/book-read-list.component */ "./src/app/book-route/book-read-list.component.ts");
/* harmony import */ var _state_state_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state/state.module */ "./src/app/state/state.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_list_route_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"],
                _book_list_route_book_list_entry_book_list_entry_component__WEBPACK_IMPORTED_MODULE_8__["BookListEntryComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _book_list_route_book_list_route_component__WEBPACK_IMPORTED_MODULE_11__["BookListRouteComponent"],
                _book_route_book_route_component__WEBPACK_IMPORTED_MODULE_12__["BookRouteComponent"],
                _book_route_book_read_list_component__WEBPACK_IMPORTED_MODULE_14__["BookReadListComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes_const__WEBPACK_IMPORTED_MODULE_13__["routes"]),
                _state_state_module__WEBPACK_IMPORTED_MODULE_15__["StateModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-list-route/book-list-entry/book-list-entry.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/book-list-route/book-list-entry/book-list-entry.component.ts ***!
  \******************************************************************************/
/*! exports provided: BookListEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListEntryComponent", function() { return BookListEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListEntryComponent = /** @class */ (function () {
    function BookListEntryComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookListEntryComponent.prototype, "books", void 0);
    BookListEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'acb-book-list-entry',
            template: "\n    <ng-container *ngFor=\"let book of books\">\n      <mat-list-item [routerLink]=\"['book', book[0].slug]\">\n        <mat-icon mat-list-icon *ngIf=\"book[1].read\">done</mat-icon>\n        <h3 matLine>\n          <span>{{book[0].title}} </span>\n          <span class=\"deemphasized\">{{book[0].year}}</span>\n        </h3>\n        <p matLine>\n          <span *ngIf=\"book[1].dk\" class=\"flag-icon flag-icon-dk\"></span>\n          <span *ngIf=\"book[1].gb\" class=\"flag-icon flag-icon-gb\"></span>\n          <span *ngIf=\"book[1].de\" class=\"flag-icon flag-icon-de\"></span>\n        </p>\n      </mat-list-item>\n    </ng-container>\n  ",
            styles: ["\n    .deemphasized {\n      color: silver;\n    }\n  "]
        })
    ], BookListEntryComponent);
    return BookListEntryComponent;
}());



/***/ }),

/***/ "./src/app/book-list-route/book-list-route.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/book-list-route/book-list-route.component.ts ***!
  \**************************************************************/
/*! exports provided: BookListRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListRouteComponent", function() { return BookListRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/state.service */ "./src/app/state/state.service.ts");
/* harmony import */ var _state_filter_filte_state_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/filter/filte-state.model */ "./src/app/state/filter/filte-state.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookListRouteComponent = /** @class */ (function () {
    function BookListRouteComponent(state) {
        this.state = state;
    }
    BookListRouteComponent.prototype.ngOnInit = function () {
    };
    BookListRouteComponent.prototype.filterChanged = function (_a) {
        var index = _a.index;
        if (Object(_state_filter_filte_state_model__WEBPACK_IMPORTED_MODULE_2__["isReadingStatus"])(index)) {
            this.state.setReadingStatus(index);
        }
    };
    BookListRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'acb-book-list-route',
            template: "\n    <acb-search\n      (search)=\"state.setTextFilter($event)\"\n      (category)=\"state.setCategoryFilter($event)\"\n    ></acb-search>\n    <acb-book-list\n      [booksByCategory]=\"state.filteredBooksByCategory$ | async\"\n    ></acb-book-list>\n    <div>\n      <mat-tab-group\n        color=\"primary\"\n        mat-stretch-tabs\n        headerPosition=\"below\"\n        [selectedIndex]=\"state.readingState$ | async\"\n        (selectedTabChange)=\"filterChanged($event)\"\n      >\n        <mat-tab label=\"Alle\"></mat-tab>\n        <mat-tab label=\"Besitz\"></mat-tab>\n        <mat-tab label=\"Gelesen\"></mat-tab>\n        <mat-tab label=\"Fehlt\"></mat-tab>\n      </mat-tab-group>\n    </div>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n      height: 100vh;\n    }\n\n    acb-book-list {\n      flex: 1;\n      overflow: auto;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_state_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], BookListRouteComponent);
    return BookListRouteComponent;
}());



/***/ }),

/***/ "./src/app/book-list-route/book-list/book-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/book-list-route/book-list/book-list.component.ts ***!
  \******************************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookListComponent = /** @class */ (function () {
    function BookListComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookListComponent.prototype, "booksByCategory", void 0);
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            selector: 'acb-book-list',
            template: "\n    <mat-list>\n      <ng-container *ngFor=\"let bbc of booksByCategory\">\n        <mat-divider></mat-divider>\n        <h3 mat-subheader>\n          <mat-icon style=\"margin-right: 5px;\">collections_bookmark</mat-icon>\n          <span>{{bbc[0].title}}</span>\n        </h3>\n        <mat-divider></mat-divider>\n        <acb-book-list-entry [books]=\"bbc[1]\"></acb-book-list-entry>\n      </ng-container>\n    </mat-list>\n  ",
            styles: []
        })
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-route/book-read-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/book-route/book-read-list.component.ts ***!
  \********************************************************/
/*! exports provided: BookReadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookReadListComponent", function() { return BookReadListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookReadListComponent = /** @class */ (function () {
    function BookReadListComponent() {
        this.changeLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeRead = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BookReadListComponent.prototype.selectionChanged = function ($event) {
        var option = $event.option;
        if (option.value === 'read') {
            this.changeRead.next(option.selected);
        }
        else {
            this.changeLanguage.next([
                option.value,
                option.selected
            ]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookReadListComponent.prototype, "bookRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookReadListComponent.prototype, "changeLanguage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookReadListComponent.prototype, "changeRead", void 0);
    BookReadListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'acb-book-read-list',
            template: "\n    <mat-selection-list #doneList (selectionChange)=\"selectionChanged($event)\">\n      <mat-list-option value=\"gb\" [selected]=\"bookRead.gb\">\n        <span class=\"flag-icon flag-icon-gb\"></span>\n      </mat-list-option>\n      <mat-list-option value=\"dk\" [selected]=\"bookRead.dk\">\n        <span class=\"flag-icon flag-icon-dk\"></span>\n      </mat-list-option>\n      <mat-list-option value=\"de\" [selected]=\"bookRead.de\">\n        <span class=\"flag-icon flag-icon-de\"></span>\n      </mat-list-option>\n      <mat-divider></mat-divider>\n      <mat-list-option value=\"read\" [selected]=\"bookRead.read\">\n        <mat-icon>remove_red_eye</mat-icon>\n      </mat-list-option>\n    </mat-selection-list>\n  ",
            styles: ["\n    mat-list-option {\n      display: flex;\n      flex-direction: row;\n    }\n    mat-list-option span {\n      display: block;\n    }\n  "]
        })
    ], BookReadListComponent);
    return BookReadListComponent;
}());



/***/ }),

/***/ "./src/app/book-route/book-route.component.ts":
/*!****************************************************!*\
  !*** ./src/app/book-route/book-route.component.ts ***!
  \****************************************************/
/*! exports provided: BookRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRouteComponent", function() { return BookRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.service */ "./src/app/state/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var BookRouteComponent = /** @class */ (function () {
    function BookRouteComponent(route, state, router) {
        this.route = route;
        this.state = state;
        this.router = router;
    }
    BookRouteComponent.prototype.gotBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.router.navigate([''])];
            });
        });
    };
    BookRouteComponent.prototype.languageChanged = function (_a, book) {
        var language = _a[0], read = _a[1];
        this.state.setBookLanguageRead(book, language, read);
    };
    BookRouteComponent.prototype.readChanged = function (read, book) {
        this.state.setBookRead(book, read);
    };
    BookRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug$ = this.route.paramMap.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (m) { return m.get('slug'); }));
        var bookWithRead = this.slug$.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (slug) { return _this.state.getBookRead$(slug); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (t) { return console.log('Test', t); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (read) { return read != null; }));
        this.book$ = bookWithRead.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var book = _a[0];
            return book;
        }));
        this.read$ = bookWithRead.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _ = _a[0], read = _a[1];
            return read;
        }));
    };
    BookRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'acb-book-route',
            template: "\n    <ng-container *ngIf=\"book$ | async as book\">\n      <mat-toolbar color=\"primary\">\n        <mat-toolbar-row>\n          <button mat-icon-button (click)=\"gotBack()\">\n            <mat-icon>keyboard_arrow_left</mat-icon>\n          </button>\n          <span>{{book.title}}</span>\n        </mat-toolbar-row>\n      </mat-toolbar>\n      <article *ngIf=\"read$ | async as read\">\n        <acb-book-read-list\n          (changeLanguage)=\"languageChanged($event, book)\"\n          (changeRead)=\"readChanged($event, book)\"\n          [bookRead]=\"read\"\n        ></acb-book-read-list>\n      </article>\n    </ng-container>\n  ",
            styles: [""]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookRouteComponent);
    return BookRouteComponent;
}());



/***/ }),

/***/ "./src/app/book.service.ts":
/*!*********************************!*\
  !*** ./src/app/book.service.ts ***!
  \*********************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    Object.defineProperty(BookService.prototype, "data$", {
        get: function () {
            if (!this._data$) {
                this._data$ = this.http.get('assets/data.json')
                    .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
            }
            return this._data$;
        },
        enumerable: true,
        configurable: true
    });
    BookService.prototype.getBooks = function () {
        return this.data$.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return r.books; }));
    };
    BookService.prototype.getCategories = function () {
        return this.data$.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (r) { return r.cats; }));
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/routes.const.ts":
/*!*********************************!*\
  !*** ./src/app/routes.const.ts ***!
  \*********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _book_list_route_book_list_route_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-list-route/book-list-route.component */ "./src/app/book-list-route/book-list-route.component.ts");
/* harmony import */ var _book_route_book_route_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-route/book-route.component */ "./src/app/book-route/book-route.component.ts");


var routes = [
    { path: '', component: _book_list_route_book_list_route_component__WEBPACK_IMPORTED_MODULE_0__["BookListRouteComponent"], data: { animation: 'HomePage' } },
    { path: 'book/:slug', component: _book_route_book_route_component__WEBPACK_IMPORTED_MODULE_1__["BookRouteComponent"], data: { animation: 'BookPage' } },
];


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state.service */ "./src/app/state/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(state) {
        this.state = state;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.category = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initCat = {};
        this.selectedCat = this.initCat;
        this.hasValue$ = this.search.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (v) { return v.length !== 0; }));
    }
    SearchComponent.prototype.catChange = function ($event) {
        var val = $event.value === this.initCat ? null : $event.value;
        this.category.next(val);
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "category", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'acb-search',
            template: "\n    <ng-template #hasValue>\n      <mat-icon matSuffix (click)=\"search.next(''); searchInput.value = ''\">close</mat-icon>\n    </ng-template>\n    <ng-template #hasNoValue>\n      <mat-icon matSuffix>search</mat-icon>\n    </ng-template>\n    <mat-toolbar \n      color=\"primary\" \n      class=\"mat-elevation-z2 mat-body\"\n      style=\"padding-right: 32px\"\n    >\n      <form class=\"search-form mat-body\">\n        <mat-form-field class=\"mat-body\">\n          <input type=\"search\"\n                 class=\"mat-body\"\n                 matInput\n                 placeholder=\"Search\"\n                 #searchInput\n                 (keyup)=\"search.next(searchInput.value)\"\n                 autocomplete=\"off\"\n          />\n          <ng-container *ngIf=\"hasValue$ | async; then hasValue; else hasNoValue\"></ng-container>\n        </mat-form-field>\n      </form>\n    </mat-toolbar>\n    <mat-toolbar class=\"mat-elevation-z2\">\n      <mat-form-field>\n        <mat-select class=\"mat-body\" [(value)]=\"selectedCat\" (selectionChange)=\"catChange($event)\">\n          <mat-option [value]=\"initCat\">\n            Alle\n          </mat-option>\n          <ng-container *ngFor=\"let cat of state.booksByCategories$ | async\">\n            <mat-option class=\"mat-body\" *ngIf=\"cat[1].length\" [value]=\"cat[0]\">\n              <span>{{cat[0].title}}</span>\n              ({{cat[1].length}})\n            </mat-option>\n            <!--<pre>{{cat | json}}</pre>-->\n          </ng-container>\n        </mat-select>\n      </mat-form-field>\n    </mat-toolbar>\n  ",
            styles: ["\n\n    .search-form {\n      flex: 1;\n      display: flex;\n    }\n\n    mat-form-field {\n      flex: 1\n    }\n  "]
        }),
        __metadata("design:paramtypes", [_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/state/book-read/book-read-reducer.function.ts":
/*!***************************************************************!*\
  !*** ./src/app/state/book-read/book-read-reducer.function.ts ***!
  \***************************************************************/
/*! exports provided: bookReadReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookReadReducer", function() { return bookReadReducer; });
/* harmony import */ var _book_read_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-read.model */ "./src/app/state/book-read/book-read.model.ts");
/* harmony import */ var _book_read_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book-read.actions */ "./src/app/state/book-read/book-read.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function bookReadReducer(state, action) {
    if (state === void 0) { state = _book_read_model__WEBPACK_IMPORTED_MODULE_0__["bookReadInit"]; }
    var _a, _b, _c;
    switch (action.type) {
        case _book_read_actions__WEBPACK_IMPORTED_MODULE_1__["SET_LANGUAGE_READ"]: {
            console.log(state[action.book.slug], action.language);
            return (__assign({}, state, (_a = {}, _a[action.book.slug] = __assign({}, state[action.book.slug], (_b = {}, _b[action.language] = action.read, _b)), _a)));
        }
        case _book_read_actions__WEBPACK_IMPORTED_MODULE_1__["SET_READ"]: {
            return (__assign({}, state, (_c = {}, _c[action.book.slug] = __assign({}, state[action.book.slug], { read: action.read }), _c)));
        }
    }
    return state || _book_read_model__WEBPACK_IMPORTED_MODULE_0__["bookReadInit"];
}


/***/ }),

/***/ "./src/app/state/book-read/book-read-selector.class.ts":
/*!*************************************************************!*\
  !*** ./src/app/state/book-read/book-read-selector.class.ts ***!
  \*************************************************************/
/*! exports provided: selectBookRead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBookRead", function() { return selectBookRead; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectBookRead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('book-read');


/***/ }),

/***/ "./src/app/state/book-read/book-read-state.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/state/book-read/book-read-state.module.ts ***!
  \***********************************************************/
/*! exports provided: BookReadStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookReadStateModule", function() { return BookReadStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _book_read_reducer_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-read-reducer.function */ "./src/app/state/book-read/book-read-reducer.function.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _book_reads_effects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-reads-effects.service */ "./src/app/state/book-read/book-reads-effects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BookReadStateModule = /** @class */ (function () {
    function BookReadStateModule() {
    }
    BookReadStateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('book-read', _book_read_reducer_function__WEBPACK_IMPORTED_MODULE_2__["bookReadReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_book_reads_effects_service__WEBPACK_IMPORTED_MODULE_4__["BookReadsEffectsService"]])
            ],
        })
    ], BookReadStateModule);
    return BookReadStateModule;
}());



/***/ }),

/***/ "./src/app/state/book-read/book-read.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/state/book-read/book-read.actions.ts ***!
  \******************************************************/
/*! exports provided: SET_LANGUAGE_READ, SetLanguageRead, SET_READ, SetRead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LANGUAGE_READ", function() { return SET_LANGUAGE_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLanguageRead", function() { return SetLanguageRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_READ", function() { return SET_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRead", function() { return SetRead; });
var SET_LANGUAGE_READ = '[READ] SET_LANGUAGE';
var SetLanguageRead = /** @class */ (function () {
    function SetLanguageRead(book, language, read) {
        this.book = book;
        this.language = language;
        this.read = read;
        this.type = SET_LANGUAGE_READ;
    }
    return SetLanguageRead;
}());

var SET_READ = '[READ] SET';
var SetRead = /** @class */ (function () {
    function SetRead(book, read) {
        this.book = book;
        this.read = read;
        this.type = SET_READ;
    }
    return SetRead;
}());



/***/ }),

/***/ "./src/app/state/book-read/book-read.model.ts":
/*!****************************************************!*\
  !*** ./src/app/state/book-read/book-read.model.ts ***!
  \****************************************************/
/*! exports provided: createBookRead, BOOK_READ_STORAGE_KEY, bookReadInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBookRead", function() { return createBookRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK_READ_STORAGE_KEY", function() { return BOOK_READ_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookReadInit", function() { return bookReadInit; });
var createBookRead = function () { return ({
    de: false,
    dk: false,
    gb: false,
    read: false
}); };
var BOOK_READ_STORAGE_KEY = 'book-read-storage-key';
var bookReadInit = JSON.parse(localStorage.getItem(BOOK_READ_STORAGE_KEY)) || {};


/***/ }),

/***/ "./src/app/state/book-read/book-reads-effects.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/state/book-read/book-reads-effects.service.ts ***!
  \***************************************************************/
/*! exports provided: BookReadsEffectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookReadsEffectsService", function() { return BookReadsEffectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _book_read_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-read.actions */ "./src/app/state/book-read/book-read.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.service */ "./src/app/state/state.service.ts");
/* harmony import */ var _book_read_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-read.model */ "./src/app/state/book-read/book-read.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookReadsEffectsService = /** @class */ (function () {
    function BookReadsEffectsService(actions$, state) {
        var _this = this;
        this.actions$ = actions$;
        this.state = state;
        this.changeBookREad$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_book_read_actions__WEBPACK_IMPORTED_MODULE_2__["SET_READ"], _book_read_actions__WEBPACK_IMPORTED_MODULE_2__["SET_LANGUAGE_READ"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) { return _this.state.bookRead$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (br) {
            localStorage.setItem(_book_read_model__WEBPACK_IMPORTED_MODULE_5__["BOOK_READ_STORAGE_KEY"], JSON.stringify(br));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], BookReadsEffectsService.prototype, "changeBookREad$", void 0);
    BookReadsEffectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], BookReadsEffectsService);
    return BookReadsEffectsService;
}());



/***/ }),

/***/ "./src/app/state/books/book-actions.class.ts":
/*!***************************************************!*\
  !*** ./src/app/state/books/book-actions.class.ts ***!
  \***************************************************/
/*! exports provided: SET_BOOKS, SetBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BOOKS", function() { return SET_BOOKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetBooks", function() { return SetBooks; });
var SET_BOOKS = '[books] LOAD_BOOK_SUCCESS';
var SetBooks = /** @class */ (function () {
    function SetBooks(books) {
        this.books = books;
        this.type = SET_BOOKS;
    }
    return SetBooks;
}());



/***/ }),

/***/ "./src/app/state/books/book-reducer.function.ts":
/*!******************************************************!*\
  !*** ./src/app/state/books/book-reducer.function.ts ***!
  \******************************************************/
/*! exports provided: bookReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookReducer", function() { return bookReducer; });
/* harmony import */ var _book_actions_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book-actions.class */ "./src/app/state/books/book-actions.class.ts");
/* harmony import */ var _state_map_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state-map.model */ "./src/app/state/state-map.model.ts");


function bookReducer(state, action) {
    switch (action.type) {
        case _book_actions_class__WEBPACK_IMPORTED_MODULE_0__["SET_BOOKS"]: {
            return Object(_state_map_model__WEBPACK_IMPORTED_MODULE_1__["toStateMap"])(action.books, function (book) { return book.slug; });
        }
    }
    return state || [];
}


/***/ }),

/***/ "./src/app/state/books/book-selector.class.ts":
/*!****************************************************!*\
  !*** ./src/app/state/books/book-selector.class.ts ***!
  \****************************************************/
/*! exports provided: selectBooks, selectAllBooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBooks", function() { return selectBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllBooks", function() { return selectAllBooks; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_map_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state-map.model */ "./src/app/state/state-map.model.ts");


var selectBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('books');
var selectAllBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBooks, function (sm) { return Object(_state_map_model__WEBPACK_IMPORTED_MODULE_1__["toArray"])(sm); });


/***/ }),

/***/ "./src/app/state/books/book-state.module.ts":
/*!**************************************************!*\
  !*** ./src/app/state/books/book-state.module.ts ***!
  \**************************************************/
/*! exports provided: BookStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookStateModule", function() { return BookStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _book_reducer_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-reducer.function */ "./src/app/state/books/book-reducer.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BookStateModule = /** @class */ (function () {
    function BookStateModule() {
    }
    BookStateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('books', _book_reducer_function__WEBPACK_IMPORTED_MODULE_2__["bookReducer"])
            ],
            exports: [],
            providers: [],
        })
    ], BookStateModule);
    return BookStateModule;
}());



/***/ }),

/***/ "./src/app/state/categories/categories-actions.class.ts":
/*!**************************************************************!*\
  !*** ./src/app/state/categories/categories-actions.class.ts ***!
  \**************************************************************/
/*! exports provided: SET_CATEGORIES, SetCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CATEGORIES", function() { return SET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCategories", function() { return SetCategories; });
var SET_CATEGORIES = '[categories] set';
var SetCategories = /** @class */ (function () {
    function SetCategories(categories) {
        this.categories = categories;
        this.type = SET_CATEGORIES;
    }
    return SetCategories;
}());



/***/ }),

/***/ "./src/app/state/categories/categories-reducer.function.ts":
/*!*****************************************************************!*\
  !*** ./src/app/state/categories/categories-reducer.function.ts ***!
  \*****************************************************************/
/*! exports provided: categoriesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesReducer", function() { return categoriesReducer; });
/* harmony import */ var _categories_actions_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-actions.class */ "./src/app/state/categories/categories-actions.class.ts");
/* harmony import */ var _state_map_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state-map.model */ "./src/app/state/state-map.model.ts");


function categoriesReducer(state, action) {
    switch (action.type) {
        case _categories_actions_class__WEBPACK_IMPORTED_MODULE_0__["SET_CATEGORIES"]: {
            return Object(_state_map_model__WEBPACK_IMPORTED_MODULE_1__["toStateMap"])(action.categories, function (book) { return book.slug; });
        }
    }
    return state || {};
}


/***/ }),

/***/ "./src/app/state/categories/categories-selector.class.ts":
/*!***************************************************************!*\
  !*** ./src/app/state/categories/categories-selector.class.ts ***!
  \***************************************************************/
/*! exports provided: selectCategories, selectAllCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategories", function() { return selectCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllCategories", function() { return selectAllCategories; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_map_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state-map.model */ "./src/app/state/state-map.model.ts");


var selectCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('categories');
var selectAllCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCategories, _state_map_model__WEBPACK_IMPORTED_MODULE_1__["toArray"]);


/***/ }),

/***/ "./src/app/state/categories/categories-state.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/state/categories/categories-state.module.ts ***!
  \*************************************************************/
/*! exports provided: CategoryStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryStateModule", function() { return CategoryStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _categories_reducer_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories-reducer.function */ "./src/app/state/categories/categories-reducer.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoryStateModule = /** @class */ (function () {
    function CategoryStateModule() {
    }
    CategoryStateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('categories', _categories_reducer_function__WEBPACK_IMPORTED_MODULE_2__["categoriesReducer"])
            ],
            exports: [],
            providers: [],
        })
    ], CategoryStateModule);
    return CategoryStateModule;
}());



/***/ }),

/***/ "./src/app/state/filter/filte-state.model.ts":
/*!***************************************************!*\
  !*** ./src/app/state/filter/filte-state.model.ts ***!
  \***************************************************/
/*! exports provided: isReadingStatus, filterStateInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadingStatus", function() { return isReadingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterStateInit", function() { return filterStateInit; });
function isReadingStatus(i) {
    return [0, 1, 2, 3].indexOf(i) > -1;
}
var filterStateInit = {
    text: '',
    readingStatus: 0,
    category: null
};


/***/ }),

/***/ "./src/app/state/filter/filter-reducer.function.ts":
/*!*********************************************************!*\
  !*** ./src/app/state/filter/filter-reducer.function.ts ***!
  \*********************************************************/
/*! exports provided: filterReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterReducer", function() { return filterReducer; });
/* harmony import */ var _filte_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filte-state.model */ "./src/app/state/filter/filte-state.model.ts");
/* harmony import */ var _filter_state_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-state.actions */ "./src/app/state/filter/filter-state.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function filterReducer(state, action) {
    if (state === void 0) { state = _filte_state_model__WEBPACK_IMPORTED_MODULE_0__["filterStateInit"]; }
    switch (action.type) {
        case _filter_state_actions__WEBPACK_IMPORTED_MODULE_1__["SET_TEXT_FILTER"]: {
            return (__assign({}, state, { text: action.text }));
        }
        case _filter_state_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CATEGORY_FILTER"]: {
            return (__assign({}, state, { category: ((action.category) || { slug: undefined }).slug }));
        }
        case _filter_state_actions__WEBPACK_IMPORTED_MODULE_1__["SET_READING_STATUS_FILTER"]: {
            return (__assign({}, state, { readingStatus: action.readingStatus }));
        }
    }
    return state || _filte_state_model__WEBPACK_IMPORTED_MODULE_0__["filterStateInit"];
}


/***/ }),

/***/ "./src/app/state/filter/filter-selector.class.ts":
/*!*******************************************************!*\
  !*** ./src/app/state/filter/filter-selector.class.ts ***!
  \*******************************************************/
/*! exports provided: selectFilter, selectReadingState, selectFilterText, selectFilterCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilter", function() { return selectFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectReadingState", function() { return selectReadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterText", function() { return selectFilterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilterCategory", function() { return selectFilterCategory; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectFilter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('filter');
var selectReadingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilter, function (filter) { return filter.readingStatus; });
var selectFilterText = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilter, function (filter) { return filter.text; });
var selectFilterCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilter, function (filter) { return filter.category; });


/***/ }),

/***/ "./src/app/state/filter/filter-state.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/state/filter/filter-state.actions.ts ***!
  \******************************************************/
/*! exports provided: SET_TEXT_FILTER, SetTextFilter, SET_READING_STATUS_FILTER, SetReadingStatusFilter, SET_CATEGORY_FILTER, SetCategoryFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TEXT_FILTER", function() { return SET_TEXT_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTextFilter", function() { return SetTextFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_READING_STATUS_FILTER", function() { return SET_READING_STATUS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetReadingStatusFilter", function() { return SetReadingStatusFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CATEGORY_FILTER", function() { return SET_CATEGORY_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCategoryFilter", function() { return SetCategoryFilter; });
var SET_TEXT_FILTER = '[filter] SET_TEXT';
var SetTextFilter = /** @class */ (function () {
    function SetTextFilter(text) {
        this.text = text;
        this.type = SET_TEXT_FILTER;
    }
    return SetTextFilter;
}());

var SET_READING_STATUS_FILTER = '[filter] SET_READING_STATUS';
var SetReadingStatusFilter = /** @class */ (function () {
    function SetReadingStatusFilter(readingStatus) {
        this.readingStatus = readingStatus;
        this.type = SET_READING_STATUS_FILTER;
    }
    return SetReadingStatusFilter;
}());

var SET_CATEGORY_FILTER = '[filter] SET_CATEGORY';
var SetCategoryFilter = /** @class */ (function () {
    function SetCategoryFilter(category) {
        this.category = category;
        this.type = SET_CATEGORY_FILTER;
    }
    return SetCategoryFilter;
}());



/***/ }),

/***/ "./src/app/state/filter/filter-state.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/state/filter/filter-state.module.ts ***!
  \*****************************************************/
/*! exports provided: FilterStateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStateModule", function() { return FilterStateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _filter_reducer_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-reducer.function */ "./src/app/state/filter/filter-reducer.function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterStateModule = /** @class */ (function () {
    function FilterStateModule() {
    }
    FilterStateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('filter', _filter_reducer_function__WEBPACK_IMPORTED_MODULE_2__["filterReducer"])
            ],
            exports: [],
            providers: [],
        })
    ], FilterStateModule);
    return FilterStateModule;
}());



/***/ }),

/***/ "./src/app/state/state-map.model.ts":
/*!******************************************!*\
  !*** ./src/app/state/state-map.model.ts ***!
  \******************************************/
/*! exports provided: toStateMap, toArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toStateMap", function() { return toStateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function toStateMap(data, idPicker) {
    return data.reduce(function (smap, entity) {
        var _a;
        return (__assign((_a = {}, _a[idPicker(entity)] = entity, _a), smap));
    }, {});
}
function toArray(sm) {
    return Object.values(sm);
}


/***/ }),

/***/ "./src/app/state/state-selector.ts":
/*!*****************************************!*\
  !*** ./src/app/state/state-selector.ts ***!
  \*****************************************/
/*! exports provided: selectBooksWithRead, selectFilteredBooks, selectBooksByCategory, selectFilteredBooksByCategory, selectBookReadByBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBooksWithRead", function() { return selectBooksWithRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredBooks", function() { return selectFilteredBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBooksByCategory", function() { return selectBooksByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilteredBooksByCategory", function() { return selectFilteredBooksByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectBookReadByBook", function() { return selectBookReadByBook; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _books_book_selector_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books/book-selector.class */ "./src/app/state/books/book-selector.class.ts");
/* harmony import */ var _categories_categories_selector_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/categories-selector.class */ "./src/app/state/categories/categories-selector.class.ts");
/* harmony import */ var _filter_filter_selector_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter/filter-selector.class */ "./src/app/state/filter/filter-selector.class.ts");
/* harmony import */ var _book_read_book_read_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-read/book-read.model */ "./src/app/state/book-read/book-read.model.ts");
/* harmony import */ var _book_read_book_read_selector_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-read/book-read-selector.class */ "./src/app/state/book-read/book-read-selector.class.ts");
var _a;






var selectBooksWithRead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_books_book_selector_class__WEBPACK_IMPORTED_MODULE_1__["selectAllBooks"], _book_read_book_read_selector_class__WEBPACK_IMPORTED_MODULE_5__["selectBookRead"], function (books, bookReads) { return books.map(function (book) { return [
    book,
    bookReads[book.slug] || Object(_book_read_book_read_model__WEBPACK_IMPORTED_MODULE_4__["createBookRead"])()
]; }); });
var FilterIndexMap = {
    ALL: 0,
    OWN: 1,
    READ: 2,
    MISSING: 3
};
var filters = (_a = {},
    _a[FilterIndexMap.ALL] = function (_) { return true; },
    _a[FilterIndexMap.OWN] = function (book) { return book.de || book.dk || book.gb; },
    _a[FilterIndexMap.READ] = function (book) { return book.read; },
    _a[FilterIndexMap.MISSING] = function (book) { return !(book.de || book.dk || book.gb || book.read); },
    _a);
var selectFilteredBooks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_filter_filter_selector_class__WEBPACK_IMPORTED_MODULE_3__["selectFilter"], selectBooksWithRead, function (_a, books) {
    var category = _a.category, text = _a.text, readingStatus = _a.readingStatus;
    var filterPredicate = filters[readingStatus];
    console.log(category);
    return books
        .filter(function (_a) {
        var _ = _a[0], read = _a[1];
        return filterPredicate(read);
    })
        .filter(function (_a) {
        var book = _a[0];
        return text.length === 0 || book.title.toLowerCase().includes(text.toLowerCase());
    })
        .filter(function (_a) {
        var book = _a[0];
        return !category || (category === book.cat);
    });
});
var booksByCategoryProjector = function (categories, bookWithReads) { return categories
    .map(function (category) { return [
    category,
    bookWithReads
        .filter(function (_a) {
        var book = _a[0];
        return book.cat === category.slug;
    })
        .sort(function (_a, _b) {
        var b1 = _a[0];
        var b2 = _b[0];
        return b1.year - b2.year;
    })
]; })
    .filter(function (_a) {
    var c = _a[0], b = _a[1];
    return b.length;
}); };
var selectBooksByCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_categories_categories_selector_class__WEBPACK_IMPORTED_MODULE_2__["selectAllCategories"], selectBooksWithRead, booksByCategoryProjector);
var selectFilteredBooksByCategory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_categories_categories_selector_class__WEBPACK_IMPORTED_MODULE_2__["selectAllCategories"], selectFilteredBooks, booksByCategoryProjector);
var selectBookReadByBook = function (book) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectBooksWithRead, function (bwr) { return bwr.find(function (_a) {
    var b = _a[0];
    return b.slug === book;
}); }); };


/***/ }),

/***/ "./src/app/state/state.module.ts":
/*!***************************************!*\
  !*** ./src/app/state/state.module.ts ***!
  \***************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _books_book_state_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./books/book-state.module */ "./src/app/state/books/book-state.module.ts");
/* harmony import */ var _filter_filter_state_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter-state.module */ "./src/app/state/filter/filter-state.module.ts");
/* harmony import */ var _categories_categories_state_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories-state.module */ "./src/app/state/categories/categories-state.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _filter_filte_state_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filte-state.model */ "./src/app/state/filter/filte-state.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _book_read_book_read_state_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-read/book-read-state.module */ "./src/app/state/book-read/book-read-state.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _books_book_state_module__WEBPACK_IMPORTED_MODULE_1__["BookStateModule"],
                _filter_filter_state_module__WEBPACK_IMPORTED_MODULE_2__["FilterStateModule"],
                _categories_categories_state_module__WEBPACK_IMPORTED_MODULE_3__["CategoryStateModule"],
                _book_read_book_read_state_module__WEBPACK_IMPORTED_MODULE_8__["BookReadStateModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot({}, {
                    initialState: {
                        filter: _filter_filte_state_model__WEBPACK_IMPORTED_MODULE_5__["filterStateInit"],
                        books: {},
                        category: {}
                    }
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([])
            ].concat((src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
                ? []
                : [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({})])),
            exports: [],
            providers: [],
        })
    ], StateModule);
    return StateModule;
}());



/***/ }),

/***/ "./src/app/state/state.service.ts":
/*!****************************************!*\
  !*** ./src/app/state/state.service.ts ***!
  \****************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _filter_filter_state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter-state.actions */ "./src/app/state/filter/filter-state.actions.ts");
/* harmony import */ var _categories_categories_actions_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories-actions.class */ "./src/app/state/categories/categories-actions.class.ts");
/* harmony import */ var _books_book_actions_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/book-actions.class */ "./src/app/state/books/book-actions.class.ts");
/* harmony import */ var _filter_filter_selector_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filter-selector.class */ "./src/app/state/filter/filter-selector.class.ts");
/* harmony import */ var _categories_categories_selector_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories-selector.class */ "./src/app/state/categories/categories-selector.class.ts");
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../book.service */ "./src/app/book.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state-selector */ "./src/app/state/state-selector.ts");
/* harmony import */ var _book_read_book_read_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-read/book-read.actions */ "./src/app/state/book-read/book-read.actions.ts");
/* harmony import */ var _book_read_book_read_selector_class__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-read/book-read-selector.class */ "./src/app/state/book-read/book-read-selector.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StateService = /** @class */ (function () {
    function StateService(store, bookService) {
        var _this = this;
        this.store = store;
        this.bookService = bookService;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])(this.bookService.getBooks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (books) { return new _books_book_actions_class__WEBPACK_IMPORTED_MODULE_4__["SetBooks"](books); })), this.bookService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (cats) { return new _categories_categories_actions_class__WEBPACK_IMPORTED_MODULE_3__["SetCategories"](cats); }))).subscribe(function (actions) { return actions.forEach(function (action) { return _this.store.dispatch(action); }); });
    }
    /** Filter */
    StateService.prototype.setTextFilter = function (filter) {
        this.store.dispatch(new _filter_filter_state_actions__WEBPACK_IMPORTED_MODULE_2__["SetTextFilter"](filter));
    };
    StateService.prototype.setReadingStatus = function (rs) {
        this.store.dispatch(new _filter_filter_state_actions__WEBPACK_IMPORTED_MODULE_2__["SetReadingStatusFilter"](rs));
    };
    StateService.prototype.setCategoryFilter = function (cf) {
        this.store.dispatch(new _filter_filter_state_actions__WEBPACK_IMPORTED_MODULE_2__["SetCategoryFilter"](cf));
    };
    StateService.prototype.setBookLanguageRead = function (book, language, read) {
        this.store.dispatch(new _book_read_book_read_actions__WEBPACK_IMPORTED_MODULE_11__["SetLanguageRead"](book, language, read));
    };
    StateService.prototype.setBookRead = function (book, read) {
        this.store.dispatch(new _book_read_book_read_actions__WEBPACK_IMPORTED_MODULE_11__["SetRead"](book, read));
    };
    /** Cats */
    StateService.prototype.setCategories = function (cats) {
        this.store.dispatch(new _categories_categories_actions_class__WEBPACK_IMPORTED_MODULE_3__["SetCategories"](cats));
    };
    /** Books */
    StateService.prototype.setBooks = function (books) {
        this.store.dispatch(new _books_book_actions_class__WEBPACK_IMPORTED_MODULE_4__["SetBooks"](books));
    };
    Object.defineProperty(StateService.prototype, "categories$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_categories_categories_selector_class__WEBPACK_IMPORTED_MODULE_6__["selectAllCategories"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "booksByCategories$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_selector__WEBPACK_IMPORTED_MODULE_10__["selectBooksByCategory"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "filteredBooksByCategory$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_selector__WEBPACK_IMPORTED_MODULE_10__["selectFilteredBooksByCategory"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "filter$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_filter_filter_selector_class__WEBPACK_IMPORTED_MODULE_5__["selectFilter"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "readingState$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_filter_filter_selector_class__WEBPACK_IMPORTED_MODULE_5__["selectReadingState"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "filteredBooks$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_state_selector__WEBPACK_IMPORTED_MODULE_10__["selectFilteredBooks"]));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "bookRead$", {
        get: function () {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_book_read_book_read_selector_class__WEBPACK_IMPORTED_MODULE_12__["selectBookRead"]));
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.getBookRead$ = function (book) {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(Object(_state_selector__WEBPACK_IMPORTED_MODULE_10__["selectBookReadByBook"])(book)));
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timkeiner/Projects/typescript/ac-books/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map