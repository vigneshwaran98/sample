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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-two/home-two.component */ "./src/app/home-two/home-two.component.ts");
/* harmony import */ var _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-three/home-three.component */ "./src/app/home-three/home-three.component.ts");
/* harmony import */ var _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-four/home-four.component */ "./src/app/home-four/home-four.component.ts");
/* harmony import */ var _mrsaas_new_mrsaas_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mrsaas-new/mrsaas-new.component */ "./src/app/mrsaas-new/mrsaas-new.component.ts");
/* harmony import */ var _mrsaas_existing_mrsaas_existing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mrsaas-existing/mrsaas-existing.component */ "./src/app/mrsaas-existing/mrsaas-existing.component.ts");
/* harmony import */ var _software_downloads_new_software_downloads_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./software-downloads-new/software-downloads-new.component */ "./src/app/software-downloads-new/software-downloads-new.component.ts");
/* harmony import */ var _software_downloads_exist_software_downloads_exist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./software-downloads-exist/software-downloads-exist.component */ "./src/app/software-downloads-exist/software-downloads-exist.component.ts");











var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "home-two", component: _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_4__["HomeTwoComponent"] },
    { path: "home-three", component: _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_5__["HomeThreeComponent"] },
    { path: "home-four", component: _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_6__["HomeFourComponent"] },
    { path: "mrsaas/new", component: _mrsaas_new_mrsaas_new_component__WEBPACK_IMPORTED_MODULE_7__["MrsaasNewComponent"] },
    { path: "mrsaas/existing", component: _mrsaas_existing_mrsaas_existing_component__WEBPACK_IMPORTED_MODULE_8__["MrsaasExistingComponent"] },
    { path: "software-downloads/new", component: _software_downloads_new_software_downloads_new_component__WEBPACK_IMPORTED_MODULE_9__["SoftwareDownloadsNewComponent"] },
    { path: "software-downloads/exist", component: _software_downloads_exist_software_downloads_exist_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareDownloadsExistComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main class=\"bx--content\" style=\"padding: 0px; margin: 0px;\">\r\n\t<router-outlet></router-outlet>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$edited: false;\r\n$brand-01: #3d70b2;\r\n$brand-02: #5596e6;\r\n$brand-03: #41d6c3;\r\n$inverse-01: #ffffff;\r\n$inverse-02: #272d33;\r\n$ui-01: #ffffff;\r\n$ui-02: #f4f7fb;\r\n$ui-03: #dfe3e6;\r\n$ui-04: #8897a2;\r\n$ui-05: #5a6872;\r\n$text-01: #152934;\r\n$text-02: #5a6872;\r\n$text-03: #cdd1d4;\r\n$field-01: #f4f7fb;\r\n$field-02: #ffffff;\r\n$support-01: #e71d32;\r\n$support-02: #5aa700;\r\n$support-03: #efc100;\r\n$support-04: #5aaafa;\r\n$use-layer: true;\r\n$input-border: 1px solid transparent;\r\n$input-label-weight: 700;\r\n$button-font-weight: 700;\r\n$button-font-size: .875rem;\r\n$button-border-radius: 0;\r\n$button-height: 40px;\r\n$button-padding: 0 1rem;\r\n$button-padding-sm: 0 .5rem;\r\n$button-border-width: 2px;\r\n$accordion-flex-direction: row;\r\n$accordion-justify-content: flex-start;\r\n$accordion-arrow-margin: 0 0 0 .25rem;\r\n$accordion-title-margin: 0 0 0 1rem;\r\n$accordion-content-padding: 0 1rem 0 1.75rem;\r\n$card-text-align: center;\r\n$card-flex-align: center;\r\n$checkbox-border-width: 2px;\r\n$snippet-background-color: $field-01;\r\n$content-switcher-border-radius: 8px;\r\n$content-switcher-option-border: 1px solid $brand-01;\r\n$data-table-heading-transform: uppercase;\r\n$data-table-heading-border-bottom: 1px solid $brand-01;\r\n$data-table-row-height: 2rem;\r\n$modal-border-top: $brand-01 4px solid;\r\n$modal-footer-background-color: $ui-03;\r\n$progress-indicator-bar-width: 1px inset transparent;\r\n$progress-indicator-stroke-width: 5;\r\n$progress-indicator-line-offset: .625rem;\r\n$radio-border-width: 2px;\r\n$structured-list-padding: 2rem;\r\n$structured-list-text-transform: uppercase;*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxWaXZla1N1YnJhbWFuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXE1SUy1NYXN0ZXItVG9vbHNcXE1SUy1PbmJvYXJkaW5nLVVYL3NyY1xcZW52aXJvbm1lbnRzXFx0aGVtZV9jYXJib25fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBb0Q2QyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiRlZGl0ZWQ6IGZhbHNlO1xyXG4kYnJhbmQtMDE6ICMzZDcwYjI7XHJcbiRicmFuZC0wMjogIzU1OTZlNjtcclxuJGJyYW5kLTAzOiAjNDFkNmMzO1xyXG4kaW52ZXJzZS0wMTogI2ZmZmZmZjtcclxuJGludmVyc2UtMDI6ICMyNzJkMzM7XHJcbiR1aS0wMTogI2ZmZmZmZjtcclxuJHVpLTAyOiAjZjRmN2ZiO1xyXG4kdWktMDM6ICNkZmUzZTY7XHJcbiR1aS0wNDogIzg4OTdhMjtcclxuJHVpLTA1OiAjNWE2ODcyO1xyXG4kdGV4dC0wMTogIzE1MjkzNDtcclxuJHRleHQtMDI6ICM1YTY4NzI7XHJcbiR0ZXh0LTAzOiAjY2RkMWQ0O1xyXG4kZmllbGQtMDE6ICNmNGY3ZmI7XHJcbiRmaWVsZC0wMjogI2ZmZmZmZjtcclxuJHN1cHBvcnQtMDE6ICNlNzFkMzI7XHJcbiRzdXBwb3J0LTAyOiAjNWFhNzAwO1xyXG4kc3VwcG9ydC0wMzogI2VmYzEwMDtcclxuJHN1cHBvcnQtMDQ6ICM1YWFhZmE7XHJcbiR1c2UtbGF5ZXI6IHRydWU7XHJcbiRpbnB1dC1ib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuJGlucHV0LWxhYmVsLXdlaWdodDogNzAwO1xyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA3MDA7XHJcbiRidXR0b24tZm9udC1zaXplOiAuODc1cmVtO1xyXG4kYnV0dG9uLWJvcmRlci1yYWRpdXM6IDA7XHJcbiRidXR0b24taGVpZ2h0OiA0MHB4O1xyXG4kYnV0dG9uLXBhZGRpbmc6IDAgMXJlbTtcclxuJGJ1dHRvbi1wYWRkaW5nLXNtOiAwIC41cmVtO1xyXG4kYnV0dG9uLWJvcmRlci13aWR0aDogMnB4O1xyXG4kYWNjb3JkaW9uLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiRhY2NvcmRpb24tanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4kYWNjb3JkaW9uLWFycm93LW1hcmdpbjogMCAwIDAgLjI1cmVtO1xyXG4kYWNjb3JkaW9uLXRpdGxlLW1hcmdpbjogMCAwIDAgMXJlbTtcclxuJGFjY29yZGlvbi1jb250ZW50LXBhZGRpbmc6IDAgMXJlbSAwIDEuNzVyZW07XHJcbiRjYXJkLXRleHQtYWxpZ246IGNlbnRlcjtcclxuJGNhcmQtZmxleC1hbGlnbjogY2VudGVyO1xyXG4kY2hlY2tib3gtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRzbmlwcGV0LWJhY2tncm91bmQtY29sb3I6ICRmaWVsZC0wMTtcclxuJGNvbnRlbnQtc3dpdGNoZXItYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kY29udGVudC1zd2l0Y2hlci1vcHRpb24tYm9yZGVyOiAxcHggc29saWQgJGJyYW5kLTAxO1xyXG4kZGF0YS10YWJsZS1oZWFkaW5nLXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4kZGF0YS10YWJsZS1oZWFkaW5nLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYnJhbmQtMDE7XHJcbiRkYXRhLXRhYmxlLXJvdy1oZWlnaHQ6IDJyZW07XHJcbiRtb2RhbC1ib3JkZXItdG9wOiAkYnJhbmQtMDEgNHB4IHNvbGlkO1xyXG4kbW9kYWwtZm9vdGVyLWJhY2tncm91bmQtY29sb3I6ICR1aS0wMztcclxuJHByb2dyZXNzLWluZGljYXRvci1iYXItd2lkdGg6IDFweCBpbnNldCB0cmFuc3BhcmVudDtcclxuJHByb2dyZXNzLWluZGljYXRvci1zdHJva2Utd2lkdGg6IDU7XHJcbiRwcm9ncmVzcy1pbmRpY2F0b3ItbGluZS1vZmZzZXQ6IC42MjVyZW07XHJcbiRyYWRpby1ib3JkZXItd2lkdGg6IDJweDtcclxuJHN0cnVjdHVyZWQtbGlzdC1wYWRkaW5nOiAycmVtO1xyXG4kc3RydWN0dXJlZC1saXN0LXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Ki9cclxuJGVkaXRlZDogdHJ1ZTtcclxuJGJyYW5kLTAxOiAjMDQ3Y2MwO1xyXG4kYnJhbmQtMDI6ICMxNzVkOGQ7XHJcbiRicmFuZC0wMzogIzk1YzRmMztcclxuJGludmVyc2UtMDE6ICNmZmZmZmY7XHJcbiRpbnZlcnNlLTAyOiAjMjcyZDMzO1xyXG4kdWktMDE6ICNmZmZmZmY7XHJcbiR1aS0wMjogI2Y2ZjZmNjtcclxuJHVpLTAzOiAjZWNlY2VjO1xyXG4kdWktMDQ6ICNjMGJmYzA7XHJcbiR1aS0wNTogIzU5NTg1OTtcclxuJHRleHQtMDE6ICMyNzI3Mjc7XHJcbiR0ZXh0LTAyOiAjNTk1ODU5O1xyXG4kdGV4dC0wMzogIzc3NzY3NztcclxuJGZpZWxkLTAxOiAjZmZmZmZmO1xyXG4kZmllbGQtMDI6ICNmZmZmZmY7XHJcbiRzdXBwb3J0LTAxOiAjZTYyMzI1O1xyXG4kc3VwcG9ydC0wMjogIzM0YmM2ZTtcclxuJHN1cHBvcnQtMDM6ICNmZWQ1MDA7XHJcbiRzdXBwb3J0LTA0OiAjNzc3Njc3O1xyXG4kdXNlLWxheWVyOiBmYWxzZTtcclxuJGlucHV0LWJvcmRlcjogMXB4IHNvbGlkICR1aS0wNDtcclxuJGlucHV0LWxhYmVsLXdlaWdodDogNzAwO1xyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA0MDA7XHJcbiRidXR0b24tZm9udC1zaXplOiAxcmVtO1xyXG4kYnV0dG9uLWJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRidXR0b24taGVpZ2h0OiAzMnB4O1xyXG4kYnV0dG9uLXBhZGRpbmc6IDAgMnJlbTtcclxuJGJ1dHRvbi1wYWRkaW5nLXNtOiAwIDFyZW07XHJcbiRidXR0b24tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRhY2NvcmRpb24tZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4kYWNjb3JkaW9uLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuJGFjY29yZGlvbi1hcnJvdy1tYXJnaW46IDAgLjI1cmVtIDAgMDtcclxuJGFjY29yZGlvbi10aXRsZS1tYXJnaW46IDAgMCAwIDA7XHJcbiRhY2NvcmRpb24tY29udGVudC1wYWRkaW5nOiAwIDEuNzVyZW0gMCAwO1xyXG4kY2FyZC10ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiRjYXJkLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuJGNoZWNrYm94LWJvcmRlci13aWR0aDogMXB4O1xyXG4kc25pcHBldC1iYWNrZ3JvdW5kLWNvbG9yOiAkdWktMDM7XHJcbiRjb250ZW50LXN3aXRjaGVyLWJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuJGNvbnRlbnQtc3dpdGNoZXItb3B0aW9uLWJvcmRlcjogbm9uZTtcclxuJGRhdGEtdGFibGUtaGVhZGluZy10cmFuc2Zvcm06IG5vbmU7XHJcbiRkYXRhLXRhYmxlLWhlYWRpbmctYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR1aS0wNDtcclxuJGRhdGEtdGFibGUtcm93LWhlaWdodDogNXJlbTtcclxuJG1vZGFsLWJvcmRlci10b3A6IG5vbmU7XHJcbiRtb2RhbC1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRwcm9ncmVzcy1pbmRpY2F0b3ItYmFyLXdpZHRoOiBub25lO1xyXG4kcHJvZ3Jlc3MtaW5kaWNhdG9yLXN0cm9rZS13aWR0aDogMjtcclxuJHByb2dyZXNzLWluZGljYXRvci1saW5lLW9mZnNldDogLjdyZW07XHJcbiRyYWRpby1ib3JkZXItd2lkdGg6IDFweDtcclxuJHN0cnVjdHVyZWQtbGlzdC1wYWRkaW5nOiAycmVtO1xyXG4kc3RydWN0dXJlZC1saXN0LXRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4kbmF2LTAxOiAjMWIyODM0O1xyXG4kbmF2LTAyOiAjMWM0OTZkOyJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _carbon_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carbon-module */ "./src/app/carbon-module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! carbon-components-angular */ "./node_modules/carbon-components-angular/index.js");
/* harmony import */ var _carbon_icons_angular_lib_notification_20__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @carbon/icons-angular/lib/notification/20 */ "./node_modules/@carbon/icons-angular/lib/notification/20.js");
/* harmony import */ var _carbon_icons_angular_lib_user_avatar_20__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @carbon/icons-angular/lib/user--avatar/20 */ "./node_modules/@carbon/icons-angular/lib/user--avatar/20.js");
/* harmony import */ var _carbon_icons_angular_lib_app_switcher_20__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @carbon/icons-angular/lib/app-switcher/20 */ "./node_modules/@carbon/icons-angular/lib/app-switcher/20.js");
/* harmony import */ var _carbon_icons_angular_lib_arrow_right_20__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @carbon/icons-angular/lib/arrow--right/20 */ "./node_modules/@carbon/icons-angular/lib/arrow--right/20.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home-two/home-two.component */ "./src/app/home-two/home-two.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home-three/home-three.component */ "./src/app/home-three/home-three.component.ts");
/* harmony import */ var _carbon_icons_angular_lib_close_20__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @carbon/icons-angular/lib/close/20 */ "./node_modules/@carbon/icons-angular/lib/close/20.js");
/* harmony import */ var _carbon_icons_angular_lib_download_20__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @carbon/icons-angular/lib/download/20 */ "./node_modules/@carbon/icons-angular/lib/download/20.js");
/* harmony import */ var _carbon_icons_angular_lib_warning_filled_32__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @carbon/icons-angular/lib/warning--filled/32 */ "./node_modules/@carbon/icons-angular/lib/warning--filled/32.js");
/* harmony import */ var _carbon_icons_angular_lib_warning_filled_16__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @carbon/icons-angular/lib/warning--filled/16 */ "./node_modules/@carbon/icons-angular/lib/warning--filled/16.js");
/* harmony import */ var _carbon_icons_angular_lib_warning_filled_20__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @carbon/icons-angular/lib/warning--filled/20 */ "./node_modules/@carbon/icons-angular/lib/warning--filled/20.js");
/* harmony import */ var _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home-four/home-four.component */ "./src/app/home-four/home-four.component.ts");
/* harmony import */ var _mrsaas_new_mrsaas_new_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mrsaas-new/mrsaas-new.component */ "./src/app/mrsaas-new/mrsaas-new.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mrsaas_existing_mrsaas_existing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mrsaas-existing/mrsaas-existing.component */ "./src/app/mrsaas-existing/mrsaas-existing.component.ts");
/* harmony import */ var _software_downloads_new_software_downloads_new_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./software-downloads-new/software-downloads-new.component */ "./src/app/software-downloads-new/software-downloads-new.component.ts");
/* harmony import */ var _software_downloads_exist_software_downloads_exist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./software-downloads-exist/software-downloads-exist.component */ "./src/app/software-downloads-exist/software-downloads-exist.component.ts");









// carbon-components-angular default imports
// import { Warning32 } from "@carbon/icons-angular/lib/warning/32";





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_15__["HomeTwoComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_17__["HomeThreeComponent"],
                _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_23__["HomeFourComponent"],
                _mrsaas_new_mrsaas_new_component__WEBPACK_IMPORTED_MODULE_24__["MrsaasNewComponent"],
                _mrsaas_existing_mrsaas_existing_component__WEBPACK_IMPORTED_MODULE_26__["MrsaasExistingComponent"],
                _software_downloads_new_software_downloads_new_component__WEBPACK_IMPORTED_MODULE_27__["SoftwareDownloadsNewComponent"],
                _software_downloads_exist_software_downloads_exist_component__WEBPACK_IMPORTED_MODULE_28__["SoftwareDownloadsExistComponent"]
            ],
            imports: [
                _carbon_icons_angular_lib_download_20__WEBPACK_IMPORTED_MODULE_19__["Download20Module"],
                _carbon_icons_angular_lib_close_20__WEBPACK_IMPORTED_MODULE_18__["Close20Module"],
                _carbon_icons_angular_lib_warning_filled_32__WEBPACK_IMPORTED_MODULE_20__["WarningFilled32Module"],
                _carbon_icons_angular_lib_warning_filled_16__WEBPACK_IMPORTED_MODULE_21__["WarningFilled16Module"],
                _carbon_icons_angular_lib_warning_filled_20__WEBPACK_IMPORTED_MODULE_22__["WarningFilled20Module"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_8__["UIShellModule"],
                _carbon_icons_angular_lib_notification_20__WEBPACK_IMPORTED_MODULE_9__["Notification20Module"],
                _carbon_icons_angular_lib_user_avatar_20__WEBPACK_IMPORTED_MODULE_10__["UserAvatar20Module"],
                _carbon_icons_angular_lib_app_switcher_20__WEBPACK_IMPORTED_MODULE_11__["AppSwitcher20Module"],
                _carbon_module__WEBPACK_IMPORTED_MODULE_6__["CarbonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _carbon_icons_angular_lib_arrow_right_20__WEBPACK_IMPORTED_MODULE_12__["ArrowRight20Module"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carbon-module.ts":
/*!**********************************!*\
  !*** ./src/app/carbon-module.ts ***!
  \**********************************/
/*! exports provided: CarbonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarbonModule", function() { return CarbonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-angular */ "./node_modules/carbon-components-angular/index.js");




var CarbonModule = /** @class */ (function () {
    function CarbonModule() {
    }
    CarbonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["FileUploaderModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["NumberModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["InputModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["RadioModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["SearchModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TilesModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["PlaceholderModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DocumentationModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DialogModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DatePickerModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ComboBoxModule"]
            ],
            providers: [carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ModalService"], carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]],
            exports: [
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["CheckboxModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["FileUploaderModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["NumberModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["InputModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["RadioModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["SearchModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["SelectModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TabsModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ListModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TilesModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["PlaceholderModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DocumentationModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DialogModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["NotificationModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["DatePickerModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ComboBoxModule"]
            ]
        })
    ], CarbonModule);
    return CarbonModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" id=\"footerId\">\r\n\t<a href=\"\">\r\n\t\t<p>Contact</p>\r\n\t</a>\r\n\t<a href=\"\">\r\n\t\t<p>Privacy</p>\r\n\t</a>\r\n\t<a href=\"\">\r\n\t\t<p>Terms Of Use</p>\r\n\t</a>\r\n\t<a href=\"\">\r\n\t\t<p>Accessibility</p>\r\n\t</a>\r\n\t<a href=\"\">\r\n\t\t<p>Feedback</p>\r\n\t</a>\r\n\t<a href=\"\">\r\n\t\t<p>Coookies of Preference</p>\r\n\t</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  text-align: center;\n  display: -webkit-box;\n  display: flex; }\n\n.footer a {\n  margin-left: 20px;\n  text-decoration: none;\n  color: whitesmoke;\n  margin-top: 10px;\n  font-weight: 600; }\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .footer {\n    padding: 20px;\n    line-height: 10px;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    text-align: left;\n    display: block; }\n  .footer a {\n    margin-left: 20px;\n    text-decoration: none;\n    color: whitesmoke;\n    margin-top: 10px;\n    font-weight: 600; } }\n\n@media only screen and (max-width: 579px) and (min-width: 0px) {\n  .footer {\n    padding: 20px;\n    line-height: 10px;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    text-align: left;\n    display: block;\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; }\n  .footer a {\n    margin-left: 20px;\n    text-decoration: none;\n    color: whitesmoke;\n    margin-top: 10px;\n    font-weight: 600; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVml2ZWtTdWJyYW1hbmlcXERvY3VtZW50c1xcR2l0SHViXFxNUlMtTWFzdGVyLVRvb2xzXFxNUlMtT25ib2FyZGluZy1VWC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFZO0VBQ1osWUFBVztFQUNYLHdCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIscUJBQWE7RUFBYixjQUFhLEVBQ2I7O0FBRUQ7RUFDQyxrQkFBaUI7RUFDakIsc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2hCOztBQUVEO0VBQ0M7SUFDQyxjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixZQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLGlCQUFnQjtJQUNoQixlQUFjLEVBQ2Q7RUFDRDtJQUNDLGtCQUFpQjtJQUNqQixzQkFBcUI7SUFDckIsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFDaEIsRUFBQTs7QUFFRjtFQUNDO0lBQ0MsY0FBYTtJQUNiLGtCQUFpQjtJQUNqQixhQUFZO0lBQ1osWUFBVztJQUNYLHdCQUF1QjtJQUN2QixpQkFBZ0I7SUFDaEIsZUFBYztJQUNkLHdCQUFlO09BQWYscUJBQWU7WUFBZixnQkFBZSxFQUNmO0VBQ0Q7SUFDQyxrQkFBaUI7SUFDakIsc0JBQXFCO0lBQ3JCLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsaUJBQWdCLEVBQ2hCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb290ZXIgYSB7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHQuZm9vdGVyIHtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTBweDtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdC5mb290ZXIgYSB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc5cHgpIGFuZCAobWluLXdpZHRoOiAwcHgpe1xyXG5cdC5mb290ZXIge1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGNvbHVtbi1jb3VudDogMjtcclxuXHR9XHJcblx0LmZvb3RlciBhIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0Y29sb3I6IHdoaXRlc21va2U7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ibm-header\" id=\"head\">\r\n\t<ibm-header name=\"[CIO]\">\r\n\t\t<ibm-header-navigation>\r\n\t\t\t<!-- <ibm-header-item>Catalog</ibm-header-item>\r\n\t\t<ibm-header-item>Docs</ibm-header-item>\r\n\t\t<ibm-header-item>Support</ibm-header-item> -->\r\n\t\t\t<!-- <ibm-header-menu title=\"Manage\">\r\n\t\t\t<ibm-header-item>Link 1</ibm-header-item>\r\n\t\t\t<ibm-header-item>Link 2</ibm-header-item>\r\n\t\t\t<ibm-header-item>Link 3</ibm-header-item>\r\n\t\t</ibm-header-menu> -->\r\n\t\t</ibm-header-navigation>\r\n\t\t<ibm-header-global id=\"headerId\">\r\n\t\t\t<ibm-header-action title=\"action\">\r\n\t\t\t\t<svg ibmIconNotification20></svg>\r\n\t\t\t</ibm-header-action>\r\n\t\t\t<ibm-header-action title=\"action\">\r\n\t\t\t\t<svg ibmIconUserAvatar20></svg>\r\n\t\t\t</ibm-header-action>\r\n\t\t\t<ibm-header-action title=\"action\">\r\n\t\t\t\t<svg ibmIconAppSwitcher20></svg>\r\n\t\t\t</ibm-header-action>\r\n\t\t</ibm-header-global>\r\n\t</ibm-header>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  display: -webkit-box;\n  display: flex; }\n\n.footer a {\n  margin-left: 40px;\n  color: black;\n  margin-top: 10px;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVml2ZWtTdWJyYW1hbmlcXERvY3VtZW50c1xcR2l0SHViXFxNUlMtTWFzdGVyLVRvb2xzXFxNUlMtT25ib2FyZGluZy1VWC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBYTtFQUFiLGNBQWEsRUFDYjs7QUFDRDtFQUNDLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5mb290ZXIgYSB7XHJcblx0bWFyZ2luLWxlZnQ6IDQwcHg7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLy8gI2R3LWZvb3RlciAuZHctZm9vdGVyLWNvcnBvcmF0ZS1saW5rcyB1bCBsaSBhIHtcclxuLy8gXHRmb250LXNpemU6IDAuODc1cmVtO1xyXG4vLyBcdGNvbG9yOiAjZjNmM2YzO1xyXG4vLyBcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gXHRkaXNwbGF5OiBibG9jaztcclxuLy8gXHRwYWRkaW5nOiAxcmVtO1xyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        // adds padding to the top of the document, so the content is below the header
        this.headerClass = true;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.bx--header'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "headerClass", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-four/home-four.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-four/home-four.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"bx-- resource-card-group one-section resource-main\" style=\"width: 100%; height: 100vh; \">\r\n\t<div class=\"card1\" style=\"padding: 0; background-color: white;\">\r\n\t\t<div style=\"padding:20px\">\r\n\t\t\t<img class=\"img1\" src=\" https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoCkjDgwymh9y5KtLbRsY_nYtcrDLoY9RKghTXLVROW3fT1Tmb\">\r\n            <p style=\"color: #000000;text-align: center;\">\r\n                Thanks for the data\r\n            </p>\r\n            <br />\r\n            <p style=\"color: #000000; text-align: center;\">\r\n                We will get back to you shortly\r\n            </p>\r\n            <br>\r\n\t\t</div>\r\n\t\t<div style=\"padding-top: 117px;\">\r\n\t\t\t<button ibmButton style=\"float: right;\" [routerLink]=\"['/home']\">\r\n\t\t\t\tClose\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div> -->\r\n<div style=\"background-color: grey; width: 100%;\" id=\"main1\" (window:resize) = \"reSize()\">\r\n  <div style=\"width: 60%; height: 65vh; background-color: white; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; color: black;\">\r\n    <div style= \"float: right\">\r\n      <a href=\"/home\">\r\n      <svg style=\"color: black\" icon ibmIconClose20></svg>\r\n      </a>\r\n    </div>\r\n    <div style=\"position: absolute; top: 0;  left: 0; right: 0; bottom: 0;  margin: auto; background-color: white;  height: 40vh; width: 100%;\">\r\n      <img class=\"img1\" src=\"../../assets/img/ok.png\" >\r\n        <div style=\"height: 20vh; width: 100%; background-color:white; font-size: 4 vw; text-align: center; position: absolute; bottom: 0; color: black; \">\r\n          <p> {{content}}</p>\r\n            <p>Your MRSaaS Reference Number is <strong> {{transactionId}}</strong></p>\r\n            \r\n            <p>You will receive a E-mail from MRS shortly</p>\r\n           <br>\r\n           <br>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <br>\r\n    <button ibmButton style=\"float: right; bottom: 2%; position: absolute;\"[routerLink]=\"['/home']\">\r\n      Close\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-four/home-four.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-four/home-four.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: 100%;\n  width: 100%; }\n\n.home-four {\n  background-color: #8d8d8d;\n  margin-top: 500px; }\n\n.resource-main {\n  background-color: #8d8d8d; }\n\n.card1 {\n  height: 40%;\n  width: 60%;\n  padding: 20px;\n  margin-left: 20%;\n  margin-top: 10%;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute; }\n\n.img1 {\n  height: 50%;\n  padding-top: 10;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\nbutton {\n  right: 5%;\n  height: 10%;\n  width: 10%; }\n\nsvg {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1mb3VyL0M6XFxVc2Vyc1xcVml2ZWtTdWJyYW1hbmlcXERvY3VtZW50c1xcR2l0SHViXFxNUlMtTWFzdGVyLVRvb2xzXFxNUlMtT25ib2FyZGluZy1VWC9zcmNcXGFwcFxcaG9tZS1mb3VyXFxob21lLWZvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFZO0VBQ1osWUFBVyxFQUNYOztBQUVEO0VBQ0MsMEJBQXlCO0VBQ3pCLGtCQUFpQixFQUNqQjs7QUFFRDtFQUNDLDBCQUF5QixFQUd6Qjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxXQUFVO0VBQ1YsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsWUFBVztFQUVYLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxVQUFTO0VBRVQsWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFDRDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtZm91ci9ob21lLWZvdXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaG9tZS1mb3VyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOGQ4ZDhkO1xyXG5cdG1hcmdpbi10b3A6IDUwMHB4O1xyXG59XHJcblxyXG4ucmVzb3VyY2UtbWFpbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzhkOGQ4ZDtcclxuXHQvLyBoZWlnaHQ6IDQ4N3B4O1xyXG5cdC8vIHdpZHRoOiAxMjk2cHg7XHJcbn1cclxuXHJcbi5jYXJkMSB7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5pbWcxe1xyXG4gIGhlaWdodDogNTAlO1xyXG4gXHJcbiAgcGFkZGluZy10b3A6IDEwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIHJpZ2h0OiA1JTtcclxuICAvLyBib3R0b206IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG5zdmd7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home-four/home-four.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-four/home-four.component.ts ***!
  \**************************************************/
/*! exports provided: HomeFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFourComponent", function() { return HomeFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeFourComponent = /** @class */ (function () {
    function HomeFourComponent() {
    }
    HomeFourComponent.prototype.ngOnInit = function () {
        this.reSize();
        this.transactionId = localStorage.getItem('transactionId');
        this.content = localStorage.getItem('content');
    };
    HomeFourComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('head').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    HomeFourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-four',
            template: __webpack_require__(/*! ./home-four.component.html */ "./src/app/home-four/home-four.component.html"),
            styles: [__webpack_require__(/*! ./home-four.component.scss */ "./src/app/home-four/home-four.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeFourComponent);
    return HomeFourComponent;
}());



/***/ }),

/***/ "./src/app/home-three/home-three.component.html":
/*!******************************************************!*\
  !*** ./src/app/home-three/home-three.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\t<div style=\"width: 100%;  background-color: #000000\">\r\n\t\t<p\r\n\t\t\tstyle=\"color: #ffffff; margin-left: 12px; padding: 6px; margin-top: 45px;\"\r\n\t\t>\r\n\t\t\tMarketing Registrationm System\r\n\t\t</p>\r\n\t</div>\r\n\t<hr />\r\n\t<div class=\"sub-main\">\r\n\t\t<div class=\"text-main\">\r\n\t\t\t<div>\r\n\t\t\t\t<p class=\"title\">Step 3 Enter the details :</p>\r\n\t\t\t\t<!-- <p class=\"sub-title\">\r\n\t\t\t\t\tkjkjlkjkkjkjuyhnmbhkjdhewkf kjh ekjhfkjwhkjvh<br />kjhkjhkjhjkjhk\r\n\t\t\t\t</p> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<form [formGroup]=\"form1\" (ngSubmit)=\"onsubmit()\">\r\n\t\t<div ibmGrid>\r\n\t\t\t<div ibmRow>\r\n\t\t\t\t<div ibmCol [columnNumbers]=\"{'lg':12}\">\r\n\t\t<div ibmRow class=\" resource-card-group one-section\">\r\n\t\t\t<div ibmCol [columnNumbers]=\"{ 'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label>\r\n\t\t\t\t\t<span style=\"color: white;\"> Name </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t\r\n\t\t\t\t<input\r\n\t\t\t\t\r\n\t\t\t\t\tibmText\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[placeholder]=\"placeholder\"\r\n\t\t\t\t\t[autocomplete]=\"autocomplete\"\r\n\t\t\t\t\tformControlName=\"name\"\r\n\t\t\t\t/>\r\n\t\t\t\r\n\t\t\t</ibm-label>\r\n\t\t\t<div *ngIf=\"form1.get('name').invalid && form1.get('name').touched\">\r\n\t\t\t\t<small *ngIf=\"form1.get('name').errors?.required\">username is required</small>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label>\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t</ibm-label>\r\n\t\t\t\t\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\tid=\"list1\"\r\n\t\t\t\t\tformControlName=\"list\"\r\n\t\t\t\t\t\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label>\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t\r\n\t\t\t\t<div><ibm-date-picker\r\n\t\t\t\t\tformControlName=\"date\"\r\n\t\t\t\t\tdateFormat=\"d/m/Y\"\r\n\t\t\t\tstyle=\"width: max-content;\">\r\n\t\t\t</ibm-date-picker>\r\n\t\t</div></ibm-label>\r\n\t\t\t\t<!-- <ibm-date-picker\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[placeholder]=\"placeholder\"\r\n\t\t\t\t\t[language]=\"language\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[value]=\"value\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[dateFormat]=\"dateFormat\"\r\n\t\t\t\t\t(valueChange)=\"valueChange($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t</ibm-date-picker> -->\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"bx--no-gutter-sm bx--col-md-3 bx--col-lg-3\">\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\tplaceholder=\"Select\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t(selected)=\"selected($event)\"\r\n\t\t\t\t\t(onClose)=\"onClose($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n            </div> -->\r\n\t\t\t<!-- <div>\r\n\t\t\t\t<ibm-label style=\"margin-top: 1px;\">\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t</ibm-label>\r\n\t\t\t\t<textarea\r\n\t\t\t\t\tstyle=\"height: 190px; width: 300px;\"\r\n\t\t\t\t\tibmTextArea\r\n\t\t\t\t\tplaceholder=\"Enter Your text\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[rows]=\"rows\"\r\n\t\t\t\t\t[cols]=\"cols\"\r\n\t\t\t\t\taria-label=\"textarea\"\r\n\t\t\t\t></textarea>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\t\t<!-- part two -->\r\n\t\t<div ibmRow class=\" resource-card-group part-two\">\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label >\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t</ibm-label>\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\tplaceholder=\"Select\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t(selected)=\"selected($event)\"\r\n\t\t\t\t\t(onClose)=\"onClose($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n\t\t\t</div>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label >\r\n\t\t\t\t\t<span style=\"color: white;\"> age </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t\r\n\t\t\t\t<input\r\n\t\t\t\t\tibmText\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[placeholder]=\"placeholder\"\r\n\t\t\t\t\t[autocomplete]=\"autocomplete\"\r\n\t\t\t\t\tformControlName=\"age\"\r\n\t\t\t\t/></ibm-label>\r\n\t\t\t</div>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label >\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t\r\n\t\t\t\t<input\r\n\t\t\t\t\tibmText\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[placeholder]=\"placeholder\"\r\n\t\t\t\t\t[autocomplete]=\"autocomplete\"\r\n\t\t\t\t/></ibm-label>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"bx--no-gutter-sm bx--col-md-3 bx--col-lg-3\">\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\tplaceholder=\"Select\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t(selected)=\"selected($event)\"\r\n\t\t\t\t\t(onClose)=\"onClose($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\r\n\t\t<!-- part three -->\r\n\t\t<div ibmRow class=\" resource-card-group one-section\">\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label>\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t</ibm-label>\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\tplaceholder=\"Select\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t(selected)=\"selected($event)\"\r\n\t\t\t\t\t(onClose)=\"onClose($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n\t\t\t</div>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label >\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t</ibm-label>\r\n\t\t\t\t<ibm-date-picker\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\tdateFormat=\"d/m/Y\"\r\n\t\t\t\t\r\n\t\t\t\t>\r\n\t\t\t</ibm-date-picker>\r\n\t\t\t\t<!-- <ibm-date-picker\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[placeholder]=\"placeholder\"\r\n\t\t\t\t\t[language]=\"language\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[value]=\"value\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[dateFormat]=\"dateFormat\"\r\n\t\t\t\t\t(valueChange)=\"valueChange($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t</ibm-date-picker> -->\r\n\t\t\t</div>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'sm': 12,'lg':5}\" class=\"bx--no-gutter-sm \">\r\n\t\t\t\t<ibm-label>\r\n\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\r\n\t\t\t\t<input\r\n\t\t\t\t\tibmText\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t[placeholder]=\"placeholder\"\r\n\t\t\t\t\t[autocomplete]=\"autocomplete\"\r\n\t\t\t\t/>\t</ibm-label>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div class=\"bx--no-gutter-sm bx--col-md-3 bx--col-lg-3\">\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\tplaceholder=\"Select\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t(selected)=\"selected($event)\"\r\n\t\t\t\t\t(onClose)=\"onClose($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div ibmCol [columnNumbers]=\"{'lg':4}\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<ibm-label >\r\n\t\t\t\t\t\t\t<span style=\"color: white;\"> label </span>\r\n\t\t\t\t\t\t\t<span style=\"color: red;\"> * </span>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<textarea\r\n\t\t\t\t\t\t\tstyle=\"height: 190px; width: 300px;\"\r\n\t\t\t\t\t\t\tibmTextArea\r\n\t\t\t\t\t\t\tplaceholder=\"Enter Your text\"\r\n\t\t\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t\t\t[theme]=\"theme\"\r\n\t\t\t\t\t\t\t[rows]=\"rows\"\r\n\t\t\t\t\t\t\t[cols]=\"cols\"\r\n\t\t\t\t\t\t\taria-label=\"textarea\"\r\n\t\t\t\t\t\t></textarea>\r\n\t\t\t\t\t</ibm-label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<button type=\"submit\" [disabled]=\"!form1.valid\">Submit</button>\r\n\t\t</form>\r\n\t\t<div class=\"sub-main\">\r\n\t\t\t<ibm-checkbox\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"CheckBox($event)\"\r\n\t\t\t>\r\n\t\t\t\tWish to enter Carbon Data\r\n\t\t\t</ibm-checkbox>\r\n\t\t\t<div class=\"bx--row resource-card-group one-section\">\r\n\t\t\t\t<!-- <ibm-checkbox\r\n\t\t\t\t\tchecked=\"true\"\r\n\t\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t\t(change)=\"onChange($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t\tCheckboxkj jjk\r\n                </ibm-checkbox> -->\r\n\t\t\t</div>\r\n\r\n\t\t\t<p>Custom data documents</p>\r\n\t\t\t<p>Only docs and pdf files 500kb max file size</p>\r\n\r\n\t\t\t<!-- File uploader -->\r\n\t\t\t<div\r\n\t\t\t\t*ngIf=\"buttonName\"\r\n\t\t\t\tclass=\"bx--row resource-card-group one-section\"\r\n\t\t\t>\r\n\t\t\t\t<ibm-file-uploader\r\n\t\t\t\t\tstyle=\"width: 300px;\"\r\n\t\t\t\t\t[title]=\"title\"\r\n\t\t\t\t\t[description]=\"description\"\r\n\t\t\t\t\t[buttonText]=\"buttonText\"\r\n\t\t\t\t\t[buttonType]=\"buttonType\"\r\n\t\t\t\t\t[accept]=\"accept\"\r\n\t\t\t\t\t[multiple]=\"multiple\"\r\n\t\t\t\t\t[skeleton]=\"skeleton\"\r\n\t\t\t\t\t[(files)]=\"files\"\r\n\t\t\t\t\t[size]=\"size\"\r\n\t\t\t\t\tdrop=\"true\"\r\n\t\t\t\t\tdropText=\"drag and drop files here and upload\"\r\n\t\t\t\t\t(filesChange)=\"onDropped($event)\"\r\n\t\t\t\t>\r\n\t\t\t\t</ibm-file-uploader>\r\n\r\n\t\t\t\t<div\r\n\t\t\t\t\t[id]=\"notificationId\"\r\n\t\t\t\t\tstyle=\"width: 600px; margin-top: 20px,height=100%\"\r\n\t\t\t\t></div>\r\n\t\t\t\t<button\r\n\t\t\t\t\tibmButton\r\n\t\t\t\t\t*ngIf=\"files && files.size > 0\"\r\n\t\t\t\t\t(click)=\"onUpload()\"\r\n\t\t\t\t>\r\n\t\t\t\t\tUpload\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"bx--row resource-card-group one-section\">\r\n\t\t\t\t<button\r\n\t\t\t\t\t[ibmButton]=\"ibmButton\"\r\n\t\t\t\t\t[size]=\"size\"\r\n\t\t\t\t\t[routerLink]=\"['/home-four']\"\r\n\t\t\t\t>\r\n\t\t\t\t\tSubmit</button\r\n\t\t\t\t>&nbsp;\r\n\t\t\t\t<button\r\n\t\t\t\t\t[ibmButton]=\"ibmButton\"\r\n\t\t\t\t\t[size]=\"size\"\r\n\t\t\t\t\tstyle=\"background-color: #888888;\"\r\n\t\t\t\t>\r\n\t\t\t\t\tCancel\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home-three/home-three.component.scss":
/*!******************************************************!*\
  !*** ./src/app/home-three/home-three.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bx--aspect-ratio--object {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100; }\n\n.main {\n  height: 100%;\n  width: 100%; }\n\n.sub-main {\n  background-color: black;\n  margin-top: -16px;\n  background-color: #282828;\n  color: #e0e0e0;\n  padding: 20px; }\n\n.bx--content {\n  background-color: #282828;\n  color: #e0e0e0; }\n\n.title {\n  font-size: 20px; }\n\n.sub-title {\n  font-size: 14px;\n  line-height: 20px; }\n\n.left-header {\n  height: 120px;\n  width: 290px;\n  color: white; }\n\n.left-side {\n  margin-left: 25px; }\n\na {\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS10aHJlZS9DOlxcVXNlcnNcXFZpdmVrU3VicmFtYW5pXFxEb2N1bWVudHNcXEdpdEh1YlxcTVJTLU1hc3Rlci1Ub29sc1xcTVJTLU9uYm9hcmRpbmctVVgvc3JjXFxhcHBcXGhvbWUtdGhyZWVcXGhvbWUtdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUixVQUFTO0VBQ1QsUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUNEO0VBQ0MsYUFBWTtFQUNaLFlBQVcsRUFDWDs7QUFJRDtFQUNDLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxjQUFhLEVBQ2I7O0FBQ0Q7RUFDQywwQkFBeUI7RUFDekIsZUFBYyxFQUNkOztBQUNEO0VBQ0MsZ0JBQWUsRUFDZjs7QUFDRDtFQUNDLGdCQUFlO0VBRWYsa0JBQWlCLEVBQ2pCOztBQXlDRDtFQUNDLGNBQWE7RUFDYixhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUVEO0VBQ0Msa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0Msc0JBQXFCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS10aHJlZS9ob21lLXRocmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ4LS1hc3BlY3QtcmF0aW8tLW9iamVjdCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ei1pbmRleDogMTAwO1xyXG59XHJcbi5tYWluIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuLy8gLnBhcnQtdHdvIHtcclxuLy8gXHRtYXJnaW4tdG9wOiAtMTQwcHg7XHJcbi8vIH1cclxuLnN1Yi1tYWluIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW4tdG9wOiAtMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJ4LS1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi50aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuLy9cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLy8gLnNlY25kLWZpbGQge1xyXG4vLyBcdG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIH1cclxuLy8gLm9uZS1zZWN0aW9uIHtcclxuLy8gXHRwYWRkaW5nLXRvcDogMjBweDtcclxuLy8gXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuLy8gfVxyXG4vLyAuc2Vjb25kLXNlY3Rpb24ge1xyXG4vLyBcdHBhZGRpbmctdG9wOiAzMHB4O1xyXG4vLyB9XHJcbi8vIC5kb3duLXJpZ2h0IHtcclxuLy8gXHRmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuLy8gLmltZyB7XHJcbi8vIFx0aGVpZ2h0OiAyMDBweDtcclxuLy8gfVxyXG4vLyAucm93IHtcclxuLy8gXHRkaXNwbGF5OiBmbGV4O1xyXG4vLyBcdHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcbi8vIC5jYXJkLXNlY3Rpb24ge1xyXG4vLyBcdHBhZGRpbmc6IDIwcHg7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuLy8gfVxyXG4vLyAuY2FyZCB7XHJcbi8vIFx0aGVpZ2h0OiAxMjBweDtcclxuLy8gXHR3aWR0aDogMjkwcHg7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbi8vIFx0Y29sb3I6IHdoaXRlO1xyXG4vLyBcdHBhZGRpbmc6IDIwcHg7XHJcbi8vIFx0bWFyZ2luLWxlZnQ6IDNweDtcclxuLy8gfVxyXG4vLyAuY2FyZDEge1xyXG4vLyBcdGhlaWdodDogMTIwcHg7XHJcbi8vIFx0d2lkdGg6IDI5MHB4O1xyXG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEyNSwgMTI1KTtcclxuLy8gXHRjb2xvcjogd2hpdGU7XHJcbi8vIFx0cGFkZGluZzogMjBweDtcclxuLy8gXHRtYXJnaW4tbGVmdDogM3B4O1xyXG4vLyB9XHJcbi5sZWZ0LWhlYWRlciB7XHJcblx0aGVpZ2h0OiAxMjBweDtcclxuXHR3aWR0aDogMjkwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVmdC1zaWRlIHtcclxuXHRtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5hIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8vIG1lZGlhIHF1ZXJ5XHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuLy8gXHQucm93IHtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQubWFpbiB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LnN1Yi1tYWluIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gLyogXHJcbi8vICAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXHJcbi8vICAgIyNTY3JlZW4gPSBCL3cgNzY4cHggdG8gMTAyNHB4XHJcbi8vICovXHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuLy8gXHQucm93IHtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQubWFpbiB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LnN1Yi1tYWluIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gLyogXHJcbi8vICAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAobGFuZHNjYXBlKVxyXG4vLyAgICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxyXG4vLyAqL1xyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuLy8gXHQucm93IHtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQubWFpbiB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LnN1Yi1tYWluIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gLyogXHJcbi8vICAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXHJcbi8vICAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcclxuLy8gKi9cclxuXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbi8vIFx0LnJvdyB7XHJcbi8vIFx0XHRkaXNwbGF5OiBibG9jaztcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQubWFpbiB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LnN1Yi1tYWluIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQuY2FyZC1zZWN0aW9uIHtcclxuLy8gXHRcdHBhZGRpbmc6IDIwcHg7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4vLyBcdH1cclxuLy8gXHQuY2FyZCB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuLy8gXHRcdGNvbG9yOiB3aGl0ZTtcclxuLy8gXHRcdHBhZGRpbmc6IDIwcHg7XHJcbi8vIFx0XHRtYXJnaW4tbGVmdDogM3B4O1xyXG4vLyBcdH1cclxuLy8gXHQuY2FyZDEge1xyXG4vLyBcdFx0aGVpZ2h0OiAxMjBweDtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTI1LCAxMjUpO1xyXG4vLyBcdFx0Y29sb3I6IHdoaXRlO1xyXG4vLyBcdFx0cGFkZGluZzogMjBweDtcclxuLy8gXHRcdG1hcmdpbi1sZWZ0OiAzcHg7XHJcbi8vIFx0fVxyXG4vLyBcdC5sZWZ0LWhlYWRlciB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0XHRjb2xvcjogd2hpdGU7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyAvKiBcclxuLy8gICAjI0RldmljZSA9IE1vc3Qgb2YgdGhlIFNtYXJ0cGhvbmVzIE1vYmlsZXMgKFBvcnRyYWl0KVxyXG4vLyAgICMjU2NyZWVuID0gQi93IDMyMHB4IHRvIDQ3OXB4XHJcbi8vICovXHJcblxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4vLyBcdC8vQ1NTXHJcbi8vIFx0LnJvdyB7XHJcbi8vIFx0XHRkaXNwbGF5OiBibG9jaztcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gXHR9XHJcbi8vIFx0Lm1haW4ge1xyXG4vLyBcdFx0aGVpZ2h0OiAxMDAlO1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0fVxyXG4vLyBcdC5zdWItbWFpbiB7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LmNhcmQge1xyXG4vLyBcdFx0aGVpZ2h0OiAxMjBweDtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbi8vIFx0XHRjb2xvcjogd2hpdGU7XHJcbi8vIFx0XHRwYWRkaW5nOiAzMHB4O1xyXG4vLyBcdFx0bWFyZ2luLXRvcDogMTBweDtcclxuLy8gXHR9XHJcbi8vIFx0LmNhcmQxIHtcclxuLy8gXHRcdGhlaWdodDogMTIwcHg7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMzEsIDEyNSwgMTI1KTtcclxuLy8gXHRcdGNvbG9yOiB3aGl0ZTtcclxuLy8gXHRcdHBhZGRpbmc6IDMwcHg7XHJcbi8vIFx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyBcdH1cclxuLy8gXHQubGVmdC1oZWFkZXIge1xyXG4vLyBcdFx0aGVpZ2h0OiA4MHB4O1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0XHRjb2xvcjogd2hpdGU7XHJcbi8vIFx0fVxyXG4vLyBcdC5pbWcge1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home-three/home-three.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home-three/home-three.component.ts ***!
  \****************************************************/
/*! exports provided: HomeThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeThreeComponent", function() { return HomeThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var HomeThreeComponent = /** @class */ (function () {
    function HomeThreeComponent() {
        this.items = [
            { content: "one", id: 0 },
            { content: "two", id: 1 },
            { content: "three", id: 2 },
            { content: "four", id: 3 }
        ];
        this.Image = false;
        this.buttonName = Image;
        this.form1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            list: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    HomeThreeComponent.prototype.ngOnInit = function () { };
    HomeThreeComponent.prototype.onsubmit = function () {
        console.log(this.form1.value);
    };
    HomeThreeComponent.prototype.onChange = function (isChecked) {
        if (isChecked == true) {
            console.log("I am checked", isChecked);
        }
        else {
            console.log("I am  not checked", isChecked);
        }
    };
    HomeThreeComponent.prototype.CheckBox = function (event) {
        this.Image == !this.Image;
        if (this.Image)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    HomeThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home-three",
            template: __webpack_require__(/*! ./home-three.component.html */ "./src/app/home-three/home-three.component.html"),
            styles: [__webpack_require__(/*! ./home-three.component.scss */ "./src/app/home-three/home-three.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeThreeComponent);
    return HomeThreeComponent;
}());



/***/ }),

/***/ "./src/app/home-two/home-two.component.html":
/*!**************************************************!*\
  !*** ./src/app/home-two/home-two.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"width: 100%;\">\r\n\t<div style=\"width: 100%;  background-color: #000000\" id=\"top\">\r\n\t\t<p\r\n\t\t\tstyle=\"color: #ffffff; margin-left: 12px; padding: 6px; margin-top: 45px;\"\r\n\t\t>\r\n\t\t\tMarketing Registration System\r\n\t\t</p>\r\n\t</div>\r\n  <hr />\r\n  <div id=\"main1\" (window:resize) = \"reSize()\">\r\n\t<div class=\"sub-main\">\r\n\t\t<div ibmGrid class=\" bx--grid--condensed\">\r\n\t\t<div ibmRow class=\"text-main\">\r\n\t\t</div>\r\n\t\t<div ibmRow class=\"resource-card-group one-section bx--grid--condensed\">\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'lg':2,'md':3,'sm':2}\"  style=\"padding-bottom : 5vh; \" >\r\n\t\t\t\t<div><p>Select user type \r\n\t\t\t\t<span style=\"color: red;\"> * </span></p>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div [formGroup]=\"f\" ibmCol [columnNumbers]=\"{'lg':3,'md':2,'sm':2}\" style=\"padding-left: -5vh;\" >\r\n\t\t\t\t<ibm-dropdown\r\n\t\t\t\t\t[label]=\"label\"\r\n\t\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t\t[invalid]=\"invalid\"\r\n\t\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t\ttheme=\"select('theme', ['dark', 'light'], 'dark')\"\r\n\t\t\t\t\tplaceholder=\"Select\"\r\n\t\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t\t(selected)=\"d($event)\"\r\n\t\t\t\t\tformControlName=\"select\"\r\n\t\t\t\t\tvalue=\"content\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<ibm-dropdown-list [items]=\"items\" ></ibm-dropdown-list>\r\n\t\t\t\t</ibm-dropdown>\r\n\t\t\t\t<div *ngIf=\"this.flag\" class=\"invalid-feedback\">\r\n\t\t\t\t\t<div class=\"validation\" *ngIf=\"this.flag\">User type is required</div>\r\n\t\t\t\t  </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t</div>\r\n\t</div>\r\n\t\t\t<hr />\r\n\r\n\t\t\r\n\t</div>\r\n\r\n\t<div class=\"card-section\" style=\"background-color: #F2F4F8;\">\r\n\t\t<div ibmRow>\r\n    <img src=\"../../assets//img/4.jpg\" hidden />\r\n    <img src=\"../../assets//img/6.jpg\" hidden/>\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'lg':9,'md':4,'sm':2}\" >\r\n\t\t\t\t<img @fade class=\"img1\" src=\"../../assets//img/4.jpg\" *ngIf=\"image1\" />\r\n\t\t\t\t<img @fade class=\"img1\" src=\"../../assets//img/6.jpg\" *ngIf=\"image2\"/>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div ibmCol [columnNumbers]=\"{'lg':7,'md':4,'sm':2}\">\r\n\t\t\t<div ibmRow>\r\n\t\t\t\t<div id=\"api\" ibmCol [columnNumbers]=\"{'lg':16,'md':8,'sm':4}\" style=\"color: black; font-size: medium ; \">\r\n\t\t\t<span ><h2><br/>\r\n\t\t\t\tMRSaaS API</h2>\r\n\t\t\t\t<br/>\r\n\t\t\t\tThis page will navigate you to MRSaaS Onboarding Form\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"sd\" style=\"display:block;\" ibmCol [columnNumbers]=\"{'lg':16,'md':8,'sm':4}\" style=\"color: black ;font-size:medium; padding-right: 0%; \">\r\n\t\t\t\t\t<span  ><h2>\t<br/>Software Downloads</h2>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\tThis page will navigate you to Software downloads Onboarding Form\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"rp\" ibmCol [columnNumbers]=\"{'lg':16,'md':8,'sm':4}\" style=\"color: black; font-size: medium ; \">\r\n\t\t\t\t\t<span ><h2><br/>\r\n\t\t\t\t\t\tReporting Tool</h2>\r\n\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\tThis page will navigate you to Reporting Tool\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t<br>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<div style=\"cursor: pointer;\" ibmCol [columnNumbers]=\"{'lg':8,'md':4,'sm':2}\">\r\n\t\t\t\t\r\n\r\n\t\t\t\t\t<a  >\r\n\t\t\t\t\t\t<div class=\"card\" (mouseover)=\"imageChange1()\" (click)=\"apiclick()\">\r\n\t\t\t\t\t\t\t<!-- <i class=\"far fa-file-alt\"></i> -->\r\n\t\t\t\t\t\t\t<span>MRSaaS API</span>\r\n\t\t\t\t\t\t\t<svg icon ibmIconArrowRight20></svg>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t<!-- <div ibmCol [columnNumbers]=\"{'lg':1}\"></div> -->\r\n\t\t\t<div style=\"cursor: pointer;\" ibmCol [columnNumbers]=\"{'lg':8,'md':4,'sm':2}\">\r\n\t\t\t<a >\r\n\t\t\t\t<div class=\"card\" (mouseover)=\"imageChange()\" (click)=\"softwareclick()\">\r\n\t\t\t\t\t<span style=\"align-content: center;\"><b>Software Downloads</b></span>\r\n\t\t\t\t\t<svg icon ibmIconArrowRight20></svg>\r\n\t\t\t\t\t<!-- <ibmIconArrowRight20></ibmIconArrowRight20> -->\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div style=\"cursor: pointer;\" ibmCol [columnNumbers]=\"{'lg':8,'md':4,'sm':2}\">\r\n\t\t\t\t\r\n\t\t\t\t<br/><br/>\r\n\t\t\t<a >\r\n\t\t\t\t<div class=\"card\" (mouseover)=\"report()\" >\r\n\t\t\t\t\t<span style=\"align-content: center;\"><b>Reporting Tool </b></span>\r\n\t\t\t\t\t<svg icon ibmIconArrowRight20></svg>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home-two/home-two.component.scss":
/*!**************************************************!*\
  !*** ./src/app/home-two/home-two.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bx--aspect-ratio--object {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100; }\n\n.main {\n  height: 100%;\n  width: 100%; }\n\n.sub-main {\n  background-color: black;\n  margin-top: -16px;\n  background-color: #282828;\n  color: #e0e0e0;\n  padding: 20px; }\n\n.bx--content {\n  background-color: #282828;\n  color: #e0e0e0; }\n\n.title {\n  font-size: 20px; }\n\n.sub-title {\n  font-size: 14px;\n  margin-top: 12px;\n  line-height: 20px; }\n\n.img1 {\n  width: 100%;\n  height: 67vh;\n  -webkit-transition: opacity 500ms ease 0s;\n  transition: opacity 500ms ease 0s; }\n\n.card-section {\n  background-color: #282828; }\n\n.card:hover {\n  background-color: #3c3c44; }\n\n.card {\n  height: 25%;\n  width: 100%;\n  background-color: #282828;\n  color: white;\n  padding: 8%;\n  min-height: 100px;\n  margin-left: 3px; }\n\n.card1 {\n  height: 120px;\n  width: 290px;\n  background-color: #837d7d;\n  color: white; }\n\n.bx--row {\n  margin-right: 1rem; }\n\n.left-header {\n  height: 120px;\n  width: 290px;\n  color: white; }\n\n.left-side {\n  margin-left: 25px; }\n\na {\n  text-decoration: none; }\n\n.validation {\n  padding-bottom: 5px;\n  font-size: smaller;\n  color: red;\n  padding-top: 5px; }\n\nsvg {\n  fill: white;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS10d28vQzpcXFVzZXJzXFxWaXZla1N1YnJhbWFuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXE1SUy1NYXN0ZXItVG9vbHNcXE1SUy1PbmJvYXJkaW5nLVVYL3NyY1xcYXBwXFxob21lLXR3b1xcaG9tZS10d28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUixVQUFTO0VBQ1QsUUFBTztFQUNQLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUNEO0VBQ0MsYUFBWTtFQUNaLFlBQVcsRUFDWDs7QUFDRDtFQUNDLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxjQUFhLEVBQ2I7O0FBQ0Q7RUFDQywwQkFBeUI7RUFDekIsZUFBYyxFQUNkOztBQUNEO0VBQ0MsZ0JBQWUsRUFDZjs7QUFDRDtFQUNDLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNqQjs7QUFrQkQ7RUFDQyxZQUFVO0VBQ1YsYUFBWTtFQUNaLDBDQUFpQztFQUFqQyxrQ0FBaUMsRUFDakM7O0FBQ0Q7RUFFQywwQkFBeUIsRUFDekI7O0FBQ0Q7RUFDQywwQkFBd0IsRUFDeEI7O0FBQ0Q7RUFDQyxZQUFXO0VBQ1gsWUFBVztFQUNYLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osWUFBVztFQUNYLGtCQUFpQjtFQUNqQixpQkFBZ0IsRUFDaEI7O0FBQ0Q7RUFDQyxjQUFhO0VBQ2IsYUFBWTtFQUNaLDBCQUFvQztFQUNwQyxhQUFZLEVBR1o7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDQyxjQUFhO0VBQ2IsYUFBWTtFQUNaLGFBQVksRUFDWjs7QUFFRDtFQUNDLGtCQUFpQixFQUNqQjs7QUFDRDtFQUNDLHNCQUFxQixFQUNyQjs7QUFDRDtFQUNDLG9CQUFtQjtFQUNoQixtQkFBa0I7RUFFckIsV0FBUztFQUNOLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNDLFlBQVc7RUFHWCxhQUFZLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9ob21lLXR3by9ob21lLXR3by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ieC0tYXNwZWN0LXJhdGlvLS1vYmplY3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHotaW5kZXg6IDEwMDtcclxufVxyXG4ubWFpbiB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcbi5zdWItbWFpbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0bWFyZ2luLXRvcDogLTE2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuXHRjb2xvcjogI2UwZTBlMDtcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5ieC0tY29udGVudCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuXHRjb2xvcjogI2UwZTBlMDtcclxufVxyXG4udGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc3ViLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogMTJweDtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4vLyAuc2VjbmQtZmlsZCB7XHJcbi8vIFx0bWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG4vLyAub25lLXNlY3Rpb24ge1xyXG4vLyBcdHBhZGRpbmctdG9wOiAyMHB4O1xyXG4vLyBcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5zZWNvbmQtc2VjdGlvbiB7XHJcbi8vIFx0cGFkZGluZy10b3A6IDMwcHg7XHJcbi8vIH1cclxuLy8gLmRvd24tcmlnaHQge1xyXG4vLyBcdGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG4vLyAuaW1nIHtcclxuLy8gXHRoZWlnaHQ6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG4uaW1nMXtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDogNjd2aDtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UgMHM7XHJcbn1cclxuLmNhcmQtc2VjdGlvbiB7XHJcbi8vXHRwYWRkaW5nOiAyMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojM2MzYzQ0O1xyXG59XHJcbi5jYXJkIHtcclxuXHRoZWlnaHQ6IDI1JTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRwYWRkaW5nOiA4JTtcclxuXHRtaW4taGVpZ2h0OiAxMDBweDtcclxuXHRtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5jYXJkMSB7XHJcblx0aGVpZ2h0OiAxMjBweDtcclxuXHR3aWR0aDogMjkwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMSwgMTI1LCAxMjUpO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5ieC0tcm93e1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLmxlZnQtaGVhZGVyIHtcclxuXHRoZWlnaHQ6IDEyMHB4O1xyXG5cdHdpZHRoOiAyOTBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udmFsaWRhdGlvbntcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG5cdC8vIGNvbG9yOnJnYigyMzgsIDc5LCA3OSk7XHJcblx0Y29sb3I6cmVkO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5zdmd7XHJcblx0ZmlsbDogd2hpdGU7XHJcblx0XHJcblx0XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuXHJcbi8vIC8vIG1lZGlhIHF1ZXJ5XHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuLy8gXHQucm93IHtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQubWFpbiB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LnN1Yi1tYWluIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuLy8gLypcclxuLy8gICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChwb3J0cmFpdClcclxuLy8gICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcclxuLy8gKi9cclxuXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4vLyBcdC5yb3cge1xyXG4vLyBcdFx0aGVpZ2h0OiAxMDAlO1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0fVxyXG4vLyBcdC5tYWluIHtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQuc3ViLW1haW4ge1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4vLyAvKlxyXG4vLyAgICMjRGV2aWNlID0gVGFibGV0cywgSXBhZHMgKGxhbmRzY2FwZSlcclxuLy8gICAjI1NjcmVlbiA9IEIvdyA3NjhweCB0byAxMDI0cHhcclxuLy8gKi9cclxuXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbi8vIFx0LnJvdyB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0Lm1haW4ge1xyXG4vLyBcdFx0aGVpZ2h0OiAxMDAlO1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0fVxyXG4vLyBcdC5zdWItbWFpbiB7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIC8qXHJcbi8vICAgIyNEZXZpY2UgPSBMb3cgUmVzb2x1dGlvbiBUYWJsZXRzLCBNb2JpbGVzIChMYW5kc2NhcGUpXHJcbi8vICAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcclxuLy8gKi9cclxuXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbi8vIFx0LnJvdyB7XHJcbi8vIFx0XHRkaXNwbGF5OiBibG9jaztcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQubWFpbiB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEwMCU7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHR9XHJcbi8vIFx0LnN1Yi1tYWluIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQuY2FyZC1zZWN0aW9uIHtcclxuLy8gXHRcdHBhZGRpbmc6IDIwcHg7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4vLyBcdH1cclxuLy8gXHQuY2FyZCB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuLy8gXHRcdGNvbG9yOiB3aGl0ZTtcclxuLy8gXHRcdHBhZGRpbmc6IDIwcHg7XHJcbi8vIFx0XHRtYXJnaW4tbGVmdDogM3B4O1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0LmxlZnQtaGVhZGVyIHtcclxuLy8gXHRcdGhlaWdodDogMTIwcHg7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHRcdGNvbG9yOiB3aGl0ZTtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbi8vIC8qXHJcbi8vICAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcclxuLy8gICAjI1NjcmVlbiA9IEIvdyAzMjBweCB0byA0NzlweFxyXG4vLyAqL1xyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuLy8gXHQvL0NTU1xyXG4vLyBcdC5yb3cge1xyXG4vLyBcdFx0ZGlzcGxheTogYmxvY2s7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIFx0fVxyXG4vLyBcdC5tYWluIHtcclxuLy8gXHRcdGhlaWdodDogMTAwJTtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuLy8gXHQuc3ViLW1haW4ge1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0fVxyXG4vLyBcdC5jYXJkIHtcclxuLy8gXHRcdGhlaWdodDogMTIwcHg7XHJcbi8vIFx0XHR3aWR0aDogMTAwJTtcclxuLy8gXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vLyBcdFx0Y29sb3I6IHdoaXRlO1xyXG4vLyBcdFx0cGFkZGluZzogMzBweDtcclxuLy8gXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vIFx0fVxyXG4vLyBcdC5jYXJkMSB7XHJcbi8vIFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG4vLyBcdFx0d2lkdGg6IDEwMCU7XHJcbi8vIFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMxLCAxMjUsIDEyNSk7XHJcbi8vIFx0XHRjb2xvcjogd2hpdGU7XHJcbi8vIFx0XHRwYWRkaW5nOiAzMHB4O1xyXG4vLyBcdFx0bWFyZ2luLXRvcDogMTBweDtcclxuLy8gXHR9XHJcbi8vIFx0LmxlZnQtaGVhZGVyIHtcclxuLy8gXHRcdGhlaWdodDogODBweDtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdFx0Y29sb3I6IHdoaXRlO1xyXG4vLyBcdH1cclxuLy8gXHQuaW1nIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0Ly8gaW1nMSBzZWN0aW9uXHJcblxyXG4vLyBcdC5pbWcxIHtcclxuLy8gXHRcdHdpZHRoOiAxMDAlO1xyXG4vLyBcdFx0aGVpZ2h0OiAyMDBweDtcclxuLy8gXHRcdG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuLy8gXHR9XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home-two/home-two.component.ts":
/*!************************************************!*\
  !*** ./src/app/home-two/home-two.component.ts ***!
  \************************************************/
/*! exports provided: HomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoComponent", function() { return HomeTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeTwoComponent = /** @class */ (function () {
    function HomeTwoComponent(router) {
        this.router = router;
        this.items = [
            { content: "New Registration", id: 0 },
            { content: "Existing Registration", id: 1 }
        ];
        this.flag = false;
        this.image1 = true;
        this.image2 = false;
        this.f = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            select: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    HomeTwoComponent.prototype.ngOnInit = function () {
        this.reSize();
        this.f.controls['select'].setValue('New Registration');
        console.log(this.f.controls['select'].value);
        document.getElementById("sd").style.display = "none";
        document.getElementById("rp").style.display = "none";
    };
    HomeTwoComponent.prototype.d = function (e) {
        console.log(this.f.controls['select'].value, e);
        if (this.f.controls['select'].value.content == 'newUser' || this.f.controls['select'].value.content == 'ExistingUser') {
            this.flag = false;
        }
    };
    HomeTwoComponent.prototype.softwareclick = function () {
        if (this.f.controls['select'].value == 'New Registration') {
            this.router.navigateByUrl('/software-downloads/new');
        }
        else if (this.f.controls['select'].value == 'Existing Registration') {
            this.router.navigateByUrl('/software-downloads/exist');
        }
        else {
            this.flag = true;
        }
    };
    HomeTwoComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('top').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    HomeTwoComponent.prototype.apiclick = function () {
        if (this.f.controls['select'].value == 'New Registration') {
            this.router.navigateByUrl('/mrsaas/new');
        }
        else if (this.f.controls['select'].value == 'Existing Registration') {
            this.router.navigateByUrl('/mrsaas/existing');
        }
        else {
            this.flag = true;
        }
    };
    HomeTwoComponent.prototype.imageChange = function () {
        // this.image1 = this.image1 == true ? false : true;
        // this.image2 = !this.image1;
        this.image2 = true;
        this.image1 = false;
        document.getElementById("sd").style.display = "block";
        document.getElementById("api").style.display = "none";
        document.getElementById("rp").style.display = "none";
    };
    HomeTwoComponent.prototype.imageChange1 = function () {
        this.image1 = true;
        this.image2 = false;
        document.getElementById("sd").style.display = "none";
        document.getElementById("api").style.display = "block";
        document.getElementById("rp").style.display = "none";
    };
    HomeTwoComponent.prototype.report = function () {
        document.getElementById("sd").style.display = "none";
        document.getElementById("api").style.display = "none";
        document.getElementById("rp").style.display = "block";
    };
    HomeTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home-two",
            template: __webpack_require__(/*! ./home-two.component.html */ "./src/app/home-two/home-two.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./home-two.component.scss */ "./src/app/home-two/home-two.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeTwoComponent);
    return HomeTwoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"width: 100%;  background-color:  #696363\">\r\n    <p style=\"color: black; margin-left: 18px;\">\r\n        Marketing Registration services\r\n    </p>\r\n</div> -->\r\n\r\n<!-- <div style=\"background-color: #000000\">\r\n  <p\r\n      style=\"color: #FFFFFF; margin-left: 12px; padding: 6px; margin-top: 45px;\">\r\n      Marketing Registration System\r\n  </p>\r\n</div>\r\n\r\n<div  class=\"main1\">\r\n  <div class=\"background\">\r\n      <a [routerLink]=\"['/home-two']\">\r\n          <div class=\"login-mri\">\r\n              <div class=\"div\">\r\n                  <p>Log into MRS</p>\r\n                  <svg ArrowRight20Module></svg>\r\n                  <span class=\"float-right\"\r\n                      ><i class=\"fas fa-long-arrow-alt-right\"></i\r\n                  ></span>\r\n              </div>\r\n          </div>\r\n      </a>\r\n  </div>\r\n</div> -->\r\n<!-- <img  src= \"../../assets/img/2.jpg\" hidden/>\r\n<img  src= \"../../assets/img/1.jpg\" hidden/>\r\n<img  src= \"../../assets/img/3.jpg\" hidden/> -->\r\n<div style=\"background-color: #000000\" id=\"top\">\r\n  <p\r\n      style=\"color: #FFFFFF; margin-left: 12px; padding: 6px; margin-top: 45px;\">\r\n      Marketing Registration System\r\n  </p>\r\n</div>\r\n\r\n<div id = \"main1\" class=\"box\" style=\"background-color: #000000;\" (window:resize) = \"reSize()\">\r\n    <img  src= \"../../assets/img/2 (1).jpg\" hidden/>\r\n    <img  src= \"../../assets/img/1 (1).jpg\" hidden/>\r\n    <img  src= \"../../assets/img/3 (1).jpg\" hidden/>\r\n    <img @fade *ngIf = \"idd === 1\" src= \"../../assets/img/2 (1).jpg\" style=\"height: 100%;\"/>\r\n    <img @fade *ngIf = \"idd === 2\" src= \"../../assets/img/1 (1).jpg\" style=\"height: 100%;\"/>\r\n    <img  @fade *ngIf = \"idd === 3\"src= \"../../assets/img/3 (1).jpg\" style=\"height: 100%;\"/>\r\n\r\n   <button [ibmButton] class=\"float\" [routerLink]=\"['/home-two']\">\r\n    <p style=\"font-size: large;\">Log in to MRS</p>\r\n    <svg icon ibmIconArrowRight20></svg>\r\n  </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%; }\n\n.box {\n  width: 100%; }\n\nibm-tile {\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content; }\n\nibm-modal-footer {\n  width: 100%; }\n\nbutton {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  width: 290px;\n  height: 124px; }\n\nsvg {\n  fill: white;\n  color: white;\n  height: 35px;\n  width: 35px;\n  left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFZpdmVrU3VicmFtYW5pXFxEb2N1bWVudHNcXEdpdEh1YlxcTVJTLU1hc3Rlci1Ub29sc1xcTVJTLU9uYm9hcmRpbmctVVgvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RBO0VBTUUsbUNBQWtDO0VBQ2xDLDZCQUE0QjtFQUM1Qix1QkFBc0I7RUFDdEIsWUFBVyxFQUdaOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUlEO0VBQ0UsbUJBQWtCO0VBQ2xCLDJCQUFrQjtFQUFsQix3QkFBa0I7RUFBbEIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixZQUFXO0VBQ1gsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFPRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWTtFQUNaLFlBQVc7RUFDWCxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbiB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzVGNUQ1RDtcclxuLy8gICBjb2xvcjogI0ZGRkZGRjtcclxuLy8gICBtYXJnaW4tdG9wOiAwcHg7XHJcbi8vICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuLy8gLnRleHQge1xyXG4vLyAgIGNvbG9yOiAjRkZGRkZGO1xyXG4vLyB9XHJcbi8vIC8vIC5iYWNrZ3JvdW5kIHtcclxuLy8gLy8gIC8qXHJcbi8vIC8vICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2NvbXBvbmVudC5wbmdcIik7XHJcbi8vIC8vICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyIGZpeGVkO1xyXG4vLyAvLyAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAvLyAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAvLyAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gLy8gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIC8vICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuLy8gLy8gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEyLCAyMCwgMjAsIDAuNik7XHJcbi8vIC8vICAqL1xyXG5cclxuLy8gLy8gIGJhY2tncm91bmQ6ICNGRkZGRkYgdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9jb21wb25lbnQucG5nXCIpIGNlbnRlciBjZW50ZXI7XHJcbi8vIC8vICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIC8vICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIC8vICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4vLyAvLyAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4vLyAvLyAgaGVpZ2h0OiA1ODlweDtcclxuLy8gLy8gIHdpZHRoOiAxMDAlO1xyXG4vLyAvLyAgLy8gcGFkZGluZy10b3A6IDUwcHg7XHJcbi8vIC8vIH1cclxuLy8gLy8gLm1haW4ge1xyXG4vLyAvLyAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4vLyAvLyB9XHJcbi8vIC5sb2dpbi1tcmkge1xyXG4vLyAgIHdpZHRoOiAyMDBweDtcclxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgYm90dG9tOiAwO1xyXG4vLyAgIHJpZ2h0OiAwO1xyXG4vLyB9XHJcbi8vIC5kaXYge1xyXG4vLyAgIGhlaWdodDogOTVweDtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbi8vIH1cclxuLy8gLm15U2xpZGVzIHtkaXNwbGF5Om5vbmU7fVxyXG5cclxuXHJcblxyXG5cclxuaW1ne1xyXG4gIC8vIHRvcDoxMDBweDtcclxuICAvLyBsZWZ0OiAwcHg7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiA2MDBweDtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiA4M3ZoO1xyXG4gIC8vIG9wYWNpdHk6IC40O1xyXG59XHJcblxyXG4uYm94e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbmlibS10aWxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuaWJtLW1vZGFsLWZvb3RlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDI5MHB4O1xyXG4gIGhlaWdodDogMTI0cHg7XHJcbn1cclxuXHJcbi8vIHNsaWRlc2hvd3tcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbnN2Z3tcclxuICBmaWxsOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(cdr) {
        this.cdr = cdr;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reSize();
        this.idd = 0;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(500, 10000).subscribe(function (x) {
            _this.alertFunc();
        });
    };
    HomeComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('top').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
        // <HTMLElement>document.getElementsByClassName('box')[0]. = this.screenHeight;
        document.getElementsByClassName('box')[0].style.height = this.screenHeight;
    };
    // changeState() {
    //   this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    // }
    HomeComponent.prototype.alertFunc = function () {
        if (this.idd < 3) {
            this.idd++;
        }
        else {
            this.idd = 1;
        }
        // this.changeState();
        // console.log(this.id);
    };
    HomeComponent.prototype.demo = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0.2 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(5000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mrsaas-existing/mrsaas-existing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mrsaas-existing/mrsaas-existing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div >\r\n<div class=\"main\" >\r\n\t<div style=\"width: 100%;  background-color: #000000\" id=\"top\">\r\n\t\t<p\r\n\t\t\tstyle=\"color: #ffffff; margin-left: 12px; padding: 6px; margin-top: 45px;\"\r\n\t\t>\r\n\t\t\tMarketing Registration System\r\n\t\t</p>\r\n\t</div>\r\n\t<hr />\r\n\t<div class=\"sub-main\" id=\"main1\" (window:resize) = \"reSize()\">\r\n\t\t<!-- <div class=\"text-main\">\r\n\t\t\t<div>\r\n\t\t\t\t<p class=\"title\">Enter the details :</p>\r\n\t\t\t\t <p class=\"sub-title\">\r\n\t\t\t\t\tkjkjlkjkkjkjuyhnmbhkjdhewkf kjh ekjhfkjwhkjvh<br />kjhkjhkjhjkjhk\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n    </div> -->\r\n    <form id=\"ff\" [formGroup]=\"formExist\" (ngSubmit)=\"submit()\">\r\n      <div ibmGrid class=\"bx--grid--condensed\">\r\n        <div ibmRow class=\"bx--grid--condensed\" >\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':3}\" class=\"bx--grid--condensed\" style=\"padding-left: 3vh;\">\r\n      <p >Mrsaas Request Id <span style=\"color: red;font-size: large;\"> * </span></p>\r\n\r\n      </div>\r\n      <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--grid--condensed\">\r\n      <input\r\n                id = \"reqID\"\r\n                ibmText\r\n                [invalid]=\"invalid\"\r\n                [disabled]=\"disabled\"\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"id\"\r\n                (blur)=\"requestData()\"\r\n                />\r\n      </div>\r\n      <div class=\"validation\" *ngIf=\"found\" style=\"text-align: center;\">\r\n        <ibm-modal size=\"xs\" id=\"mdl\" (overlaySelected)=\"closeModal()\" style=\"color:black; background: white; text-align: center;\">\r\n          <ibm-modal-header style=\"background: white;\" (closeSelect)=\"closeModal()\" >\r\n            <br>\r\n            <br>\r\n          <svg style=\"padding-top: 30px; color:red; fill:red;\" icon ibmIconWarningFilled32></svg>\r\n          <p style=\"color: #000000; font-weight: bold; font-size: large;\">Data not found</p>\r\n          <br>\r\n          <p style=\"color: #000000; font-weight: bolder;\">Please enter valid Request ID</p>\r\n          <br>\r\n          <button ibmButton (click)='closeModal()'>\r\n            <p style=\"padding-left: 40px;\">OK</p>\r\n          </button>\r\n        </ibm-modal-header>\r\n        </ibm-modal>\r\n        <ibm-placeholder></ibm-placeholder>\r\n      </div>\r\n      </div>\r\n      <br>\r\n      <div tabindex=\"0\">\r\n        <hr/>\r\n      </div>\r\n      <br>\r\n\r\n      <div id=\"disableParent\">\r\n        <div id=\"disable\" >\r\n        <div ibmRow>\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Campaign Name </span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n              <input\r\n            #input1\r\n              ibmText\r\n              [invalid]=\"invalid\"\r\n              [theme]=\"dark\"\r\n              [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\"\r\n              formControlName=\"Campaign_Name\"\r\n              />\r\n\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && f.Campaign_Name.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Campaign_Name.errors.required\">Campaign Name is required</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n              <legend style=\"color: white;\" class=\"bx--label\">Campaign Owner Email\r\n                <span style=\"color: red;font-size: large;\"> * </span>\r\n              </legend>\r\n              <ibm-combo-box class=\"emailClass\"\r\n          [disabled]=\"disabled\"\r\n          [invalid]=\"invalidd\"\r\n          [invalidText]=\"invalidText\"\r\n          [label]=\"label\"\r\n          [helperText]=\"helperText\"\r\n          [items]=\"searchedUsers\"\r\n          (selected)=\"onSelectedMail()\"\r\n         \r\n          [placeholder]=\"comboplace\"\r\n           autocomplete=\"off\" \r\n           formControlName=\"Campaign_Owner_Email\"\r\n          (search)=\"onsearchmail($event)\"\r\n          (keyup)=\"searchUsers($event)\">\r\n          <ibm-dropdown-list></ibm-dropdown-list>\r\n        </ibm-combo-box>\r\n            <div *ngIf=\"submitted && f.Campaign_Owner_Email.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Campaign_Owner_Email.errors.required\">Campaign Owner Email is required</div>\r\n              <div class=\"validation\" *ngIf=\"f.Campaign_Owner_Email.errors.email\">Enter a valid Email address</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Technica Owner Email\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n            </legend>\r\n            <ibm-combo-box  class=\"techClass\"\r\n        [disabled]=\"disabled\"\r\n        [invalid]=\"invalidd\"\r\n        [invalidText]=\"invalidText\"\r\n        [label]=\"label\"\r\n        [helperText]=\"helperText\"\r\n        [items]=\"searchedUsers\"\r\n        (selected)=\"onSelectedMailT()\"\r\n       \r\n        [placeholder]=\"comboplace\"\r\n         autocomplete=\"off\" \r\n         formControlName=\"Technical_Owner_Email\"\r\n        (search)=\"onsearchmailT($event)\"\r\n        (keyup)=\"searchUsers($event)\">\r\n        <ibm-dropdown-list></ibm-dropdown-list>\r\n      </ibm-combo-box>\r\n            <div *ngIf=\"submitted && f.Technical_Owner_Email.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Technical_Owner_Email.errors.required\">Technical Owner Email is required</div>\r\n              <div class=\"validation\" *ngIf=\"f.Technical_Owner_Email.errors.email\">Enter a valid Email address</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <!-- <ibm-label>\r\n              <span style=\"color: white;\"> Application audience </span>\r\n              <span style=\"color: red;\"> * </span>\r\n            </ibm-label> -->\r\n            <legend style=\"color: white;\" class=\"bx--label\">Application Audience\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n\r\n            <ibm-dropdown\r\n\r\n              id=\"list11\"\r\n              placeholder=\"Select\"\r\n              formControlName=\"Application_Audience\"\r\n              (selected)=\"changedropdown($event)\"\r\n              value=\"content\"\r\n            >\r\n            <ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n            <div *ngIf=\"submitted && f.Application_Audience.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Application_Audience.errors.required\">Application Audience is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br><br>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n            <div ibmRow>\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label>\r\n                <span style=\"color: white;\"> Asset Code</span>\r\n\r\n\r\n                <input\r\n\r\n                ibmText\r\n\r\n                [invalid]=\"invalid\"\r\n\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"Asset_Code\"\r\n                />\r\n\r\n              </ibm-label>\r\n\r\n            </div>\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label>\r\n                <span style=\"color: white;\"> Campaign Code </span>\r\n                <span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n                <input\r\n\r\n                ibmText\r\n\r\n                [invalid]=\"invalid\"\r\n\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"Campaign_Code\"\r\n                />\r\n\r\n              </ibm-label>\r\n              <div *ngIf=\"submitted && f.Campaign_Code.errors\" class=\"invalid-feedback\">\r\n                <div class=\"validation\" *ngIf=\"f.Campaign_Code.errors.required\">Campaign Code is required</div>\r\n              </div>\r\n            </div>\r\n            </div>\r\n            <br><br>\r\n          <div ibmRow>\r\n\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label>\r\n                <span style=\"color: white;\"> Marketing Brand </span>\r\n\r\n\r\n                <input\r\n\r\n                ibmText\r\n\r\n                [invalid]=\"invalid\"\r\n\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"Marketing_Brand\"\r\n                />\r\n\r\n              </ibm-label>\r\n            </div>\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label >\r\n                <span style=\"color: white;\"> Expiry Date </span>\r\n                <span style=\"color: red;font-size: large;\"> * </span>\r\n              </ibm-label>\r\n              <ibm-date-picker\r\n\r\n              class=\"date\"\r\n              formControlName=\"Expire_Date\"\r\n              [invalidText]=\"invalidText\"\r\n              dateFormat=\"m/d/Y\"\r\n              [value]=\"value\"\r\n              (change)=\"dateChange($event.target.value)\"\r\n\r\n              >\r\n             </ibm-date-picker>\r\n             <div *ngIf=\"submitted && f.Expire_Date.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Expire_Date.errors.required\">Expiry Date is required</div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label >\r\n\t\t\t\t\t\t\t<span style=\"color: white;\"> Brief Description of your Product </span>\r\n\t\t\t\t\t\t\t<span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n                <textarea\r\n                style=\"padding-top:3vh\"\r\n                rows=\"5\"\r\n                cols=\"30\"\r\n                formControlName=\"Product_Description\"\r\n                  ibmTextArea\r\n                  placeholder=\"Enter Your text\"\r\n                  [invalid]=\"invalid\"\r\n                  [disabled]=\"disabled\"\r\n                  [theme]=\"theme\"\r\n                  [rows]=\"rows\"\r\n                  [cols]=\"cols\"\r\n                  aria-label=\"textarea\"\r\n                ></textarea>\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && f.Product_Description.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Product_Description.errors.required\">Brief Description is required</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label >\r\n\t\t\t\t\t\t\t<span style=\"color: white;\"> Business Justification </span>\r\n\t\t\t\t\t\t\t<span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n                <textarea\r\n                style=\"padding-top: 3vh;\"\r\n                formControlName=\"Business_Justification\"\r\n                  rows=\"5\"\r\n                  cols=\"30\"\r\n                  ibmTextArea\r\n                  placeholder=\"Enter Your text\"\r\n                  [invalid]=\"invalid\"\r\n                  [disabled]=\"disabled\"\r\n                  [theme]=\"theme\"\r\n\r\n                  aria-label=\"textarea\"\r\n                ></textarea>\r\n              </ibm-label>\r\n              <div *ngIf=\"submitted && f.Business_Justification.errors\" class=\"invalid-feedback\">\r\n                <div class=\"validation\" *ngIf=\"f.Business_Justification.errors.required\">Business Justification is required</div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n\r\n        <p><span >List of Demographic Questions to be opted<br/></span></p>\r\n\r\n        <div style=\" padding-left: 10px; border-left: 1px solid;border-right: 1px solid;border-bottom: 1px solid; border-top: 1px solid;color: white;\">\r\n         <br/>\r\n        <div ibmRow>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n      <ibm-checkbox\r\n        formControlName=\"Salutation\"\r\n\r\n        #Salutation\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tSalutation\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"First_Name\"\r\n        [hideLabel]=\"hideLabel\"\r\n        value=\"true\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tFirst Name\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n      <ibm-checkbox\r\n        formControlName=\"Middle_Name\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t>\r\n\t\t\t\tMiddle Name\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Last_Name\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tLast Name\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Email\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tEmail\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Phone\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tPhone\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Fax\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tFax\r\n      </ibm-checkbox>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Company\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tCompany\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div ibmRow>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Job_Title\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tJob Title\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Postal_Code\"\r\n        [hideLabel]=\"hideLabel\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tPostal Code\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Personal_Title\"\r\n        [hideLabel]=\"hideLabel\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tPersonal Title\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Country\"\r\n        [hideLabel]=\"hideLabel\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tCountry\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"State_Region\"\r\n        [hideLabel]=\"hideLabel\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tState/Region\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Address\"\r\n        [hideLabel]=\"hideLabel\"\r\n        class=\"check\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tAddress\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"City\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tCity\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"State\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tState\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'lg':3,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Company_Address\"\r\n        class=\"check\"\r\n        [hideLabel]=\"hideLabel\"\r\n        disabled=\"\"\r\n        (change)=\"onChange($event)\"\r\n        value=\"Y\">\r\n\t\t\t\tCompany Address\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div style=\"padding-left: 15px;\">\r\n          <br>\r\n\r\n         \r\n\r\n        <div ibmRow>\r\n          <ibm-checkbox\r\n\r\n\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n        (change)=\"checkBoxfile($event)\"\r\n        class=\"check\"\r\n\r\n        #check2\r\n\t\t\t>\r\n\t\t\t\tWish to Update Custom Data\r\n      </ibm-checkbox>\r\n      <!-- <a *ngIf=\"downloadFlag\" [href]=\"fileurl\" [download]=\"fileName\">Download file</a> -->\r\n    </div>\r\n      <div id=\"filediv\" *ngIf=\"submitted && check2.checked\" class=\"invalid-feedback\">\r\n        <div class=\"validation\" *ngIf=\"check2.checked && this.fileFlag\">Upload the file</div>\r\n\r\n      </div>\r\n      <div *ngIf=\"flag\" id=\"file\" ibmRow>\r\n        <ibm-file-uploader\r\n\r\n        multiple=\"false\"\r\n        (filesChange)=\"dd($event)\"\r\n\t\t\t\t\tstyle=\"width: 300px;\"\r\n          fileUploaderId=\"fileUploader1\"\r\n        accept=\".xlsx\"\r\n\t\t\t\t\tdrop=\"true\"\r\n\t\t\t\t\tdropText=\"Drag and Drop files here and upload\"\r\n          (change)=\"fileChange($event)\"\r\n          #fileUploader\r\n\t\t\t\t>\r\n        </ibm-file-uploader>\r\n        <a [href]=\"fileurl\" [download]=\"fileName\" style=\"color: rgb(68, 97, 226);\"> &nbsp;&nbsp;&nbsp;&nbsp;<ibm-icon-download20 style=\"fill: blue;\"></ibm-icon-download20>&nbsp; Download file</a>\r\n\r\n        </div>\r\n        </div>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br/>\r\n        <button type=\"submit\" ibmButton=\"\"  [size]=\"size\">\r\n         Submit\r\n\r\n        </button>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br/>\r\n        <button type=\"reset\" ibmButton=\"\" [size]=\"size\"  (click)=\"resetForm()\">\r\n         Reset\r\n\r\n        </button>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </form>\r\n    <ibm-loading *ngIf=\"isLoading\" [isActive]=\"isLoading\" size=\"sm\" [overlay]=\"overlay\">\r\n    </ibm-loading>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mrsaas-existing/mrsaas-existing.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/mrsaas-existing/mrsaas-existing.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-main {\n  background-color: black;\n  margin-top: -16px;\n  background-color: #282828;\n  color: #e0e0e0;\n  padding: 20px; }\n\n.bx--content {\n  background-color: #282828;\n  color: #e0e0e0; }\n\n.title {\n  font-size: 20px; }\n\n.sub-title {\n  font-size: 14px;\n  line-height: 20px; }\n\n.left-header {\n  height: 120px;\n  width: 290px;\n  color: white; }\n\n.left-side {\n  margin-left: 25px; }\n\na {\n  text-decoration: none; }\n\n.validation {\n  padding-bottom: 5px;\n  font-size: medium;\n  color: red;\n  padding-top: 5px; }\n\n.bx--file__selected-file {\n  color: black; }\n\n#disable {\n  pointer-events: none;\n  opacity: .5; }\n\n#disableParent {\n  cursor: not-allowed; }\n\n.bx--modal-close {\n  background-color: black; }\n\nsvg {\n  fill: red;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXJzYWFzLWV4aXN0aW5nL0M6XFxVc2Vyc1xcVml2ZWtTdWJyYW1hbmlcXERvY3VtZW50c1xcR2l0SHViXFxNUlMtTWFzdGVyLVRvb2xzXFxNUlMtT25ib2FyZGluZy1VWC9zcmNcXGFwcFxcbXJzYWFzLWV4aXN0aW5nXFxtcnNhYXMtZXhpc3RpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsY0FBYSxFQUNiOztBQUNEO0VBQ0MsMEJBQXlCO0VBQ3pCLGVBQWMsRUFDZDs7QUFDRDtFQUNDLGdCQUFlLEVBQ2Y7O0FBQ0Q7RUFDQyxnQkFBZTtFQUVmLGtCQUFpQixFQUNqQjs7QUFDRDtFQUNDLGNBQWE7RUFDYixhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUVEO0VBQ0Msa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0Msc0JBQXFCLEVBQ3JCOztBQUNEO0VBQ0Msb0JBQW1CO0VBQ2hCLGtCQUFpQjtFQUVwQixXQUFTO0VBQ04saUJBQWdCLEVBQ25COztBQUNEO0VBQ0MsYUFBVyxFQUNYOztBQUVEO0VBQ0UscUJBQW9CO0VBQ3BCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLFVBQVM7RUFDVCxXQUFVLEVBQ1giLCJmaWxlIjoic3JjL2FwcC9tcnNhYXMtZXhpc3RpbmcvbXJzYWFzLWV4aXN0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1tYWluIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW4tdG9wOiAtMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJ4LS1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi50aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuLy9cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmxlZnQtaGVhZGVyIHtcclxuXHRoZWlnaHQ6IDEyMHB4O1xyXG5cdHdpZHRoOiAyOTBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udmFsaWRhdGlvbntcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcblx0Ly8gY29sb3I6cmdiKDIzOCwgNzksIDc5KTtcclxuXHRjb2xvcjpyZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5ieC0tZmlsZV9fc2VsZWN0ZWQtZmlsZXtcclxuXHRjb2xvcjpibGFjaztcclxufVxyXG5cclxuI2Rpc2FibGV7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogLjU7XHJcbn1cclxuXHJcbiNkaXNhYmxlUGFyZW50e1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5ieC0tbW9kYWwtY2xvc2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbnN2Z3tcclxuICBmaWxsOiByZWQ7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4vLyBkaXY6Zm9jdXN7XHJcbi8vIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/mrsaas-existing/mrsaas-existing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mrsaas-existing/mrsaas-existing.component.ts ***!
  \**************************************************************/
/*! exports provided: MrsaasExistingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrsaasExistingComponent", function() { return MrsaasExistingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mrsaas_existing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrsaas-existing.service */ "./src/app/mrsaas-existing/mrsaas-existing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var MrsaasExistingComponent = /** @class */ (function () {
    function MrsaasExistingComponent(mrsaasExistService, router, sanitizer) {
        this.mrsaasExistService = mrsaasExistService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.invalidd = false;
        this.items = [
            { content: "Internal" },
            { content: "External" },
        ];
        this.checkDisable = false;
        this.fileFlag = true;
        this.flag = false;
        this.submitted = false;
        this.filesToUpload = [];
        this.EscFlag = 1;
        this.found = false;
        this.isLoading = false;
        this.overlay = false;
        this.downloadFlag = true;
    }
    MrsaasExistingComponent.prototype.handleKeyDown = function (event) {
        if (event.which === 9 && document.activeElement.id !== 'reqID' && this.EscFlag === 1) {
            return false;
        }
        if (event.which === 13 && document.activeElement.id === 'reqID') {
            document.getElementById('reqID').blur();
            this.requestData();
        }
        if (event.which === 8 && document.activeElement.id === 'reqID') {
            this.resetForm();
        }
        else {
            return true;
        }
    };
    MrsaasExistingComponent.prototype.closeModal = function () {
        this.found = false;
        this.resetForm();
    };
    MrsaasExistingComponent.prototype.openModal = function () {
        document.getElementById('mdl').style.display = 'block';
    };
    MrsaasExistingComponent.prototype.getFocus = function () {
        document.getElementById('reqID').focus();
    };
    MrsaasExistingComponent.prototype.ngOnInit = function () {
        this.reSize();
        this.getFocus();
        this.formExist = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Owner_Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Technical_Owner_Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Application_Audience: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Asset_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Campaign_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Marketing_Brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Expire_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Product_Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Business_Justification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Salutation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            First_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Last_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            State_Region: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Middle_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Job_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Company_Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Postal_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Personal_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Custom_Question_Xls_File: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        // this.formExist.disable();
        this.formExist.controls['id'].enable();
        console.log(document.getElementsByClassName("check")[0].children[0].disabled);
    };
    MrsaasExistingComponent.prototype.onsearchmail = function (event) {
        this.formExist.controls['Campaign_Owner_Email'].setValue(event);
        // this.sdformExist.controls['Campaign_Owner_Email'].setValue(this.newdata['CAMPAIGN_OWNER_EMAIL']);
    };
    MrsaasExistingComponent.prototype.onSelectedMail = function () {
        console.log('l');
        this.invalidd = false;
        this.formExist.controls['Campaign_Owner_Email'].setValue(this.formExist.controls['Campaign_Owner_Email'].value['content']);
    };
    MrsaasExistingComponent.prototype.onsearchmailT = function (event) {
        this.formExist.controls['Technical_Owner_Email'].setValue(event);
        // this.sdformExist.controls['Campaign_Owner_Email'].setValue(this.newdata['CAMPAIGN_OWNER_EMAIL']);
    };
    MrsaasExistingComponent.prototype.onSelectedMailT = function () {
        console.log('l');
        this.invalidd = false;
        this.formExist.controls['Technical_Owner_Email'].setValue(this.formExist.controls['Technical_Owner_Email'].value['content']);
    };
    Object.defineProperty(MrsaasExistingComponent.prototype, "f", {
        get: function () { return this.formExist.controls; },
        enumerable: true,
        configurable: true
    });
    // onsubmit(){
    //   var x={};
    //   x=this.form1.value;
    //   x['Expire_Date']=(<HTMLInputElement>document.getElementById('datepicker-0')).value;
    //   console.log(JSON.stringify(x));
    //   this.submitted=true;
    //   console.log(this.f.Campaign_Name.value)
    //   // if (this.form1.invalid) {
    //   //   return;
    //   // }
    //   console.log(this.form1.value);
    // }
    MrsaasExistingComponent.prototype.resetForm = function () {
        this.submitted = false;
        this.formExist.reset("");
        console.log("form values");
        console.log(this.formExist.value);
        document.getElementById("disable").style.pointerEvents = "none";
        document.getElementById("disable").style.opacity = ".5";
        document.getElementById("disableParent").style.cursor = "not-allowed";
    };
    MrsaasExistingComponent.prototype.checkBox = function () {
    };
    MrsaasExistingComponent.prototype.dateChange = function (e) {
        this.formExist.controls['Expire_Date'].setValue(e);
    };
    MrsaasExistingComponent.prototype.changedropdown = function (e) {
        // this.form1.controls['Campaign_Name'].setValue('Internal')
        // console.log(e)
        // console.log(e.item.content)
        console.log(this.formExist.controls['Application_Audience'].value);
        // //this.form1.get('Application_Audience').setValue(e.item.content)
    };
    MrsaasExistingComponent.prototype.valueChange = function (e) {
        console.log(e);
        console.log(this.formExist.controls['Expire_Date']);
        this.formExist.controls['Expire_Date'].reset();
        // this.form1.controls["Asset_Code"].setValue((<HTMLInputElement>document.getElementById('datepicker-0')).value);
    };
    MrsaasExistingComponent.prototype.onChange = function (e) {
        console.log(e);
    };
    MrsaasExistingComponent.prototype.fileChange = function (fileInput) {
        var _this = this;
        console.log(fileInput);
        this.filesToUpload = fileInput.target.files;
        console.log(JSON.stringify(this.filesToUpload));
        var files = this.filesToUpload;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            _this.filesBase64 = reader.result.toString();
            console.log(_this.filesBase64);
        };
        this.fileFlag = false;
        console.log(this.formExist.controls['Custom_Question_Xls_File'].value);
    };
    MrsaasExistingComponent.prototype.dd = function (e) {
        console.log(e);
        console.log(e.size);
        if (e.size == 0) {
            this.filesBase64 = null;
            this.fileFlag = true;
        }
    };
    MrsaasExistingComponent.prototype.onDropped = function (e) {
        console.log(e);
    };
    MrsaasExistingComponent.prototype.checkBoxfile = function (e) {
        // console.log(e.checked);
        this.checkbox = e.checked;
        this.flag = !this.flag;
    };
    MrsaasExistingComponent.prototype.formFill = function () {
        document.getElementById("disable").style.pointerEvents = "all";
        document.getElementById("disable").style.opacity = "1";
        document.getElementById("disableParent").style.cursor = "default";
        this.EscFlag++;
        console.log(this.newdata);
        this.formExist.enable();
        var i;
        // for (i = 0; i <= 17; i++) {
        //   (<HTMLInputElement>document.getElementsByClassName("check")[i].children[0]).disabled=false;
        // }
        // (<HTMLInputElement>document.getElementById('datepicker-0')).disabled=false;
        console.log(this.newdata['CAMPAIGN_NAME']);
        var x = this.newdata;
        for (var key in x) {
            if (x.hasOwnProperty(key)) {
                if (x[key] == 'Y' || x[key] == 'y') {
                    this.newdata[key] = true;
                }
                else if (x[key] == 'N' || x[key] == 'n')
                    this.newdata[key] = false;
                // var val = x[key];
                //console.log(val);
            }
        }
        this.formExist.controls['Campaign_Name'].setValue(this.newdata['CAMPAIGN_NAME']);
        this.formExist.controls['Campaign_Owner_Email'].setValue(this.newdata['CAMPAIGN_OWNER_EMAIL']);
        this.formExist.controls['Technical_Owner_Email'].setValue(this.newdata['TECHNICAL_OWNER_EMAIL']);
        this.formExist.controls['Application_Audience'].setValue(this.newdata['APPLICATION_AUDIENCE']);
        this.formExist.controls['Asset_Code'].setValue(this.newdata['ASSET_CODE']);
        this.formExist.controls['Campaign_Code'].setValue(this.newdata['CAMPAIGN_CODE']);
        this.formExist.controls['Product_Description'].setValue(this.newdata['PRODUCT_DESCRIPTION']);
        this.formExist.controls['Business_Justification'].setValue(this.newdata['BUSINESS_JUSTIFICATION']);
        this.formExist.controls['Marketing_Brand'].setValue(this.newdata['MARKETING_BRAND']);
        this.formExist.controls['Expire_Date'].setValue(this.newdata['EXPIRE_DATE']);
        this.formExist.controls['Salutation'].setValue(this.newdata['SALUTATION']);
        this.formExist.controls['First_Name'].setValue(this.newdata['FIRST_NAME']);
        this.formExist.controls['Middle_Name'].setValue(this.newdata['MIDDLE_NAME']);
        this.formExist.controls['Last_Name'].setValue(this.newdata['LAST_NAME']);
        this.formExist.controls['Email'].setValue(this.newdata['EMAIL']);
        this.formExist.controls['Phone'].setValue(this.newdata['PHONE']);
        this.formExist.controls['Fax'].setValue(this.newdata['FAX']);
        this.formExist.controls['Company'].setValue(this.newdata['COMPANY']);
        this.formExist.controls['Job_Title'].setValue(this.newdata['JOB_TITLE']);
        this.formExist.controls['Postal_Code'].setValue(this.newdata['POSTAL_CODE']);
        this.formExist.controls['Personal_Title'].setValue(this.newdata['PERSONAL_TITLE']);
        this.formExist.controls['Country'].setValue(this.newdata['COUNTRY']);
        this.formExist.controls['State_Region'].setValue(this.newdata['STATE_REGION']);
        this.formExist.controls['Address'].setValue(this.newdata['ADDRESS']);
        this.formExist.controls['City'].setValue(this.newdata['CITY']);
        this.formExist.controls['State'].setValue(this.newdata['STATE']);
        this.formExist.controls['Company_Address'].setValue(this.newdata['COMPANY_ADDRESS']);
        document.getElementsByClassName("emailClass")[0].children[0].children[0].children[0].value = this.newdata['CAMPAIGN_OWNER_EMAIL'];
        document.getElementsByClassName("techClass")[0].children[0].children[0].children[0].value = this.newdata['TECHNICAL_OWNER_EMAIL'];
        console.log(this.formExist.value);
    };
    MrsaasExistingComponent.prototype.requestData = function () {
        var _this = this;
        console.log(this.formExist.controls['id'].value);
        var temp = this.formExist.controls['id'].value;
        if (temp == '' || temp.trim().length == 0) {
            return;
        }
        this.formExist.reset();
        this.formExist.controls['id'].setValue(temp);
        console.log(temp);
        this.isLoading = true;
        this.overlay = true;
        this.mrsaasExistService.getData(temp)
            .subscribe(function (data) {
            console.log("success", data);
            if (data['status'] == 'not available' || data['sqlcode'] == -420) {
                _this.isLoading = false;
                _this.overlay = false;
                _this.found = true;
                document.getElementById("disable").style.pointerEvents = "none";
                document.getElementById("disable").style.opacity = ".5";
                document.getElementById("disableParent").style.cursor = "not-allowed";
            }
            else {
                _this.isLoading = false;
                _this.overlay = false;
                _this.found = false;
                _this.newdata = (data[0]);
                // console.log(this.newdata)
                _this.searchedUsers = [
                    { content: _this.newdata['CAMPAIGN_OWNER_EMAIL'] }
                ];
                _this.formFill();
                _this.mrsaasExistService.getExcel(temp).subscribe(function (data) {
                    console.log("excel", data);
                    if (data[0]['CUSTOM_QUESTION_XLS_FILE'] == '') {
                        _this.downloadFlag = false;
                    }
                    else {
                        _this.downloadFlag = true;
                        _this.fileurl = _this.sanitizer.bypassSecurityTrustUrl(data[0]['CUSTOM_QUESTION_XLS_FILE']);
                        _this.fileName = temp;
                    }
                });
            }
        }, function (error) {
            console.log("errror", error);
            _this.isLoading = false;
            _this.overlay = false;
        });
    };
    MrsaasExistingComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('top').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    MrsaasExistingComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.formExist.controls['Salutation'].value);
        this.submitted = true;
        if (this.formExist.invalid || (this.checkbox && this.fileFlag)) {
            return;
        }
        var x = {};
        console.log(this.formExist);
        x = this.formExist.value;
        console.log(x);
        x['Custom_Question_Xls_File'] = this.filesBase64;
        // x['Expire_Date']=(<HTMLInputElement>document.getElementById('datepicker-0')).value;
        //x['Application_Audience']=this.form1.controls['Application_Audience'].value.content;
        for (var key in x) {
            if (x.hasOwnProperty(key)) {
                if (key == 'Asset_Code' && x[key] == false)
                    x[key] = '';
                else if (key == 'Marketing_Brand' && x[key] == false)
                    x[key] = '';
                else if (key == 'Custom_Question_Xls_File' && x[key] == null)
                    x[key] = '';
                else if (x[key] == true) {
                    x[key] = 'Y';
                }
                else if (x[key] == false)
                    x[key] = 'N';
                // var val = x[key];
                //console.log(val);
            }
        }
        console.log(this.filesBase64);
        console.log(x);
        this.isLoading = true;
        this.overlay = true;
        this.mrsaasExistService.sendForm(x)
            .subscribe(function (data) {
            console.log("success", data);
            if (data.statusCode == 200) {
                _this.isLoading = false;
                _this.overlay = false;
                localStorage.setItem('transactionId', data.transactionId);
                localStorage.setItem('content', "Thanks for the Update");
                _this.router.navigateByUrl('/home-four');
            }
        }, function (error) {
            console.log("errror", error);
            _this.isLoading = false;
            _this.overlay = false;
        });
        // console.log(data)
    };
    MrsaasExistingComponent.prototype.searchUsers = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if ((event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 13 || event.keyCode == 16) {
        }
        else {
            this.user = event.target.value;
            if (event.target.value !== null && event.target.value.length > 2) {
                this.mrsaasExistService.getUsersFromBluepage(event.target.value).then(function (data) {
                    _this.searchedUsers = _this.generateUserData(data);
                    console.log("already");
                    console.log(_this.searchedUsers);
                    //  this.isSearchBoxOpen = false;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.user = '';
                this.searchedUsers = "";
                //this.isSearchBoxOpen = true;
                //this.setUserData.emit('');
            }
        }
    };
    MrsaasExistingComponent.prototype.generateUserData = function (obj) {
        var result = [];
        obj['search']['entry'].forEach(function (element, index) {
            var tmp = {};
            element['attribute'].forEach(function (elem) {
                if (elem.name == "mail") {
                    tmp['content'] = elem.value[0];
                    // alert()
                }
                else
                    tmp[elem.name] = elem.value[0];
            });
            result.push(tmp);
        });
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MrsaasExistingComponent.prototype, "handleKeyDown", null);
    MrsaasExistingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mrsaas-existing',
            template: __webpack_require__(/*! ./mrsaas-existing.component.html */ "./src/app/mrsaas-existing/mrsaas-existing.component.html"),
            styles: [__webpack_require__(/*! ./mrsaas-existing.component.scss */ "./src/app/mrsaas-existing/mrsaas-existing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mrsaas_existing_service__WEBPACK_IMPORTED_MODULE_3__["MrsaasExistingService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], MrsaasExistingComponent);
    return MrsaasExistingComponent;
}());

// document.getElementsByClassName("ii")[0].children[0].disabled=false;


/***/ }),

/***/ "./src/app/mrsaas-existing/mrsaas-existing.service.ts":
/*!************************************************************!*\
  !*** ./src/app/mrsaas-existing/mrsaas-existing.service.ts ***!
  \************************************************************/
/*! exports provided: MrsaasExistingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrsaasExistingService", function() { return MrsaasExistingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties */ "./src/app/properties.ts");




var MrsaasExistingService = /** @class */ (function () {
    function MrsaasExistingService(http) {
        this.http = http;
        this.bluepageAPI = "http://bluepages.ibm.com/BpHttpApisv3/slaphapi?ibmperson/";
    }
    MrsaasExistingService.prototype.getData = function (id) {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getRowData/" + id);
        // return this.http.get<any>("http://9.120.240.199:3000/getRowData/"+id)
    };
    MrsaasExistingService.prototype.sendForm = function (data) {
        console.log((data));
        return this.http.post(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/updateTransaction", data);
        //   return this.http.post<any>("http://9.120.240.199:3000/saveTransaction",data)
    };
    MrsaasExistingService.prototype.getExcel = function (id) {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getExcelData/" + id);
    };
    MrsaasExistingService.prototype.getUsersFromBluepage = function (data) {
        return this.http.get(this.bluepageAPI + "(|(mail=*" + data + "*)(cn=*" + data + "	*)).list,40/byJSON?mail&uid&notesemail&jobresponsibilities&cn&givenname")
            .toPromise();
    };
    MrsaasExistingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MrsaasExistingService);
    return MrsaasExistingService;
}());

//var x=this.newdata;
// for (var key in x) {
//   if (x.hasOwnProperty(key)) {
//      if(x[key]=='Y' || x[key]=='y'){
//           this.newdata[key]=true;
//       }
//       else if(x[key]=='N' || x[key]=='n')
//       this.newdata[key]=false;
//    // var val = x[key];
//     //console.log(val);
//   }
// }


/***/ }),

/***/ "./src/app/mrsaas-new/mrsaas-new.component.html":
/*!******************************************************!*\
  !*** ./src/app/mrsaas-new/mrsaas-new.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\t<div style=\"width: 100%;  background-color: #000000\" id=\"top\">\r\n\t\t<p\r\n\t\t\tstyle=\"color: #ffffff; margin-left: 12px; padding: 6px; margin-top: 45px;\"\r\n\t\t>\r\n\t\t\tMarketing Registration System\r\n\t\t</p>\r\n\t</div>\r\n\t<hr />\r\n\t<div class=\"sub-main\" id=\"main1\" (window:resize) = \"reSize()\">\r\n\t\t<!-- <div class=\"text-main\">\r\n\t\t\t<div>\r\n\t\t\t\t<p class=\"title\">Enter the details :</p>\r\n\t\t\t\t <p class=\"sub-title\">\r\n\t\t\t\t\tkjkjlkjkkjkjuyhnmbhkjdhewkf kjh ekjhfkjwhkjvh<br />kjhkjhkjhjkjhk\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n    </div> -->\r\n    <form id=\"ff\" [formGroup]=\"form1\" (ngSubmit)=\"submit()\">\r\n      <div ibmGrid>\r\n        <div ibmRow>\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Campaign Name </span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n              <input\r\n            #input1\r\n              ibmText\r\n              [invalid]=\"invalid\"\r\n              [disabled]=\"disabled\"\r\n              [theme]=\"theme\"\r\n              [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\"\r\n              formControlName=\"Campaign_Name\"\r\n              />\r\n\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && f.Campaign_Name.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Campaign_Name.errors.required\">Campaign Name is required</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n         \r\n            <legend style=\"color: white;\" class=\"bx--label\">Owner Email\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n            </legend>\r\n            <ibm-combo-box\r\n        [disabled]=\"disabled\"\r\n        [invalid]=\"invalidd\"\r\n        [invalidText]=\"invalidText\"\r\n        [label]=\"label\"\r\n        [helperText]=\"helperText\"\r\n        [items]=\"searchedUsers\"\r\n        (selected)=\"onSelectedMail()\"\r\n        formControlName=\"Campaign_Owner_Email\"\r\n        value=\"content\"\r\n        placeholder=\"\"\r\n        (search)=\"onsearchmail($event)\"\r\n        (keyup)=\"searchUsers($event)\">\r\n        <ibm-dropdown-list></ibm-dropdown-list>\r\n      </ibm-combo-box>\r\n            <div *ngIf=\"submitted && f.Campaign_Owner_Email.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Campaign_Owner_Email.errors.required\">Campaign Owner Email is required</div>\r\n              <div class=\"validation\" *ngIf=\"f.Campaign_Owner_Email.errors.email\">Enter a valid Email address</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Technical Owner Email\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n            </legend>\r\n            <ibm-combo-box\r\n        [disabled]=\"disabled\"\r\n        [invalid]=\"invalidd\"\r\n        [invalidText]=\"invalidText\"\r\n        [label]=\"label\"\r\n        [helperText]=\"helperText\"\r\n        [items]=\"searchedUsers\"\r\n        (selected)=\"onSelectedMailT()\"\r\n        formControlName=\"Technical_Owner_Email\"\r\n        value=\"content\"\r\n        placeholder=\"\"\r\n        (search)=\"onsearchmailT($event)\"\r\n        (keyup)=\"searchUsers($event)\">\r\n        <ibm-dropdown-list></ibm-dropdown-list>\r\n      </ibm-combo-box>\r\n            <div *ngIf=\"submitted && f.Technical_Owner_Email.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Technical_Owner_Email.errors.required\">Technical Owner Email is required</div>\r\n              <div class=\"validation\" *ngIf=\"f.Technical_Owner_Email.errors.email\">Enter a valid Email address</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <!-- <ibm-label>\r\n              <span style=\"color: white;\"> Application audience </span>\r\n              <span style=\"color: red;\"> * </span>\r\n            </ibm-label> -->\r\n            <legend style=\"color: white;\" class=\"bx--label\">Application Audience\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n\r\n            <ibm-dropdown\r\n              id=\"list1\"\r\n              placeholder=\"Select\"\r\n              formControlName=\"Application_Audience\"\r\n              (selected)=\"changedropdown($event)\"\r\n              value=\"content\"\r\n            >\r\n            <ibm-dropdown-list [items]=\"items\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n            <div *ngIf=\"submitted && f.Application_Audience.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Application_Audience.errors.required\">Application Audience is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <br><br>\r\n\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n            <div ibmRow>\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label>\r\n                <span style=\"color: white;\"> Asset Code</span>\r\n\r\n\r\n                <input\r\n\r\n                ibmText\r\n                [invalid]=\"invalid\"\r\n                [disabled]=\"disabled\"\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"Asset_Code\"\r\n                />\r\n\r\n              </ibm-label>\r\n\r\n            </div>\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label>\r\n                <span style=\"color: white;\"> Campaign Code </span>\r\n                <span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n                <input\r\n\r\n                ibmText\r\n                [invalid]=\"invalid\"\r\n                [disabled]=\"disabled\"\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"Campaign_Code\"\r\n                />\r\n\r\n              </ibm-label>\r\n              <div *ngIf=\"submitted && f.Campaign_Code.errors\" class=\"invalid-feedback\">\r\n                <div class=\"validation\" *ngIf=\"f.Campaign_Code.errors.required\">Campaign Code is required</div>\r\n              </div>\r\n            </div>\r\n            </div>\r\n            <br><br>\r\n\r\n          <div ibmRow>\r\n\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label>\r\n                <span style=\"color: white;\"> Marketing Brand </span>\r\n\r\n\r\n                <input\r\n\r\n                ibmText\r\n                [invalid]=\"invalid\"\r\n                [disabled]=\"disabled\"\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"Marketing_Brand\"\r\n                />\r\n\r\n              </ibm-label>\r\n            </div>\r\n            <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n              <ibm-label >\r\n                <span style=\"color: white;\"> Expiry Date </span>\r\n                <span style=\"color: red;font-size: large;\"> * </span>\r\n              </ibm-label>\r\n              <ibm-date-picker\r\n\r\n\r\n\r\n              formControlName=\"Expire_Date\"\r\n              [invalidText]=\"invalidText\"\r\n              dateFormat=\"m/d/Y\"\r\n              [value]=\"value\"\r\n              (change)=\"dateChange($event.target.value)\"\r\n\r\n              >\r\n             </ibm-date-picker>\r\n             <div *ngIf=\"submitted && f.Expire_Date.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Expire_Date.errors.required\">Expiry Date is required</div>\r\n            </div>\r\n            </div>\r\n          </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label >\r\n\t\t\t\t\t\t\t<span style=\"color: white;\"> Brief Description of your Product </span>\r\n\t\t\t\t\t\t\t<span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n                <textarea style=\"padding-top: 3vh;\"\r\n                rows=\"5\"\r\n                cols=\"30\"\r\n                formControlName=\"Product_Description\"\r\n                  ibmTextArea\r\n                  placeholder=\"Enter Your text\"\r\n                  [invalid]=\"invalid\"\r\n                  [disabled]=\"disabled\"\r\n                  [theme]=\"theme\"\r\n                  [rows]=\"rows\"\r\n                  [cols]=\"cols\"\r\n                  aria-label=\"textarea\"\r\n                ></textarea>\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && f.Product_Description.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"f.Product_Description.errors.required\">Brief Description is required</div>\r\n            </div>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label >\r\n\t\t\t\t\t\t\t<span style=\"color: white;\"> Business Justification </span>\r\n\t\t\t\t\t\t\t<span style=\"color: red;font-size: large;\"> * </span>\r\n\r\n                <textarea style=\"padding-top: 3vh;\"\r\n                formControlName=\"Business_Justification\"\r\n                  rows=\"5\"\r\n                  cols=\"30\"\r\n                  ibmTextArea\r\n                  placeholder=\"Enter Your text\"\r\n                  [invalid]=\"invalid\"\r\n                  [disabled]=\"disabled\"\r\n                  [theme]=\"theme\"\r\n\r\n                  aria-label=\"textarea\"\r\n                ></textarea>\r\n              </ibm-label>\r\n              <div *ngIf=\"submitted && f.Business_Justification.errors\" class=\"invalid-feedback\">\r\n                <div class=\"validation\" *ngIf=\"f.Business_Justification.errors.required\">Business Justification is required</div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <br/><br/>\r\n        <p><span >List of Demographic Questions to be opted<br/></span></p>\r\n\r\n        <div style=\" padding-left: 10px; border-left: 1px solid;border-right: 1px solid;border-bottom: 1px solid ; border-top: 1px solid;  color: white;\">\r\n         <br/>\r\n        <div ibmRow>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Salutation\"\r\n\t\t\t\tchecked=\"true\"\r\n        [hideLabel]=\"hideLabel\"\r\n        theme=\"light\"\r\n        #Salutation\r\n\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tSalutation\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"First_Name\"\r\n\t\t\t\tchecked=\"true\"\r\n        [hideLabel]=\"hideLabel\"\r\n        value=\"true\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tFirst Name\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Middle_Name\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t>\r\n\t\t\t\tMiddle Name\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Last_Name\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tLast Name\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Email\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tEmail\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Phone\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tPhone\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Fax\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tFax\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Company\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tCompany\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div ibmRow>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Job_Title\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tJob Title\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Postal_Code\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tPostal Code\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Personal_Title\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tPersonal Title\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Country\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tCountry\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"State_Region\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tState/Region\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Address\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tAddress\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"City\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tCity\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"State\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n\t\t\t\t(change)=\"onChange($event)\">\r\n\t\t\t\tState\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'lg':3,'sm':2}\">\r\n            <ibm-checkbox\r\n            formControlName=\"Company_Address\"\r\n\t\t\t\tchecked=\"true\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n        (change)=\"onChange($event)\"\r\n        value=\"Y\">\r\n\t\t\t\tCompany Address\r\n      </ibm-checkbox>\r\n\r\n          </div>\r\n        </div>\r\n        </div>\r\n        <div style=\"padding-left: 15px;\">\r\n          <br>\r\n        <div ibmRow>\r\n          <ibm-checkbox\r\n\r\n\t\t\t\taria-checked=\"false\"\r\n\t\t\t\t[hideLabel]=\"hideLabel\"\r\n        (change)=\"checkBoxfile($event)\"\r\n\r\n        #check1\r\n\t\t\t>\r\n\t\t\t\tWish to Upload Custom Data\r\n      </ibm-checkbox></div>\r\n      <div id=\"filediv\" *ngIf=\"submitted && check1.checked\" class=\"invalid-feedback\">\r\n        <div class=\"validation\" *ngIf=\"check1.checked && this.fileFlag\">Upload the file</div>\r\n      </div>\r\n      <div style=\"color: #000000;\" *ngIf=\"flag\" id=\"file\" ibmRow>\r\n        <ibm-file-uploader\r\n\r\n        multiple=false\r\n        (filesChange)=\"dd($event)\"\r\n\t\t\t\t\tstyle=\"width: 300px;color: white;\"\r\n          fileUploaderId=\"fileUploader\"\r\n        accept=\".xlsx\"\r\n\t\t\t\t\tdrop=\"true\"\r\n\t\t\t\t\tdropText=\"Drag and Drop files here and upload\"\r\n          (change)=\"fileChange($event)\"\r\n          #fileUploader\r\n\t\t\t\t>\r\n        </ibm-file-uploader>\r\n        <a [href]=\"fileurl\" download=\"Custom_Question_Template\" style=\"color: rgb(68, 97, 226);\"> &nbsp;&nbsp;&nbsp;&nbsp;<ibm-icon-download20 style=\"fill: blue;\"></ibm-icon-download20>&nbsp; Download file</a>\r\n        </div>\r\n        </div>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br/>\r\n        <button type=\"submit\" ibmButton=\"\" [size]=\"size\">\r\n         Submit\r\n\r\n        </button>\r\n          </div>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br/>\r\n        <button type=\"reset\" ibmButton=\"\" [size]=\"size\" (click)=\"resetForm()\">\r\n         Reset\r\n\r\n        </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <ibm-loading *ngIf=\"isLoading\" [isActive]=\"isLoading\" size=\"sm\" [overlay]=\"overlay\">\r\n    </ibm-loading>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mrsaas-new/mrsaas-new.component.scss":
/*!******************************************************!*\
  !*** ./src/app/mrsaas-new/mrsaas-new.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-main {\n  background-color: black;\n  margin-top: -16px;\n  background-color: #171717;\n  color: #e0e0e0;\n  padding: 20px; }\n\n.bx--content {\n  background-color: #282828;\n  color: #e0e0e0; }\n\n.title {\n  font-size: 20px; }\n\n.sub-title {\n  font-size: 14px;\n  line-height: 20px; }\n\n.left-header {\n  height: 120px;\n  width: 290px;\n  color: white; }\n\n.left-side {\n  margin-left: 25px; }\n\na {\n  text-decoration: none; }\n\n.validation {\n  padding-bottom: 5px;\n  font-size: medium;\n  color: red;\n  padding-top: 5px; }\n\n.bx--file__selected-file {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXJzYWFzLW5ldy9DOlxcVXNlcnNcXFZpdmVrU3VicmFtYW5pXFxEb2N1bWVudHNcXEdpdEh1YlxcTVJTLU1hc3Rlci1Ub29sc1xcTVJTLU9uYm9hcmRpbmctVVgvc3JjXFxhcHBcXG1yc2Fhcy1uZXdcXG1yc2Fhcy1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsY0FBYSxFQUNiOztBQUNEO0VBQ0MsMEJBQXlCO0VBQ3pCLGVBQWMsRUFDZDs7QUFDRDtFQUNDLGdCQUFlLEVBQ2Y7O0FBQ0Q7RUFDQyxnQkFBZTtFQUVmLGtCQUFpQixFQUNqQjs7QUFDRDtFQUNDLGNBQWE7RUFDYixhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUVEO0VBQ0Msa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0Msc0JBQXFCLEVBQ3JCOztBQUNEO0VBQ0Msb0JBQW1CO0VBQ2hCLGtCQUFpQjtFQUVwQixXQUFTO0VBQ04saUJBQWdCLEVBQ25COztBQUNEO0VBQ0MsYUFBVyxFQUNYIiwiZmlsZSI6InNyYy9hcHAvbXJzYWFzLW5ldy9tcnNhYXMtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1tYWluIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW4tdG9wOiAtMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJ4LS1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi50aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuLy9cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmxlZnQtaGVhZGVyIHtcclxuXHRoZWlnaHQ6IDEyMHB4O1xyXG5cdHdpZHRoOiAyOTBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udmFsaWRhdGlvbntcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcblx0Ly8gY29sb3I6cmdiKDIzOCwgNzksIDc5KTtcclxuXHRjb2xvcjpyZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5ieC0tZmlsZV9fc2VsZWN0ZWQtZmlsZXtcclxuXHRjb2xvcjpibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mrsaas-new/mrsaas-new.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mrsaas-new/mrsaas-new.component.ts ***!
  \****************************************************/
/*! exports provided: MrsaasNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrsaasNewComponent", function() { return MrsaasNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mrsaas_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrsaas-new.service */ "./src/app/mrsaas-new/mrsaas-new.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var MrsaasNewComponent = /** @class */ (function () {
    function MrsaasNewComponent(mrsaasService, router, sanitizer) {
        this.mrsaasService = mrsaasService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.items = [
            { content: "Internal" },
            { content: "External" },
        ];
        this.fileFlag = true;
        this.flag = false;
        this.submitted = false;
        this.filesToUpload = [];
        this.isLoading = false;
        this.overlay = false;
        this.invalidd = false;
    }
    MrsaasNewComponent.prototype.ngOnInit = function () {
        this.reSize();
        this.form1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Campaign_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Owner_Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Technical_Owner_Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Application_Audience: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Asset_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Campaign_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Marketing_Brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Expire_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Product_Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Business_Justification: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Salutation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            First_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Last_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Company: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            State_Region: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Middle_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Job_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Company_Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            State: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Postal_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Personal_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
            Custom_Question_Xls_File: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
        this.getTemplate();
    };
    MrsaasNewComponent.prototype.onsearchmail = function (event) {
        this.form1.controls['Campaign_Owner_Email'].setValue(event);
    };
    MrsaasNewComponent.prototype.onSelectedMail = function () {
        console.log('l');
        this.invalidd = false;
        this.form1.controls['Campaign_Owner_Email'].setValue(this.form1.controls['Campaign_Owner_Email'].value['content']);
    };
    MrsaasNewComponent.prototype.onsearchmailT = function (event) {
        this.form1.controls['Technical_Owner_Email'].setValue(event);
    };
    MrsaasNewComponent.prototype.onSelectedMailT = function () {
        console.log('l');
        this.invalidd = false;
        this.form1.controls['Technical_Owner_Email'].setValue(this.form1.controls['Technical_Owner_Email'].value['content']);
    };
    Object.defineProperty(MrsaasNewComponent.prototype, "f", {
        get: function () { return this.form1.controls; },
        enumerable: true,
        configurable: true
    });
    // onsubmit(){
    //   var x={};
    //   x=this.form1.value;
    //   x['Expire_Date']=(<HTMLInputElement>document.getElementById('datepicker-0')).value;
    //   console.log(JSON.stringify(x));
    //   this.submitted=true;
    //   console.log(this.f.Campaign_Name.value)
    //   // if (this.form1.invalid) {
    //   //   return;
    //   // }
    //   console.log(this.form1.value);
    // }
    MrsaasNewComponent.prototype.resetForm = function () {
        this.submitted = false;
        this.form1.reset;
        // document.getElementsByClassName("bx--file-container")[0].innerHTML=" ABX"
    };
    MrsaasNewComponent.prototype.checkBox = function () {
    };
    MrsaasNewComponent.prototype.changedropdown = function (e) {
        // this.form1.controls['Campaign_Name'].setValue('Internal')
        // console.log(e)
        // console.log(e.item.content)
        console.log(this.form1.controls['Application_Audience'].value);
        // //this.form1.get('Application_Audience').setValue(e.item.content)
    };
    MrsaasNewComponent.prototype.valueChange = function (e) {
        console.log(e);
        console.log(this.form1.controls['Expire_Date']);
        this.form1.controls['Expire_Date'].reset();
        // this.form1.controls["Asset_Code"].setValue((<HTMLInputElement>document.getElementById('datepicker-0')).value);
    };
    MrsaasNewComponent.prototype.onChange = function (e) {
    };
    MrsaasNewComponent.prototype.dateChange = function (e) {
        this.form1.controls['Expire_Date'].setValue(e);
    };
    MrsaasNewComponent.prototype.fileChange = function (fileInput) {
        var _this = this;
        console.log(fileInput);
        this.filesToUpload = fileInput.target.files;
        console.log(JSON.stringify(this.filesToUpload));
        var files = this.filesToUpload;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            _this.filesBase64 = reader.result.toString();
            console.log(_this.filesBase64);
        };
        this.fileFlag = false;
        console.log(this.form1.controls['Custom_Question_Xls_File'].value);
    };
    MrsaasNewComponent.prototype.dd = function (e) {
        console.log(e);
        if (e.size == 0) {
            this.filesBase64 = null;
            this.fileFlag = true;
        }
    };
    MrsaasNewComponent.prototype.onDropped = function (e) {
        console.log(e);
    };
    MrsaasNewComponent.prototype.checkBoxfile = function (e) {
        // console.log(e.checked);
        this.checkbox = e.checked;
        this.flag = !this.flag;
    };
    MrsaasNewComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('top').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    MrsaasNewComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.form1.value);
        this.submitted = true;
        if (this.form1.invalid || (this.checkbox && this.fileFlag)) {
            return;
        }
        var x = {};
        x = this.form1.value;
        x['Custom_Question_Xls_File'] = this.filesBase64;
        // x['Expire_Date']=(<HTMLInputElement>document.getElementById('datepicker-0')).value;
        //x['Application_Audience']=this.form1.controls['Application_Audience'].value.content;
        for (var key in x) {
            if (x.hasOwnProperty(key)) {
                if (key == 'Asset_Code' && x[key] == false)
                    x[key] = '';
                else if (key == 'Marketing_Brand' && x[key] == false)
                    x[key] = '';
                else if (key == 'Custom_Question_Xls_File' && x[key] == null)
                    x[key] = '';
                else if (x[key] == true) {
                    x[key] = 'Y';
                }
                else if (x[key] == false)
                    x[key] = 'N';
                // var val = x[key];
                //console.log(val);
            }
        }
        console.log(this.filesBase64);
        console.log(x);
        this.isLoading = true;
        this.overlay = true;
        this.mrsaasService.sendForm(x)
            .subscribe(function (data) {
            console.log("success", data);
            if (data.statusCode == 200) {
                _this.isLoading = false;
                _this.overlay = false;
                localStorage.setItem('transactionId', data.transactionId);
                localStorage.setItem('content', "Thanks for the Data");
                _this.router.navigateByUrl('/home-four');
            }
        }, function (error) {
            console.log("errror", error);
            _this.isLoading = false;
            _this.overlay = false;
        });
        // console.log(data)
    };
    MrsaasNewComponent.prototype.searchUsers = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if ((event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 13 || event.keyCode == 16) {
        }
        else {
            this.user = event.target.value;
            if (event.target.value !== null && event.target.value.length > 2) {
                this.mrsaasService.getUsersFromBluepage(event.target.value).then(function (data) {
                    _this.searchedUsers = _this.generateUserData(data);
                    console.log(_this.searchedUsers);
                    //  this.isSearchBoxOpen = false;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.user = '';
                this.searchedUsers = [];
                //this.isSearchBoxOpen = true;
                //this.setUserData.emit('');
            }
        }
    };
    MrsaasNewComponent.prototype.generateUserData = function (obj) {
        var result = [];
        obj['search']['entry'].forEach(function (element, index) {
            var tmp = {};
            element['attribute'].forEach(function (elem) {
                if (elem.name == "mail") {
                    tmp['content'] = elem.value[0];
                    // alert()
                }
                else
                    tmp[elem.name] = elem.value[0];
            });
            result.push(tmp);
        });
        return result;
    };
    MrsaasNewComponent.prototype.getTemplate = function () {
        var _this = this;
        this.mrsaasService.getTemplate().subscribe(function (data) {
            _this.fileurl = _this.sanitizer.bypassSecurityTrustUrl(data['excel']);
        });
    };
    MrsaasNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mrsaas-new',
            template: __webpack_require__(/*! ./mrsaas-new.component.html */ "./src/app/mrsaas-new/mrsaas-new.component.html"),
            styles: [__webpack_require__(/*! ./mrsaas-new.component.scss */ "./src/app/mrsaas-new/mrsaas-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mrsaas_new_service__WEBPACK_IMPORTED_MODULE_3__["MrsaasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], MrsaasNewComponent);
    return MrsaasNewComponent;
}());



/***/ }),

/***/ "./src/app/mrsaas-new/mrsaas-new.service.ts":
/*!**************************************************!*\
  !*** ./src/app/mrsaas-new/mrsaas-new.service.ts ***!
  \**************************************************/
/*! exports provided: MrsaasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MrsaasService", function() { return MrsaasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties */ "./src/app/properties.ts");




var MrsaasService = /** @class */ (function () {
    function MrsaasService(http) {
        this.http = http;
        this.bluepageAPI = "http://bluepages.ibm.com/BpHttpApisv3/slaphapi?ibmperson/";
    }
    MrsaasService.prototype.sendForm = function (data) {
        console.log((data));
        return this.http.post(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/saveTransaction", data);
        //   return this.http.post<any>("http://9.120.240.199:3000/saveTransaction",data)
    };
    MrsaasService.prototype.getTemplate = function () {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/templates/CQ");
    };
    MrsaasService.prototype.getUsersFromBluepage = function (data) {
        return this.http.get(this.bluepageAPI + "(|(mail=*" + data + "*)(cn=*" + data + "	*)).list,40/byJSON?mail&uid&notesemail&jobresponsibilities&cn&givenname")
            .toPromise();
    };
    MrsaasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MrsaasService);
    return MrsaasService;
}());



/***/ }),

/***/ "./src/app/properties.ts":
/*!*******************************!*\
  !*** ./src/app/properties.ts ***!
  \*******************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
// export var path="http://localhost:3001";
// export var path="http://9.199.204.245:3001"
var path = window.location.hostname == 'localhost' ? path = 'http://9.199.204.245:3001' : path = 'https://mrs-onboarding-tool-api.mrs-dev-cluster-7d4bdc08e7ddc90fa89b373d95c240eb-0001.us-south.containers.appdomain.cloud';


/***/ }),

/***/ "./src/app/software-downloads-exist/software-downloads-exist.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/software-downloads-exist/software-downloads-exist.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div style=\"width: 100%;  background-color: #000000\"  id=\"top\">\r\n    <p style=\"color: #ffffff; margin-left: 12px; padding: 6px; margin-top: 45px;\">\r\n      Marketing Registration System\r\n    </p>\r\n  </div>\r\n  <hr />\r\n  <div class=\"sub-main\"  id=\"main1\" (window:resize) = \"reSize()\">\r\n    <form [formGroup]=\"sdformExist\" (ngSubmit)=\"submit()\">\r\n      <div ibmGrid  class=\" bx--grid--condensed\">\r\n        <div ibmRow class=\" bx--grid--condensed\">\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\"class=\"bx--grid--condensed\" style=\"padding-left: 3vh;\">\r\n      <p >Software Downloads request Id <span style=\"color: red;font-size: large;\"> * </span></p>\r\n\r\n      </div>\r\n      <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\" bx--grid--condensed\">\r\n      <input\r\n                id = \"reqID\"\r\n                ibmText\r\n                [invalid]=\"invalid\"\r\n                [disabled]=\"disabled\"\r\n                [theme]=\"theme\"\r\n                [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\"\r\n                formControlName=\"id\"\r\n                (blur)=\"requestData()\"\r\n                />\r\n      </div>\r\n      <div *ngIf=\"requestId && ff.id.errors\" class=\"invalid-feedback\">\r\n        <div class=\"validation\" *ngIf=\"ff.id.required\">Request Id is required</div>\r\n      </div>\r\n      <div class=\"validation\" *ngIf=\"found\">\r\n        <ibm-modal size=\"xs\" id=\"mdl\" (overlaySelected)=\"closeModal()\" style=\"color:black; background: white; text-align: center;\">\r\n          <ibm-modal-header style=\"background: white;\" (closeSelect)=\"closeModal()\" >\r\n            <br>\r\n            <br>\r\n          <svg style=\"padding-top: 30px; color:red; fill:red;\" icon ibmIconWarningFilled32></svg>\r\n          <p style=\"color: #000000; font-weight: bold; font-size: large;\">Data not found</p>\r\n          <br>\r\n          <p style=\"color: #000000; font-weight: bolder;\">Please enter valid Request ID</p>\r\n          <br>\r\n          <button ibmButton (click)='closeModal()'>\r\n            <p style=\"padding-left: 40px;\">OK</p>\r\n          </button>\r\n        </ibm-modal-header>\r\n        </ibm-modal>\r\n        <ibm-placeholder></ibm-placeholder>      \r\n      </div>\r\n      </div>\r\n      <br>\r\n      <div tabindex=\"0\">\r\n        <hr/>\r\n      </div>\r\n      <br>\r\n      \r\n      <div id=\"disableParent\">\r\n        <div id=\"disable\" >\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n            <div ibmRow>\r\n              <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <legend style=\"color: white;\" class=\"bx--label\">SWG Standard Sites Type\r\n                </legend>\r\n                <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Swg_Standard_Site\" value=\"content\">\r\n                  <ibm-dropdown-list [items]=\"swgtypesitem\"></ibm-dropdown-list>\r\n                </ibm-dropdown>\r\n              </div>\r\n\r\n              <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <ibm-label>\r\n                  <span style=\"color: white;\"> Expiry Date </span>\r\n                  <span style=\"color: red;font-size: large;\"> * </span>\r\n                </ibm-label>\r\n                <ibm-date-picker  formControlName=\"Expire_Date\"\r\n                  [invalidText]=\"invalidText\" dateFormat=\"m/d/Y\" (change)=\"dateChange($event.target.value)\">\r\n                </ibm-date-picker>\r\n                <div *ngIf=\"submitted && ff.Expire_Date.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validation\" *ngIf=\"ff.Expire_Date.errors.required\">Expiry date is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br/><br>\r\n            <div ibmRow>\r\n              <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <!-- <ibm-label>\r\n                  <span style=\"color: white;\"> Owner Email</span>\r\n                  <span style=\"color: red;font-size: large;\"> * </span>\r\n                  <input type=\"email\" ibmText [placeholder]=\"placeholder\" autocomplete=\"off\" \r\n                    formControlName=\"Campaign_Owner_Email\" />\r\n                </ibm-label>\r\n                <div *ngIf=\"submitted && ff.Campaign_Owner_Email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validation\" *ngIf=\"ff.Campaign_Owner_Email.errors.required\">Owner Email is\r\n                    required</div>\r\n                  <div class=\"validation\" *ngIf=\"ff.Campaign_Owner_Email.errors.email\">Enter a valid Email Address</div>\r\n                </div> -->\r\n                <legend style=\"color: white;\" class=\"bx--label\">Owner Email\r\n                  <span style=\"color: red;font-size: large;\"> * </span>\r\n                </legend>\r\n                <ibm-combo-box id=\"comboid\" class=\"emailClass\"\r\n            [disabled]=\"disabled\"\r\n            [invalid]=\"invalid\"\r\n            [invalidText]=\"invalidText\"\r\n            [label]=\"label\"\r\n            [helperText]=\"helperText\"\r\n            [items]=\"searchedUsers\"\r\n            (selected)=\"onSelectedMail()\"\r\n           \r\n            [placeholder]=\"comboplace\"\r\n             autocomplete=\"off\" \r\n             formControlName=\"Campaign_Owner_Email\"\r\n            (search)=\"onsearchmail($event)\"\r\n            (keyup)=\"searchUsers($event)\">\r\n            <ibm-dropdown-list></ibm-dropdown-list>\r\n          </ibm-combo-box>\r\n                <div *ngIf=\"submitted && ff.Campaign_Owner_Email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validation\" *ngIf=\"ff.Campaign_Owner_Email.errors.required\">Owner Email is\r\n                    required</div>\r\n                  <div class=\"validation\" *ngIf=\"ff.Campaign_Owner_Email.errors.email\">Enter a valid Email Address</div>\r\n                </div>\r\n\r\n\r\n\r\n              </div>\r\n\r\n              <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <ibm-label>\r\n                  <span style=\"color: white;\"> Bluegroup</span>\r\n                  <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n                  autocomplete=\"off\"  formControlName=\"Blue_Group_Name\" />\r\n                </ibm-label>\r\n              </div>\r\n            </div><br>\r\n          </div>\r\n          \r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Title of Campaign </span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <textarea style=\"padding-top: 3vh;\" rows=\"5\" cols=\"30\" formControlName=\"Campaign_Title\" ibmTextArea placeholder=\"Enter Your text\"\r\n                [invalid]=\"invalid\" [theme]=\"theme\" [rows]=\"rows\" [cols]=\"cols\" aria-label=\"textarea\"></textarea>\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.Campaign_Title.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Campaign_Title.errors.required\">Campaign Title is required</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Sub-title of Campaign </span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <textarea style=\"padding-top: 3vh;\" rows=\"5\" cols=\"30\" formControlName=\"Campaign_Sub_Title\" ibmTextArea placeholder=\"Enter Your text\"\r\n                [invalid]=\"invalid\" [theme]=\"theme\" [rows]=\"rows\" [cols]=\"cols\" aria-label=\"textarea\"></textarea>\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.Campaign_Sub_Title.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Campaign_Sub_Title.errors.required\">Sub-title is required</div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n        <br/>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Offering Country\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n            <ibm-dropdown [skeleton]=\"countrySkeleton\" id=\"list1\" placeholder=\"Select\" formControlName=\"Offering_Country\" value=\"value\">\r\n              <ibm-dropdown-list [items]=\"country\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n            <div *ngIf=\"submitted && ff.Offering_Country.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Offering_Country.errors.required\">Offering Country is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Brand Name\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Brand_Name\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"brandnameitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Functional Use\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Functional_Use\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"functionaluseitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Offering Type\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Offering_Type\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"offeringtypeitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n        </div><br/><br>\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Enter Division</span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\"  formControlName=\"Division\" />\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.Division.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Division.errors.required\">Division code is required</div>\r\n              \r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <!-- <ibm-label>\r\n              <span style=\"color: white;\"> Campaign License</span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\"  formControlName=\"License\" />\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.License.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.License.errors.required\">Campaign license is required</div>\r\n              \r\n            </div> -->\r\n\r\n            <legend style=\"color: white;\" class=\"bx--label\">Campaign License\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n            </legend>\r\n            <ibm-combo-box class=\"licenseClass\"\r\n\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t[invalid]=\"invalidd\"\r\n\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t[label]=\"label\"\r\n\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t[items]=\"licenseItems\"\r\n        (selected)=\"onSelected()\"\r\n        formControlName=\"License\"\r\n        value=\"content\"\r\n        placeholder=\"\"\r\n        id=\"lice\"\r\n\t\t\t\t(search)=\"onSearch($event)\">\r\n\t\t\t\t<ibm-dropdown-list></ibm-dropdown-list>\r\n\t\t\t</ibm-combo-box>\r\n            <div *ngIf=\"submitted && ff.License.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.License.errors.required\">Campaign license is required</div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Offer Version Code</span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\"  formControlName=\"OVcode\" />\r\n            </ibm-label>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Campaign Code </span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n                autocomplete=\"off\" formControlName=\"Campaign_Code\" />\r\n            </ibm-label>\r\n          </div>\r\n        </div><br/><br>\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Is this associated with Developer Relations\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n            <ibm-dropdown id=\"list1\" formControlName=\"Associated_Developer_Relation\" placeholder=\"Select\" value=\"value\" size=\"lg\">\r\n              <ibm-dropdown-list [items]=\"developerrelationitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n            \r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Is this associated with Developer Works\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Associated_Developer_Work\" value=\"value\">\r\n              <ibm-dropdown-list [items]=\"developerworksitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n            \r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">SWG Program associated with\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Swg_Program_Associated\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"swgprogramsitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n          \r\n        </div><br/><br>\r\n        <legend>Update the Package Details\r\n          <span style=\"color: red;font-size: large;\"> * </span>\r\n        </legend>\r\n        <div *ngIf=\"submitted && this.fileflag\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"this.fileflag\">Excel file is required\r\n              </div>\r\n            </div>\r\n            <!-- <a *ngIf=\"downloadFlag\" [href]=\"fileurl\" [download]=\"fileName\">Download file</a> -->\r\n        <div ibmRow>\r\n           \r\n            <ibm-file-uploader\r\n            id=\"file\"\r\n            multiple=\"false\"\r\n            (filesChange)=\"dd($event)\"\r\n              style=\"width: 300px;\"\r\n              fileUploaderId=\"fileUploader1\"\r\n            accept=\".xlsx\"\r\n              drop=\"true\"\r\n              dropText=\"drag and drop files here and upload\"\r\n              (change)=\"fileChange($event)\"\r\n              #fileUploader\r\n            >\r\n            </ibm-file-uploader>\r\n            <a [href]=\"fileurl\" [download]=\"fileName\" style=\"color: rgb(68, 97, 226);\"> &nbsp;&nbsp;&nbsp;&nbsp;<ibm-icon-download20 style=\"fill: blue;\"></ibm-icon-download20>&nbsp; Download file</a>\r\n    \r\n            \r\n        </div>\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br />\r\n            <button type=\"submit\" ibmButton=\"\" [size]=\"size\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br />\r\n            <button type=\"reset\" ibmButton=\"\" [size]=\"size\" (click)=\"resetForm()\">\r\n              Reset\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n    </form>\r\n    <ibm-loading *ngIf=\"isLoading\" [isActive]=\"isLoading\" size=\"sm\" [overlay]=\"overlay\">\r\n    </ibm-loading>\r\n  </div>\r\n</div>\r\n<!-- #171717 -->"

/***/ }),

/***/ "./src/app/software-downloads-exist/software-downloads-exist.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/software-downloads-exist/software-downloads-exist.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-main {\n  background-color: black;\n  margin-top: -16px;\n  background-color: #171717;\n  color: #e0e0e0;\n  padding: 20px; }\n\n.bx--content {\n  background-color: #282828;\n  color: #e0e0e0; }\n\n.title {\n  font-size: 20px; }\n\n.sub-title {\n  font-size: 14px;\n  line-height: 20px; }\n\n.left-header {\n  height: 120px;\n  width: 290px;\n  color: white; }\n\n.left-side {\n  margin-left: 25px; }\n\na {\n  text-decoration: none; }\n\n.validation {\n  padding-bottom: 5px;\n  font-size: medium;\n  color: red;\n  padding-top: 5px; }\n\n.bx--file__selected-file {\n  color: black; }\n\n#file {\n  padding-left: 15px; }\n\n#disable {\n  pointer-events: none;\n  opacity: .5; }\n\n#disableParent {\n  cursor: not-allowed; }\n\nsvg {\n  fill: red;\n  color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmUtZG93bmxvYWRzLWV4aXN0L0M6XFxVc2Vyc1xcVml2ZWtTdWJyYW1hbmlcXERvY3VtZW50c1xcR2l0SHViXFxNUlMtTWFzdGVyLVRvb2xzXFxNUlMtT25ib2FyZGluZy1VWC9zcmNcXGFwcFxcc29mdHdhcmUtZG93bmxvYWRzLWV4aXN0XFxzb2Z0d2FyZS1kb3dubG9hZHMtZXhpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsY0FBYSxFQUNiOztBQUNEO0VBQ0MsMEJBQXlCO0VBQ3pCLGVBQWMsRUFDZDs7QUFDRDtFQUNDLGdCQUFlLEVBQ2Y7O0FBQ0Q7RUFDQyxnQkFBZTtFQUVmLGtCQUFpQixFQUNqQjs7QUFDRDtFQUNDLGNBQWE7RUFDYixhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUVEO0VBQ0Msa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0Msc0JBQXFCLEVBQ3JCOztBQUNEO0VBQ0Msb0JBQW1CO0VBQ2hCLGtCQUFpQjtFQUVwQixXQUFTO0VBQ04saUJBQWdCLEVBQ25COztBQUNEO0VBQ0MsYUFBVyxFQUNYOztBQUNEO0VBQ0MsbUJBQWtCLEVBQ2xCOztBQUVEO0VBQ0MscUJBQW9CO0VBQ3BCLFlBQVcsRUFDVDs7QUFFRDtFQUNELG9CQUFtQixFQUNqQjs7QUFFRDtFQUNELFVBQVM7RUFDVCxXQUFVLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9zb2Z0d2FyZS1kb3dubG9hZHMtZXhpc3Qvc29mdHdhcmUtZG93bmxvYWRzLWV4aXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1tYWluIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW4tdG9wOiAtMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJ4LS1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi50aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuLy9cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmxlZnQtaGVhZGVyIHtcclxuXHRoZWlnaHQ6IDEyMHB4O1xyXG5cdHdpZHRoOiAyOTBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udmFsaWRhdGlvbntcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcblx0Ly8gY29sb3I6cmdiKDIzOCwgNzksIDc5KTtcclxuXHRjb2xvcjpyZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5ieC0tZmlsZV9fc2VsZWN0ZWQtZmlsZXtcclxuXHRjb2xvcjpibGFjaztcclxufVxyXG4jZmlsZXtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbiNkaXNhYmxle1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdG9wYWNpdHk6IC41O1xyXG4gIH1cclxuICBcclxuICAjZGlzYWJsZVBhcmVudHtcclxuXHRjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgc3Zne1xyXG5cdGZpbGw6IHJlZDtcclxuXHRjb2xvcjogcmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/software-downloads-exist/software-downloads-exist.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/software-downloads-exist/software-downloads-exist.component.ts ***!
  \********************************************************************************/
/*! exports provided: SoftwareDownloadsExistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareDownloadsExistComponent", function() { return SoftwareDownloadsExistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _software_downloads_exist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./software-downloads-exist.service */ "./src/app/software-downloads-exist/software-downloads-exist.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var SoftwareDownloadsExistComponent = /** @class */ (function () {
    function SoftwareDownloadsExistComponent(sdService, router, sanitizer) {
        this.sdService = sdService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.comboplace = "";
        this.result = [];
        this.licenseItems = [];
        this.swgtypesitem = [
            { content: 'AccessKey controlled download' },
            { content: 'Campaign/Program' },
            { content: 'Call Me' },
            { content: 'Cross-IBM' },
            { content: 'Early Release Site 2' },
            { content: 'Early Release site 3 (closed beta)' },
            { content: 'Early Release site 3 (open beta)' },
            { content: 'Early Release site 4 (hosted trial)' },
            { content: 'Email IBM' },
            { content: 'Open beta (but not early release program)' },
            { content: 'Request-A_Quote' },
            { content: 'Software Evaluations, Trial and Downloads (not betas)' },
            { content: 'Task Specific' }
        ];
        this.brandnameitems = [
            { content: 'Unknown' },
            { content: 'Alpha Works' },
            { content: 'Business Analytics' },
            { content: 'Cross Brand' },
            { content: 'Developer Works' },
            { content: 'Info Mgmt' },
            { content: 'Lotus' },
            { content: 'Not SWG' },
            { content: 'Pervasive Computing' },
            { content: 'PLM' },
            { content: 'Rational' },
            { content: 'S&D Life Sciences' },
            { content: 'Scholars' },
            { content: 'SDF' },
            { content: 'Software for zSeries' },
            { content: 'Tivoli' },
            { content: 'WebSphere' },
            { content: 'Workplace' },
        ];
        this.functionaluseitems = [
            { content: 'Unknown' },
            { content: 'Admin' },
            { content: 'Community' },
            { content: 'Development' },
            { content: 'Marketing' },
            { content: 'Support' }
        ];
        this.offeringtypeitems = [
            { content: 'Unknown' },
            { content: 'Abstract' },
            { content: 'Academic Initiative' },
            { content: 'Alpha code' },
            { content: 'Analyst report' },
            { content: 'Announcement letter' },
            { content: 'Beta code' },
            { content: 'Blog' },
            { content: 'Book' },
            { content: 'Brief' },
            { content: 'Brochure' },
            { content: 'Case study' },
            { content: 'Data sheet' },
            { content: 'Demo' },
            { content: 'Documentation' },
            { content: 'Evaluation guide' },
            { content: 'Executive Brief' },
            { content: 'Info Kit' },
            { content: 'Information center' },
            { content: 'Magazine' },
            { content: 'Multiple' },
            { content: 'Newsletter' },
            { content: 'Other' },
            { content: 'Podcast' },
            { content: 'Presentation' },
            { content: 'Product documentation' },
            { content: 'Redbook' },
            { content: 'Release notes' },
            { content: 'Released product' },
            { content: 'Resource kit' },
            { content: 'Sample' },
            { content: 'Software update' },
            { content: 'Solution sheet' },
            { content: 'Tool code' },
            { content: 'Trial code' },
            { content: 'Tutorial' },
            { content: 'Video' },
            { content: 'Webcast' },
            { content: 'White paper' },
            { content: 'Workshop' }
        ];
        this.developerrelationitems = [
            { value: 'y', content: 'Yes' },
            { value: 'n', content: 'No' }
        ];
        this.developerworksitems = [
            { content: 'Yes', value: 'y' },
            { content: 'No', value: 'n' }
        ];
        this.swgprogramsitems = [
            { content: 'None' },
            { content: 'Automation' },
            { content: 'Bus Driven Dev' },
            { content: 'Business Agility' },
            { content: 'Business Analytics & Opt.' },
            { content: 'C-Suite' },
            { content: 'CSI&S' },
            { content: 'Contact Modules' },
            { content: 'DI -Smart Prods and Srvc Mgmt' },
            { content: 'Dev Tech Adoption' },
            { content: 'Empowering People' },
            { content: 'GBS - Core and Invest' },
            { content: 'GBS Core & Invest' },
            { content: 'Gov and Risk Mgmt' },
            { content: 'Industry' },
            { content: 'Industry Leadership' },
            { content: 'Industry Solutions' },
            { content: 'Infrastructure' },
            { content: 'Innovative Serv Mgt & Secutity' },
            { content: 'Install Base' },
            { content: 'Integration' },
            { content: 'LM Coordinated Audiences' },
            { content: 'LM Targeted Needs - States' },
            { content: 'Leveraging IT Services' },
            { content: 'Leveraging Info' },
            { content: 'Leveraging Middleware Invest' },
            { content: 'Managing Risk' },
            { content: 'Mid Market Velocity' },
            { content: 'Mid-Market' },
            { content: 'MidMarket' },
            { content: 'New Intelligence' },
            { content: 'People Productivity' },
            { content: 'Permanent Presence' },
            { content: 'SDP' },
            { content: 'SOA/Business Flex' },
            { content: 'SWG - LMI' },
            { content: 'SWG - Software Delivery' },
            { content: 'Smarter Commerce' },
            { content: 'Smartwork' },
            { content: 'Social Business' },
            { content: 'Software & Product Innovation' },
            { content: 'Workload Opt. Infrastructure' },
            { content: 'Workload Optimized Systems' },
        ];
        this.country = [];
        this.isLoading = false;
        this.overlay = false;
        this.submitted = false;
        this.filesToUpload = [];
        this.fileflag = true;
        this.countrySkeleton = true;
        this.EscFlag = 1;
        this.found = false;
        this.requestId = false;
        this.downloadFlag = true;
        this.invalidd = false;
    }
    SoftwareDownloadsExistComponent.prototype.handleKeyDown = function (event) {
        if (event.which === 9 && document.activeElement.id !== 'reqID' && this.EscFlag === 1) {
            return false;
        }
        if (event.which === 13 && document.activeElement.id === 'reqID') {
            document.getElementById('reqID').blur();
            this.requestData();
        }
        // if (event.which === 8 && document.activeElement.id === 'lice') {
        //   this.abc=(<HTMLInputElement>document.getElementsByClassName('licenseClass')[0].children[0].children[0].children[0]).value
        //   console.log(this.abc)
        // }  
        if (event.which === 8 && document.activeElement.id === 'reqID') {
            this.resetForm();
        }
        else {
            return true;
        }
    };
    SoftwareDownloadsExistComponent.prototype.getFocus = function () {
        document.getElementById('reqID').focus();
    };
    SoftwareDownloadsExistComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('top').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    SoftwareDownloadsExistComponent.prototype.closeModal = function () {
        this.found = false;
        this.resetForm();
    };
    SoftwareDownloadsExistComponent.prototype.ngOnInit = function () {
        this.reSize();
        this.getFocus();
        this.sdformExist = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Swg_Standard_Site: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Sub_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Owner_Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Blue_Group_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Offering_Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Brand_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Expire_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Functional_Use: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Offering_Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Associated_Developer_Relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Associated_Developer_Work: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Swg_Program_Associated: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Division: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            License: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            OVcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Campaign_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Custom_Question_Xls_File: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.getCountry();
        this.getLicense();
        this.sdformExist.controls['Associated_Developer_Relation'].setValue('y');
        this.sdformExist.controls['Associated_Developer_Work'].setValue('y');
    };
    SoftwareDownloadsExistComponent.prototype.dateChange = function (e) {
        this.sdformExist.controls['Expire_Date'].setValue(e);
    };
    SoftwareDownloadsExistComponent.prototype.getCountry = function () {
        var _this = this;
        this.sdService.getCountry()
            .subscribe(function (data) {
            _this.countrySkeleton = false;
            console.log("success", data);
            _this.country = data;
            // console.log(this.newdata)
        }, function (error) { return console.log("errror", error); });
    };
    SoftwareDownloadsExistComponent.prototype.fileChange = function (fileInput) {
        var _this = this;
        console.log(fileInput);
        this.filesToUpload = fileInput.target.files;
        console.log(JSON.stringify(this.filesToUpload));
        var files = this.filesToUpload;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            _this.filesBase64 = reader.result.toString();
            console.log(_this.filesBase64);
        };
        this.fileflag = false;
        console.log(this.sdformExist.controls['Custom_Question_Xls_File'].value);
    };
    SoftwareDownloadsExistComponent.prototype.dd = function (e) {
        console.log(e);
        console.log(e.size);
        if (e.size == 0) {
            this.filesBase64 = null;
            this.fileflag = true;
        }
    };
    SoftwareDownloadsExistComponent.prototype.onsearchmail = function (event) {
        this.sdformExist.controls['Campaign_Owner_Email'].setValue(event);
        // this.sdformExist.controls['Campaign_Owner_Email'].setValue(this.newdata['CAMPAIGN_OWNER_EMAIL']);
    };
    SoftwareDownloadsExistComponent.prototype.onSelectedMail = function () {
        console.log('l');
        this.invalidd = false;
        this.sdformExist.controls['Campaign_Owner_Email'].setValue(this.sdformExist.controls['Campaign_Owner_Email'].value['content']);
    };
    SoftwareDownloadsExistComponent.prototype.onSelected = function () {
        this.invalidd = false;
        this.sdformExist.controls['License'].setValue(this.sdformExist.controls['License'].value['content']);
    };
    SoftwareDownloadsExistComponent.prototype.getLicense = function () {
        var _this = this;
        this.sdService.getLicense()
            .subscribe(function (data) {
            //this.countrySkeleton=false;
            console.log("success", data);
            _this.licenseItems = data;
            // console.log(this.newdata)
        }, function (error) { return console.log("errror", error); });
    };
    SoftwareDownloadsExistComponent.prototype.onSearch = function (event) {
        if (!this.licenseItems.filter(function (item) { return item.content.toLowerCase().includes(event.toLowerCase()); }).length) {
            this.invalidd = true;
            this.sdformExist.controls['License'] = "";
        }
        else {
            this.invalidd = false;
        }
    };
    Object.defineProperty(SoftwareDownloadsExistComponent.prototype, "ff", {
        get: function () { return this.sdformExist.controls; },
        enumerable: true,
        configurable: true
    });
    SoftwareDownloadsExistComponent.prototype.resetForm = function () {
        this.submitted = false;
        this.sdformExist.reset;
        this.sdformExist.reset("");
        console.log("form values");
        console.log(this.sdformExist.value);
        document.getElementById("disable").style.pointerEvents = "none";
        document.getElementById("disable").style.opacity = ".5";
        document.getElementById("disableParent").style.cursor = "not-allowed";
    };
    SoftwareDownloadsExistComponent.prototype.requestData = function () {
        var _this = this;
        console.log(this.sdformExist.controls['id'].value);
        var temp = this.sdformExist.controls['id'].value;
        if (temp == '' || temp.trim().length == 0) {
            this.requestId = true;
            return;
        }
        this.sdformExist.reset();
        this.sdformExist.controls['id'].setValue(temp);
        console.log(temp);
        this.isLoading = true;
        this.overlay = true;
        this.sdService.getData(temp)
            .subscribe(function (data) {
            console.log("success", data);
            if (data['status'] == 'not available' || data['sqlcode'] == -420) {
                _this.isLoading = false;
                _this.overlay = false;
                _this.found = true;
                document.getElementById("disable").style.pointerEvents = "none";
                document.getElementById("disable").style.opacity = ".5";
                document.getElementById("disableParent").style.cursor = "not-allowed";
            }
            else {
                _this.isLoading = false;
                _this.overlay = false;
                _this.found = false;
                _this.newdata = (data[0]);
                console.log("newdata is");
                console.log(_this.newdata);
                _this.searchedUsers = [
                    { content: _this.newdata['CAMPAIGN_OWNER_EMAIL'] }
                ];
                _this.formFill();
                _this.sdService.getExcel(temp).subscribe(function (data) {
                    //console.log("excel",data[0]['CUSTOM_QUESTION_XLS_FILE']);
                    if (data[0]['CUSTOM_QUESTION_XLS_FILE'] == '') {
                        _this.downloadFlag = false;
                    }
                    else {
                        _this.downloadFlag = true;
                        _this.fileurl = _this.sanitizer.bypassSecurityTrustUrl(data[0]['CUSTOM_QUESTION_XLS_FILE']);
                        _this.fileName = temp;
                    }
                });
            }
        }, function (error) {
            console.log("errror", error);
            _this.isLoading = false;
            _this.overlay = false;
        });
    };
    SoftwareDownloadsExistComponent.prototype.formFill = function () {
        document.getElementById("disable").style.pointerEvents = "all";
        document.getElementById("disable").style.opacity = "1";
        document.getElementById("disableParent").style.cursor = "default";
        this.EscFlag++;
        console.log(this.newdata);
        this.sdformExist.enable();
        // this.dummyvar=this.newdata['CAMPAIGN_OWNER_EMAIL']
        // this.sdService.getUsersFromBluepage(this.dummyvar).then(data => {
        //   this.searchedUsers=this.generateFirstData(data)
        //   console.log("see")
        //   console.log(this.searchedUsers)
        //   this.sdformExist.controls['Campaign_Owner_Email'].setValue("ABCD")
        // })
        // document.getElementById("combiid").innerText="example"
        //  this.Campaign_Owner_Email
        //  this.tem['content']=this.newdata['CAMPAIGN_OWNER_EMAIL'];
        //  this.result.push(this.tem)
        //  this.searchedUsers=this.result;
        this.sdformExist.controls['Swg_Standard_Site'].setValue(this.newdata['SWG_STANDARD_SITE']);
        this.sdformExist.controls['Campaign_Title'].setValue(this.newdata['CAMPAIGN_TITLE']);
        this.sdformExist.controls['Campaign_Sub_Title'].setValue(this.newdata['CAMPAIGN_SUB_TITLE']);
        this.sdformExist.controls['Campaign_Owner_Email'].setValue(this.newdata['CAMPAIGN_OWNER_EMAIL']);
        this.sdformExist.controls['Blue_Group_Name'].setValue(this.newdata['BLUE_GROUP_NAME']);
        this.sdformExist.controls['Offering_Country'].setValue(this.newdata['OFFERING_COUNTRY']);
        this.sdformExist.controls['Brand_Name'].setValue(this.newdata['BRAND_NAME']);
        this.sdformExist.controls['Expire_Date'].setValue(this.newdata['EXPIRE_DATE']);
        this.sdformExist.controls['Functional_Use'].setValue(this.newdata['FUNCTIONAL_USE']);
        this.sdformExist.controls['Offering_Type'].setValue(this.newdata['OFFERING_TYPE']);
        this.sdformExist.controls['Associated_Developer_Relation'].setValue(this.newdata['ASSOCIATED_DEVELOPER_RELATION']);
        this.sdformExist.controls['Associated_Developer_Work'].setValue(this.newdata['ASSOCIATED_DEVELOPER_WORK']);
        this.sdformExist.controls['Swg_Program_Associated'].setValue(this.newdata['SWG_PROGRAM_ASSOCIATED']);
        this.sdformExist.controls['Division'].setValue(this.newdata['DIVISION']);
        this.sdformExist.controls['License'].setValue(this.newdata['LICENSE']);
        // (<HTMLInputElement>document.getElementById("lice")).value=this.newdata['LICENSE'];
        document.getElementsByClassName("licenseClass")[0].children[0].children[0].children[0].value = this.newdata['LICENSE'];
        document.getElementsByClassName("emailClass")[0].children[0].children[0].children[0].value = this.newdata['CAMPAIGN_OWNER_EMAIL'];
        this.sdformExist.controls['OVcode'].setValue(this.newdata['OVCODE']);
        this.sdformExist.controls['Campaign_Code'].setValue(this.newdata['CAMPAIGN_CODE']);
        console.log("email is");
        console.log(this.sdformExist.value.Campaign_Owner_Email);
        console.log(this.newdata['CAMPAIGN_OWNER_EMAIL']);
        console.log(this.sdformExist.value);
    };
    SoftwareDownloadsExistComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.sdformExist.value);
        var body = {};
        body = this.sdformExist.value;
        body['Custom_Question_Xls_File'] = (this.filesBase64);
        console.log(body);
        if (this.sdformExist.invalid && this.fileflag) {
            return;
        }
        this.isLoading = true;
        this.overlay = true;
        this.sdService.updateForm(body)
            .subscribe(function (data) {
            console.log("success", data);
            if (data.statusCode == 200) {
                _this.isLoading = false;
                _this.overlay = false;
                localStorage.setItem('transactionId', data.transactionId);
                localStorage.setItem('content', "Thanks for the Update");
                _this.router.navigateByUrl('/home-four');
            }
        }, function (error) {
            console.log("errror", error);
            _this.isLoading = false;
            _this.overlay = false;
        });
    };
    SoftwareDownloadsExistComponent.prototype.searchUsers = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if ((event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 13 || event.keyCode == 16) {
        }
        else {
            this.user = event.target.value;
            if (event.target.value !== null && event.target.value.length > 2) {
                this.sdService.getUsersFromBluepage(event.target.value).then(function (data) {
                    _this.searchedUsers = _this.generateUserData(data);
                    console.log("already");
                    console.log(_this.searchedUsers);
                    //  this.isSearchBoxOpen = false;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.user = '';
                this.searchedUsers = "";
                //this.isSearchBoxOpen = true;
                //this.setUserData.emit('');
            }
        }
    };
    SoftwareDownloadsExistComponent.prototype.generateUserData = function (obj) {
        var result = [];
        obj['search']['entry'].forEach(function (element, index) {
            var tmp = {};
            element['attribute'].forEach(function (elem) {
                if (elem.name == "mail") {
                    tmp['content'] = elem.value[0];
                    // alert()
                }
                else
                    tmp[elem.name] = elem.value[0];
            });
            result.push(tmp);
        });
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SoftwareDownloadsExistComponent.prototype, "handleKeyDown", null);
    SoftwareDownloadsExistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-downloads-exist',
            template: __webpack_require__(/*! ./software-downloads-exist.component.html */ "./src/app/software-downloads-exist/software-downloads-exist.component.html"),
            styles: [__webpack_require__(/*! ./software-downloads-exist.component.scss */ "./src/app/software-downloads-exist/software-downloads-exist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_software_downloads_exist_service__WEBPACK_IMPORTED_MODULE_4__["SoftwareDownloadsExistService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], SoftwareDownloadsExistComponent);
    return SoftwareDownloadsExistComponent;
}());



/***/ }),

/***/ "./src/app/software-downloads-exist/software-downloads-exist.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/software-downloads-exist/software-downloads-exist.service.ts ***!
  \******************************************************************************/
/*! exports provided: SoftwareDownloadsExistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareDownloadsExistService", function() { return SoftwareDownloadsExistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties */ "./src/app/properties.ts");




var SoftwareDownloadsExistService = /** @class */ (function () {
    function SoftwareDownloadsExistService(http) {
        this.http = http;
        this.bluepageAPI = "https://bluepages.ibm.com/BpHttpApisv3/slaphapi?ibmperson/";
    }
    SoftwareDownloadsExistService.prototype.getCountry = function () {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getCountry");
        // return this.http.get<any>("http://9.120.240.199:3000/getRowData/"+id)
    };
    SoftwareDownloadsExistService.prototype.getData = function (id) {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getSDtrans/" + id);
    };
    SoftwareDownloadsExistService.prototype.updateForm = function (data) {
        console.log((data));
        return this.http.post(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/updateSDtrans", data);
        //   return this.http.post<any>("http://9.120.240.199:3000/saveTransaction",data)
    };
    SoftwareDownloadsExistService.prototype.getExcel = function (id) {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getExcelDataSD/" + id);
    };
    SoftwareDownloadsExistService.prototype.getUsersFromBluepage = function (data) {
        return this.http.get(this.bluepageAPI + "(|(mail=*" + data + "*)(cn=*" + data + "	*)).list,40/byJSON?mail&uid&notesemail&jobresponsibilities&cn&givenname")
            .toPromise();
    };
    SoftwareDownloadsExistService.prototype.getLicense = function () {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getLicense");
        // return this.http.get<any>("http://9.120.240.199:3000/getRowData/"+id)
    };
    SoftwareDownloadsExistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SoftwareDownloadsExistService);
    return SoftwareDownloadsExistService;
}());

//var x=this.newdata;
// for (var key in x) {
//   if (x.hasOwnProperty(key)) {
//      if(x[key]=='Y' || x[key]=='y'){
//           this.newdata[key]=true;
//       }
//       else if(x[key]=='N' || x[key]=='n')
//       this.newdata[key]=false;
//    // var val = x[key];
//     //console.log(val);
//   }
// }


/***/ }),

/***/ "./src/app/software-downloads-new/software-downloads-new.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/software-downloads-new/software-downloads-new.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <div style=\"width: 100%;  background-color: #000000\" id=\"top\">\r\n    <p style=\"color: #ffffff; margin-left: 12px; padding: 6px; margin-top: 45px;\">\r\n      Marketing Registration System\r\n    </p>\r\n  </div>\r\n  <hr />\r\n  <div class=\"sub-main\" id=\"main1\" (window:resize) = \"reSize()\">\r\n    <form [formGroup]=\"sdform\" (ngSubmit)=\"submit()\">\r\n      <div ibmGrid>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n            <div ibmRow>\r\n              <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <legend style=\"color: white;\" class=\"bx--label\">SWG Standard Sites Type\r\n                </legend>\r\n                <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Swg_Standard_Site\" value=\"content\">\r\n                  <ibm-dropdown-list [items]=\"swgtypesitem\"></ibm-dropdown-list>\r\n                </ibm-dropdown>\r\n              </div>\r\n              <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <ibm-label>\r\n                  <span style=\"color: white;\"> Bluegroup</span>\r\n                  <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n                    autocomplete=\"off\" formControlName=\"Blue_Group_Name\" />\r\n                </ibm-label>\r\n              </div>\r\n              \r\n            </div>\r\n            <br/><br>\r\n            <div ibmRow>\r\n              <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <!-- <ibm-label>\r\n                  <span style=\"color: white;\"> Owner Email</span>\r\n                  <span style=\"color: red;font-size: large;\"> * </span>\r\n                  <input type=\"email\" ibmText [placeholder]=\"placeholder\" autocomplete=\"off\"  (keyup)=\"searchUsers($event)\"\r\n                    formControlName=\"Campaign_Owner_Email\" />\r\n                </ibm-label> -->\r\n                <legend style=\"color: white;\" class=\"bx--label\"> Owner Email\r\n                  <span style=\"color: red;font-size: large;\"> * </span>\r\n                </legend>\r\n                <ibm-combo-box\r\n            [disabled]=\"disabled\"\r\n            [invalid]=\"invalid\"\r\n            [invalidText]=\"invalidText\"\r\n            [label]=\"label\"\r\n            [helperText]=\"helperText\"\r\n            [items]=\"searchedUsers\"\r\n            (selected)=\"onSelectedMail()\"\r\n            formControlName=\"Campaign_Owner_Email\"\r\n            value=\"content\"\r\n            placeholder=\"\"\r\n            (search)=\"onsearchmail($event)\"\r\n            (keyup)=\"searchUsers($event)\">\r\n            <ibm-dropdown-list></ibm-dropdown-list>\r\n          </ibm-combo-box>\r\n                <div *ngIf=\"submitted && ff.Campaign_Owner_Email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validation\" *ngIf=\"ff.Campaign_Owner_Email.errors.required\">Owner Email is\r\n                    required</div>\r\n                  <div class=\"validation\" *ngIf=\"ff.Campaign_Owner_Email.errors.email\">Enter a valid Email Address</div>\r\n                </div>\r\n              </div>\r\n              <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':8}\" class=\"bx--no-gutter-sm \">\r\n                <ibm-label>\r\n                  <span style=\"color: white;\"> Expiry Date </span>\r\n                  <span style=\"color: red;font-size: large;\"> * </span>\r\n                </ibm-label>\r\n                <ibm-date-picker  formControlName=\"Expire_Date\"\r\n                  [invalidText]=\"invalidText\" dateFormat=\"m/d/Y\" (change)=\"dateChange($event.target.value)\">\r\n                </ibm-date-picker>\r\n                <div *ngIf=\"submitted && ff.Expire_Date.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validation\" *ngIf=\"ff.Expire_Date.errors.required\">Expiry date is required</div>\r\n                </div>\r\n              </div>\r\n              \r\n            </div><br>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Title of Campaign </span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <textarea style=\"padding-top: 3vh;\" rows=\"5\" cols=\"30\" formControlName=\"Campaign_Title\" ibmTextArea placeholder=\"Enter Your text\"\r\n                [invalid]=\"invalid\" [theme]=\"theme\" [rows]=\"rows\" [cols]=\"cols\" aria-label=\"textarea\"></textarea>\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.Campaign_Title.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Campaign_Title.errors.required\">Campaign Title is required</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{ 'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Sub-title of Campaign </span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <textarea style=\"padding-top: 3vh;\" rows=\"5\" cols=\"30\" formControlName=\"Campaign_Sub_Title\" ibmTextArea placeholder=\"Enter Your text\"\r\n                [invalid]=\"invalid\" [theme]=\"theme\" [rows]=\"rows\" [cols]=\"cols\" aria-label=\"textarea\"></textarea>\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.Campaign_Sub_Title.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Campaign_Sub_Title.errors.required\">Sub-title is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <br/>\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Offering Country\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n            <ibm-dropdown [skeleton]=\"countrySkeleton\" id=\"list1\" placeholder=\"Select\" formControlName=\"Offering_Country\" value=\"value\">\r\n              <ibm-dropdown-list [items]=\"country\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n            <div *ngIf=\"submitted && ff.Offering_Country.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Offering_Country.errors.required\">Offering Country is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Brand Name\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Brand_Name\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"brandnameitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Functional Use\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Functional_Use\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"functionaluseitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Offering Type\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Offering_Type\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"offeringtypeitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n        </div><br/><br>\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Enter Division</span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\" formControlName=\"Division\" />\r\n            </ibm-label>\r\n            <div *ngIf=\"submitted && ff.Division.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.Division.errors.required\">Division code is required</div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <!-- <ibm-label>\r\n              <span style=\"color: white;\"> Campaign License</span>\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\" formControlName=\"License\" />\r\n            </ibm-label> -->\r\n            <legend style=\"color: white;\" class=\"bx--label\">Campaign License\r\n              <span style=\"color: red;font-size: large;\"> * </span>\r\n            </legend>\r\n            <ibm-combo-box\r\n\t\t\t\t[disabled]=\"disabled\"\r\n\t\t\t\t[invalid]=\"invalidd\"\r\n\t\t\t\t[invalidText]=\"invalidText\"\r\n\t\t\t\t[label]=\"label\"\r\n\t\t\t\t[helperText]=\"helperText\"\r\n\t\t\t\t[items]=\"licenseItems\"\r\n        (selected)=\"onSelected()\"\r\n        formControlName=\"License\"\r\n        value=\"content\"\r\n        placeholder=\"\"\r\n\t\t\t\t(search)=\"onSearch($event)\">\r\n\t\t\t\t<ibm-dropdown-list></ibm-dropdown-list>\r\n\t\t\t</ibm-combo-box>\r\n            <div *ngIf=\"submitted && ff.License.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"ff.License.errors.required\">Campaign license is required</div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Offer Version Code</span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\" formControlName=\"OVcode\" />\r\n            </ibm-label>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <ibm-label>\r\n              <span style=\"color: white;\"> Campaign Code </span>\r\n              <input ibmText [invalid]=\"invalid\" [theme]=\"theme\" [placeholder]=\"placeholder\"\r\n              autocomplete=\"off\" formControlName=\"Campaign_Code\" />\r\n            </ibm-label>\r\n          </div>\r\n        </div><br/><br>\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Is this associated with Developer Relations\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n            <ibm-dropdown id=\"list1\" formControlName=\"Associated_Developer_Relation\" placeholder=\"Select\" value=\"value\" size=\"lg\">\r\n              <ibm-dropdown-list [items]=\"developerrelationitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">Is this associated with Developer Works\r\n              <span style=\"color: red;font-size: large;\"> * </span></legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Associated_Developer_Work\" value=\"value\">\r\n              <ibm-dropdown-list [items]=\"developerworksitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'sm': 4,'lg':4}\" class=\"bx--no-gutter-sm \">\r\n            <legend style=\"color: white;\" class=\"bx--label\">SWG Program associated with\r\n            </legend>\r\n            <ibm-dropdown id=\"list1\" placeholder=\"Select\" formControlName=\"Swg_Program_Associated\" value=\"content\">\r\n              <ibm-dropdown-list [items]=\"swgprogramsitems\"></ibm-dropdown-list>\r\n            </ibm-dropdown>\r\n          </div>\r\n\r\n        </div><br/><br>\r\n        <legend>Upload the Package Details\r\n          <span style=\"color: red;font-size: large;\"> * </span>\r\n        </legend>\r\n        <div *ngIf=\"submitted && this.fileflag\" class=\"invalid-feedback\">\r\n              <div class=\"validation\" *ngIf=\"this.fileflag\">Excel file is required\r\n              </div>\r\n            </div>\r\n        <div ibmRow>\r\n\r\n            <ibm-file-uploader\r\n            id=\"file\"\r\n            multiple=\"false\"\r\n            (filesChange)=\"dd($event)\"\r\n              style=\"width: 300px;\"\r\n              fileUploaderId=\"fileUploader1\"\r\n            accept=\".xlsx\"\r\n              drop=\"true\"\r\n              dropText=\"drag and drop files here and upload\"\r\n              (change)=\"fileChange($event)\"\r\n              #fileUploader\r\n            >\r\n            </ibm-file-uploader>\r\n            <a [href]=\"fileurl\" download=\"Package_List_Template\" style=\"color: rgb(68, 97, 226);\"> &nbsp;&nbsp;&nbsp;&nbsp;<ibm-icon-download20 style=\"fill: blue;\"></ibm-icon-download20>&nbsp; Download file</a>\r\n\r\n        </div>\r\n\r\n        <div ibmRow>\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br />\r\n            <button type=\"submit\" ibmButton=\"\" [size]=\"size\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n\r\n          <div ibmCol [columnNumbers]=\"{'lg':2,'md':2,'sm':2}\" class=\"bx--no-gutter-sm \">\r\n            <br />\r\n            <button type=\"reset\" ibmButton=\"\" [size]=\"size\" (click)=\"resetForm()\">\r\n              Reset\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <ibm-loading *ngIf=\"isLoading\" [isActive]=\"isLoading\" size=\"sm\" [overlay]=\"overlay\">\r\n    </ibm-loading>\r\n  </div>\r\n</div>\r\n<!-- #171717 -->\r\n"

/***/ }),

/***/ "./src/app/software-downloads-new/software-downloads-new.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/software-downloads-new/software-downloads-new.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-main {\n  background-color: black;\n  margin-top: -16px;\n  background-color: #171717;\n  color: #e0e0e0;\n  padding: 20px; }\n\n.bx--content {\n  background-color: #282828;\n  color: #e0e0e0; }\n\n.title {\n  font-size: 20px; }\n\n.sub-title {\n  font-size: 14px;\n  line-height: 20px; }\n\n.left-header {\n  height: 120px;\n  width: 290px;\n  color: white; }\n\n.left-side {\n  margin-left: 25px; }\n\na {\n  text-decoration: none; }\n\n.validation {\n  padding-bottom: 5px;\n  font-size: medium;\n  color: red;\n  padding-top: 5px; }\n\n.bx--file__selected-file {\n  color: black; }\n\n#file {\n  padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmUtZG93bmxvYWRzLW5ldy9DOlxcVXNlcnNcXFZpdmVrU3VicmFtYW5pXFxEb2N1bWVudHNcXEdpdEh1YlxcTVJTLU1hc3Rlci1Ub29sc1xcTVJTLU9uYm9hcmRpbmctVVgvc3JjXFxhcHBcXHNvZnR3YXJlLWRvd25sb2Fkcy1uZXdcXHNvZnR3YXJlLWRvd25sb2Fkcy1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBdUI7RUFDdkIsa0JBQWlCO0VBQ2pCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsY0FBYSxFQUNiOztBQUNEO0VBQ0MsMEJBQXlCO0VBQ3pCLGVBQWMsRUFDZDs7QUFDRDtFQUNDLGdCQUFlLEVBQ2Y7O0FBQ0Q7RUFDQyxnQkFBZTtFQUVmLGtCQUFpQixFQUNqQjs7QUFDRDtFQUNDLGNBQWE7RUFDYixhQUFZO0VBQ1osYUFBWSxFQUNaOztBQUVEO0VBQ0Msa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0Msc0JBQXFCLEVBQ3JCOztBQUNEO0VBQ0Msb0JBQW1CO0VBQ2hCLGtCQUFnQjtFQUVuQixXQUFTO0VBQ04saUJBQWdCLEVBQ25COztBQUNEO0VBQ0MsYUFBVyxFQUNYOztBQUNEO0VBQ0MsbUJBQWtCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc29mdHdhcmUtZG93bmxvYWRzLW5ldy9zb2Z0d2FyZS1kb3dubG9hZHMtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1Yi1tYWluIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRtYXJnaW4tdG9wOiAtMTZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJ4LS1jb250ZW50IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG5cdGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcbi50aXRsZSB7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuLy9cdG1hcmdpbi10b3A6IDEycHg7XHJcblx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmxlZnQtaGVhZGVyIHtcclxuXHRoZWlnaHQ6IDEyMHB4O1xyXG5cdHdpZHRoOiAyOTBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUge1xyXG5cdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcbmEge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4udmFsaWRhdGlvbntcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuXHQvLyBjb2xvcjpyZ2IoMjM4LCA3OSwgNzkpO1xyXG5cdGNvbG9yOnJlZDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmJ4LS1maWxlX19zZWxlY3RlZC1maWxle1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcbiNmaWxle1xyXG5cdHBhZGRpbmctbGVmdDogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/software-downloads-new/software-downloads-new.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/software-downloads-new/software-downloads-new.component.ts ***!
  \****************************************************************************/
/*! exports provided: SoftwareDownloadsNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareDownloadsNewComponent", function() { return SoftwareDownloadsNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _software_downloads_new_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./software-downloads-new.service */ "./src/app/software-downloads-new/software-downloads-new.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var SoftwareDownloadsNewComponent = /** @class */ (function () {
    function SoftwareDownloadsNewComponent(sdService, router, sanitizer) {
        this.sdService = sdService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.swgtypesitem = [
            { content: 'AccessKey controlled download' },
            { content: 'Campaign/Program' },
            { content: 'Call Me' },
            { content: 'Cross-IBM' },
            { content: 'Early Release Site 2' },
            { content: 'Early Release site 3 (closed beta)' },
            { content: 'Early Release site 3 (open beta)' },
            { content: 'Early Release site 4 (hosted trial)' },
            { content: 'Email IBM' },
            { content: 'Open beta (but not early release program)' },
            { content: 'Request-A_Quote' },
            { content: 'Software Evaluations, Trial and Downloads (not betas)' },
            { content: 'Task Specific' }
        ];
        this.brandnameitems = [
            { content: 'Unknown' },
            { content: 'Alpha Works' },
            { content: 'Business Analytics' },
            { content: 'Cross Brand' },
            { content: 'Developer Works' },
            { content: 'Info Mgmt' },
            { content: 'Lotus' },
            { content: 'Not SWG' },
            { content: 'Pervasive Computing' },
            { content: 'PLM' },
            { content: 'Rational' },
            { content: 'S&D Life Sciences' },
            { content: 'Scholars' },
            { content: 'SDF' },
            { content: 'Software for zSeries' },
            { content: 'Tivoli' },
            { content: 'WebSphere' },
            { content: 'Workplace' },
        ];
        this.functionaluseitems = [
            { content: 'Unknown' },
            { content: 'Admin' },
            { content: 'Community' },
            { content: 'Development' },
            { content: 'Marketing' },
            { content: 'Support' }
        ];
        this.offeringtypeitems = [
            { content: 'Unknown' },
            { content: 'Abstract' },
            { content: 'Academic Initiative' },
            { content: 'Alpha code' },
            { content: 'Analyst report' },
            { content: 'Announcement letter' },
            { content: 'Beta code' },
            { content: 'Blog' },
            { content: 'Book' },
            { content: 'Brief' },
            { content: 'Brochure' },
            { content: 'Case study' },
            { content: 'Data sheet' },
            { content: 'Demo' },
            { content: 'Documentation' },
            { content: 'Evaluation guide' },
            { content: 'Executive Brief' },
            { content: 'Info Kit' },
            { content: 'Information center' },
            { content: 'Magazine' },
            { content: 'Multiple' },
            { content: 'Newsletter' },
            { content: 'Other' },
            { content: 'Podcast' },
            { content: 'Presentation' },
            { content: 'Product documentation' },
            { content: 'Redbook' },
            { content: 'Release notes' },
            { content: 'Released product' },
            { content: 'Resource kit' },
            { content: 'Sample' },
            { content: 'Software update' },
            { content: 'Solution sheet' },
            { content: 'Tool code' },
            { content: 'Trial code' },
            { content: 'Tutorial' },
            { content: 'Video' },
            { content: 'Webcast' },
            { content: 'White paper' },
            { content: 'Workshop' }
        ];
        this.developerrelationitems = [
            { value: 'y', content: 'Yes' },
            { value: 'n', content: 'No' }
        ];
        this.developerworksitems = [
            { content: 'Yes', value: 'y' },
            { content: 'No', value: 'n' }
        ];
        this.swgprogramsitems = [
            { content: 'None' },
            { content: 'Automation' },
            { content: 'Bus Driven Dev' },
            { content: 'Business Agility' },
            { content: 'Business Analytics & Opt.' },
            { content: 'C-Suite' },
            { content: 'CSI&S' },
            { content: 'Contact Modules' },
            { content: 'DI -Smart Prods and Srvc Mgmt' },
            { content: 'Dev Tech Adoption' },
            { content: 'Empowering People' },
            { content: 'GBS - Core and Invest' },
            { content: 'GBS Core & Invest' },
            { content: 'Gov and Risk Mgmt' },
            { content: 'Industry' },
            { content: 'Industry Leadership' },
            { content: 'Industry Solutions' },
            { content: 'Infrastructure' },
            { content: 'Innovative Serv Mgt & Secutity' },
            { content: 'Install Base' },
            { content: 'Integration' },
            { content: 'LM Coordinated Audiences' },
            { content: 'LM Targeted Needs - States' },
            { content: 'Leveraging IT Services' },
            { content: 'Leveraging Info' },
            { content: 'Leveraging Middleware Invest' },
            { content: 'Managing Risk' },
            { content: 'Mid Market Velocity' },
            { content: 'Mid-Market' },
            { content: 'MidMarket' },
            { content: 'New Intelligence' },
            { content: 'People Productivity' },
            { content: 'Permanent Presence' },
            { content: 'SDP' },
            { content: 'SOA/Business Flex' },
            { content: 'SWG - LMI' },
            { content: 'SWG - Software Delivery' },
            { content: 'Smarter Commerce' },
            { content: 'Smartwork' },
            { content: 'Social Business' },
            { content: 'Software & Product Innovation' },
            { content: 'Workload Opt. Infrastructure' },
            { content: 'Workload Optimized Systems' },
        ];
        this.licenseItems = [];
        this.country = [];
        this.isLoading = false;
        this.overlay = false;
        this.submitted = false;
        this.filesToUpload = [];
        this.fileflag = true;
        this.countrySkeleton = true;
        this.invalidd = false;
    }
    SoftwareDownloadsNewComponent.prototype.ngOnInit = function () {
        this.sdform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Swg_Standard_Site: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Campaign_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Sub_Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Campaign_Owner_Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Blue_Group_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Offering_Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Brand_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Expire_Date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Functional_Use: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Offering_Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Associated_Developer_Relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Associated_Developer_Work: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Swg_Program_Associated: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Division: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            License: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            OVcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Campaign_Code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Custom_Question_Xls_File: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.getCountry();
        this.getLicense();
        this.sdform.controls['Associated_Developer_Relation'].setValue('y');
        this.sdform.controls['Associated_Developer_Work'].setValue('y');
        this.getTemplate();
    };
    SoftwareDownloadsNewComponent.prototype.reSize = function () {
        this.h = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('top').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.h) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    SoftwareDownloadsNewComponent.prototype.dateChange = function (e) {
        this.sdform.controls['Expire_Date'].setValue(e);
    };
    SoftwareDownloadsNewComponent.prototype.getCountry = function () {
        var _this = this;
        this.sdService.getCountry()
            .subscribe(function (data) {
            _this.countrySkeleton = false;
            console.log("success", data);
            _this.country = data;
            // console.log(this.newdata)
        }, function (error) { return console.log("errror", error); });
    };
    SoftwareDownloadsNewComponent.prototype.getLicense = function () {
        var _this = this;
        this.sdService.getLicense()
            .subscribe(function (data) {
            //this.countrySkeleton=false;
            console.log("success", data);
            _this.licenseItems = data;
            // console.log(this.newdata)
        }, function (error) { return console.log("errror", error); });
    };
    SoftwareDownloadsNewComponent.prototype.fileChange = function (fileInput) {
        var _this = this;
        console.log(fileInput);
        this.filesToUpload = fileInput.target.files;
        console.log(JSON.stringify(this.filesToUpload));
        var files = this.filesToUpload;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            _this.filesBase64 = reader.result.toString();
            console.log(_this.filesBase64);
        };
        this.fileflag = false;
        console.log(this.sdform.controls['Custom_Question_Xls_File'].value);
    };
    SoftwareDownloadsNewComponent.prototype.dd = function (e) {
        console.log(e);
        console.log(e.size);
        if (e.size == 0) {
            this.filesBase64 = null;
            this.fileflag = true;
        }
    };
    SoftwareDownloadsNewComponent.prototype.onSearch = function (event) {
        if (!this.licenseItems.filter(function (item) { return item.content.toLowerCase().includes(event.toLowerCase()); }).length) {
            this.invalidd = true;
            this.sdform.controls['License'] = "";
        }
        else {
            this.invalidd = false;
        }
    };
    SoftwareDownloadsNewComponent.prototype.onsearchmail = function (event) {
        this.sdform.controls['Campaign_Owner_Email'].setValue(event);
    };
    SoftwareDownloadsNewComponent.prototype.onSelected = function () {
        this.invalidd = false;
        this.sdform.controls['License'].setValue(this.sdform.controls['License'].value['content']);
    };
    SoftwareDownloadsNewComponent.prototype.onSelectedMail = function () {
        console.log('l');
        this.invalidd = false;
        this.sdform.controls['Campaign_Owner_Email'].setValue(this.sdform.controls['Campaign_Owner_Email'].value['content']);
    };
    Object.defineProperty(SoftwareDownloadsNewComponent.prototype, "ff", {
        get: function () { return this.sdform.controls; },
        enumerable: true,
        configurable: true
    });
    SoftwareDownloadsNewComponent.prototype.resetForm = function () {
        this.submitted = false;
        this.sdform.reset;
    };
    SoftwareDownloadsNewComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.sdform.value);
        var body = {};
        body = this.sdform.value;
        body['Custom_Question_Xls_File'] = (this.filesBase64);
        console.log(body);
        if (this.sdform.invalid && this.fileflag) {
            return;
        }
        this.isLoading = true;
        this.overlay = true;
        this.sdService.sendForm(body)
            .subscribe(function (data) {
            console.log("success", data);
            if (data.statusCode == 200) {
                _this.isLoading = false;
                _this.overlay = false;
                localStorage.setItem('transactionId', data.transactionId);
                localStorage.setItem('content', "Thanks for the Data");
                _this.router.navigateByUrl('/home-four');
            }
        }, function (error) {
            console.log("errror", error);
            _this.isLoading = false;
            _this.overlay = false;
        });
    };
    SoftwareDownloadsNewComponent.prototype.searchUsers = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        if ((event.keyCode >= 37 && event.keyCode <= 40) || event.keyCode == 13 || event.keyCode == 16) {
        }
        else {
            this.user = event.target.value;
            if (event.target.value !== null && event.target.value.length > 2) {
                this.sdService.getUsersFromBluepage(event.target.value).then(function (data) {
                    _this.searchedUsers = _this.generateUserData(data);
                    console.log(_this.searchedUsers);
                    //  this.isSearchBoxOpen = false;
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                this.user = '';
                this.searchedUsers = [];
                //this.isSearchBoxOpen = true;
                //this.setUserData.emit('');
            }
        }
    };
    SoftwareDownloadsNewComponent.prototype.generateUserData = function (obj) {
        var result = [];
        obj['search']['entry'].forEach(function (element, index) {
            var tmp = {};
            element['attribute'].forEach(function (elem) {
                if (elem.name == "mail") {
                    tmp['content'] = elem.value[0];
                    // alert()
                }
                else
                    tmp[elem.name] = elem.value[0];
            });
            result.push(tmp);
        });
        return result;
    };
    SoftwareDownloadsNewComponent.prototype.getTemplate = function () {
        var _this = this;
        this.sdService.getTemplate().subscribe(function (data) {
            _this.fileurl = _this.sanitizer.bypassSecurityTrustUrl(data['excel']);
        });
    };
    SoftwareDownloadsNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-downloads-new',
            template: __webpack_require__(/*! ./software-downloads-new.component.html */ "./src/app/software-downloads-new/software-downloads-new.component.html"),
            styles: [__webpack_require__(/*! ./software-downloads-new.component.scss */ "./src/app/software-downloads-new/software-downloads-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_software_downloads_new_service__WEBPACK_IMPORTED_MODULE_4__["SoftwareDownloadsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], SoftwareDownloadsNewComponent);
    return SoftwareDownloadsNewComponent;
}());



/***/ }),

/***/ "./src/app/software-downloads-new/software-downloads-new.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/software-downloads-new/software-downloads-new.service.ts ***!
  \**************************************************************************/
/*! exports provided: SoftwareDownloadsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareDownloadsService", function() { return SoftwareDownloadsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties */ "./src/app/properties.ts");




var SoftwareDownloadsService = /** @class */ (function () {
    function SoftwareDownloadsService(http) {
        this.http = http;
        this.bluepageAPI = "https://bluepages.ibm.com/BpHttpApisv3/slaphapi?ibmperson/";
    }
    SoftwareDownloadsService.prototype.getCountry = function () {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getCountry");
        // return this.http.get<any>("http://9.120.240.199:3000/getRowData/"+id)
    };
    SoftwareDownloadsService.prototype.getLicense = function () {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/getLicense");
        // return this.http.get<any>("http://9.120.240.199:3000/getRowData/"+id)
    };
    SoftwareDownloadsService.prototype.getTemplate = function () {
        return this.http.get(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/templates/SD");
    };
    SoftwareDownloadsService.prototype.sendForm = function (data) {
        console.log((data));
        return this.http.post(_properties__WEBPACK_IMPORTED_MODULE_3__["path"] + "/saveSDtrans", data);
        //   return this.http.post<any>("http://9.120.240.199:3000/saveTransaction",data)
    };
    SoftwareDownloadsService.prototype.getUsersFromBluepage = function (data) {
        return this.http.get(this.bluepageAPI + "(|(mail=*" + data + "*)(cn=*" + data + "	*)).list,40/byJSON?mail&uid&notesemail&jobresponsibilities&cn&givenname")
            .toPromise();
    };
    SoftwareDownloadsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SoftwareDownloadsService);
    return SoftwareDownloadsService;
}());

//var x=this.newdata;
// for (var key in x) {
//   if (x.hasOwnProperty(key)) {
//      if(x[key]=='Y' || x[key]=='y'){
//           this.newdata[key]=true;
//       }
//       else if(x[key]=='N' || x[key]=='n')
//       this.newdata[key]=false;
//    // var val = x[key];
//     //console.log(val);
//   }
// }


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\VivekSubramani\Documents\GitHub\MRS-Master-Tools\MRS-Onboarding-UX\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map