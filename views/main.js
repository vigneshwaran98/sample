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
/* harmony import */ var _email_suppression_email_suppression_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-suppression/email-suppression.component */ "./src/app/email-suppression/email-suppression.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");





var routes = [
    { path: "", redirectTo: "emailsuppression", pathMatch: "full" },
    { path: "emailsuppression", component: _email_suppression_email_suppression_component__WEBPACK_IMPORTED_MODULE_3__["EmailSuppressionComponent"] },
    { path: "thankyou", component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_4__["ThankYouComponent"] }
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

module.exports = "/*\r\n$edited: false;\r\n$brand-01: #3d70b2;\r\n$brand-02: #5596e6;\r\n$brand-03: #41d6c3;\r\n$inverse-01: #ffffff;\r\n$inverse-02: #272d33;\r\n$ui-01: #ffffff;\r\n$ui-02: #f4f7fb;\r\n$ui-03: #dfe3e6;\r\n$ui-04: #8897a2;\r\n$ui-05: #5a6872;\r\n$text-01: #152934;\r\n$text-02: #5a6872;\r\n$text-03: #cdd1d4;\r\n$field-01: #f4f7fb;\r\n$field-02: #ffffff;\r\n$support-01: #e71d32;\r\n$support-02: #5aa700;\r\n$support-03: #efc100;\r\n$support-04: #5aaafa;\r\n$use-layer: true;\r\n$input-border: 1px solid transparent;\r\n$input-label-weight: 700;\r\n$button-font-weight: 700;\r\n$button-font-size: .875rem;\r\n$button-border-radius: 0;\r\n$button-height: 40px;\r\n$button-padding: 0 1rem;\r\n$button-padding-sm: 0 .5rem;\r\n$button-border-width: 2px;\r\n$accordion-flex-direction: row;\r\n$accordion-justify-content: flex-start;\r\n$accordion-arrow-margin: 0 0 0 .25rem;\r\n$accordion-title-margin: 0 0 0 1rem;\r\n$accordion-content-padding: 0 1rem 0 1.75rem;\r\n$card-text-align: center;\r\n$card-flex-align: center;\r\n$checkbox-border-width: 2px;\r\n$snippet-background-color: $field-01;\r\n$content-switcher-border-radius: 8px;\r\n$content-switcher-option-border: 1px solid $brand-01;\r\n$data-table-heading-transform: uppercase;\r\n$data-table-heading-border-bottom: 1px solid $brand-01;\r\n$data-table-row-height: 2rem;\r\n$modal-border-top: $brand-01 4px solid;\r\n$modal-footer-background-color: $ui-03;\r\n$progress-indicator-bar-width: 1px inset transparent;\r\n$progress-indicator-stroke-width: 5;\r\n$progress-indicator-line-offset: .625rem;\r\n$radio-border-width: 2px;\r\n$structured-list-padding: 2rem;\r\n$structured-list-text-transform: uppercase;*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxWaWduZXNod2FyYW5LXFxEb2N1bWVudHNcXGVtYWlsU3VwcHJlc3Npb24vc3JjXFxlbnZpcm9ubWVudHNcXHRoZW1lX2NhcmJvbl9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FvRDZDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuJGVkaXRlZDogZmFsc2U7XHJcbiRicmFuZC0wMTogIzNkNzBiMjtcclxuJGJyYW5kLTAyOiAjNTU5NmU2O1xyXG4kYnJhbmQtMDM6ICM0MWQ2YzM7XHJcbiRpbnZlcnNlLTAxOiAjZmZmZmZmO1xyXG4kaW52ZXJzZS0wMjogIzI3MmQzMztcclxuJHVpLTAxOiAjZmZmZmZmO1xyXG4kdWktMDI6ICNmNGY3ZmI7XHJcbiR1aS0wMzogI2RmZTNlNjtcclxuJHVpLTA0OiAjODg5N2EyO1xyXG4kdWktMDU6ICM1YTY4NzI7XHJcbiR0ZXh0LTAxOiAjMTUyOTM0O1xyXG4kdGV4dC0wMjogIzVhNjg3MjtcclxuJHRleHQtMDM6ICNjZGQxZDQ7XHJcbiRmaWVsZC0wMTogI2Y0ZjdmYjtcclxuJGZpZWxkLTAyOiAjZmZmZmZmO1xyXG4kc3VwcG9ydC0wMTogI2U3MWQzMjtcclxuJHN1cHBvcnQtMDI6ICM1YWE3MDA7XHJcbiRzdXBwb3J0LTAzOiAjZWZjMTAwO1xyXG4kc3VwcG9ydC0wNDogIzVhYWFmYTtcclxuJHVzZS1sYXllcjogdHJ1ZTtcclxuJGlucHV0LWJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtbGFiZWwtd2VpZ2h0OiA3MDA7XHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDcwMDtcclxuJGJ1dHRvbi1mb250LXNpemU6IC44NzVyZW07XHJcbiRidXR0b24tYm9yZGVyLXJhZGl1czogMDtcclxuJGJ1dHRvbi1oZWlnaHQ6IDQwcHg7XHJcbiRidXR0b24tcGFkZGluZzogMCAxcmVtO1xyXG4kYnV0dG9uLXBhZGRpbmctc206IDAgLjVyZW07XHJcbiRidXR0b24tYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRhY2NvcmRpb24tZmxleC1kaXJlY3Rpb246IHJvdztcclxuJGFjY29yZGlvbi1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiRhY2NvcmRpb24tYXJyb3ctbWFyZ2luOiAwIDAgMCAuMjVyZW07XHJcbiRhY2NvcmRpb24tdGl0bGUtbWFyZ2luOiAwIDAgMCAxcmVtO1xyXG4kYWNjb3JkaW9uLWNvbnRlbnQtcGFkZGluZzogMCAxcmVtIDAgMS43NXJlbTtcclxuJGNhcmQtdGV4dC1hbGlnbjogY2VudGVyO1xyXG4kY2FyZC1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiRjaGVja2JveC1ib3JkZXItd2lkdGg6IDJweDtcclxuJHNuaXBwZXQtYmFja2dyb3VuZC1jb2xvcjogJGZpZWxkLTAxO1xyXG4kY29udGVudC1zd2l0Y2hlci1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRjb250ZW50LXN3aXRjaGVyLW9wdGlvbi1ib3JkZXI6IDFweCBzb2xpZCAkYnJhbmQtMDE7XHJcbiRkYXRhLXRhYmxlLWhlYWRpbmctdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiRkYXRhLXRhYmxlLWhlYWRpbmctYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRicmFuZC0wMTtcclxuJGRhdGEtdGFibGUtcm93LWhlaWdodDogMnJlbTtcclxuJG1vZGFsLWJvcmRlci10b3A6ICRicmFuZC0wMSA0cHggc29saWQ7XHJcbiRtb2RhbC1mb290ZXItYmFja2dyb3VuZC1jb2xvcjogJHVpLTAzO1xyXG4kcHJvZ3Jlc3MtaW5kaWNhdG9yLWJhci13aWR0aDogMXB4IGluc2V0IHRyYW5zcGFyZW50O1xyXG4kcHJvZ3Jlc3MtaW5kaWNhdG9yLXN0cm9rZS13aWR0aDogNTtcclxuJHByb2dyZXNzLWluZGljYXRvci1saW5lLW9mZnNldDogLjYyNXJlbTtcclxuJHJhZGlvLWJvcmRlci13aWR0aDogMnB4O1xyXG4kc3RydWN0dXJlZC1saXN0LXBhZGRpbmc6IDJyZW07XHJcbiRzdHJ1Y3R1cmVkLWxpc3QtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsqL1xyXG4kZWRpdGVkOiB0cnVlO1xyXG4kYnJhbmQtMDE6ICMwNDdjYzA7XHJcbiRicmFuZC0wMjogIzE3NWQ4ZDtcclxuJGJyYW5kLTAzOiAjOTVjNGYzO1xyXG4kaW52ZXJzZS0wMTogI2ZmZmZmZjtcclxuJGludmVyc2UtMDI6ICMyNzJkMzM7XHJcbiR1aS0wMTogI2ZmZmZmZjtcclxuJHVpLTAyOiAjZjZmNmY2O1xyXG4kdWktMDM6ICNlY2VjZWM7XHJcbiR1aS0wNDogI2MwYmZjMDtcclxuJHVpLTA1OiAjNTk1ODU5O1xyXG4kdGV4dC0wMTogIzI3MjcyNztcclxuJHRleHQtMDI6ICM1OTU4NTk7XHJcbiR0ZXh0LTAzOiAjNzc3Njc3O1xyXG4kZmllbGQtMDE6ICNmZmZmZmY7XHJcbiRmaWVsZC0wMjogI2ZmZmZmZjtcclxuJHN1cHBvcnQtMDE6ICNlNjIzMjU7XHJcbiRzdXBwb3J0LTAyOiAjMzRiYzZlO1xyXG4kc3VwcG9ydC0wMzogI2ZlZDUwMDtcclxuJHN1cHBvcnQtMDQ6ICM3Nzc2Nzc7XHJcbiR1c2UtbGF5ZXI6IGZhbHNlO1xyXG4kaW5wdXQtYm9yZGVyOiAxcHggc29saWQgJHVpLTA0O1xyXG4kaW5wdXQtbGFiZWwtd2VpZ2h0OiA3MDA7XHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDQwMDtcclxuJGJ1dHRvbi1mb250LXNpemU6IDFyZW07XHJcbiRidXR0b24tYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGJ1dHRvbi1oZWlnaHQ6IDMycHg7XHJcbiRidXR0b24tcGFkZGluZzogMCAycmVtO1xyXG4kYnV0dG9uLXBhZGRpbmctc206IDAgMXJlbTtcclxuJGJ1dHRvbi1ib3JkZXItd2lkdGg6IDFweDtcclxuJGFjY29yZGlvbi1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiRhY2NvcmRpb24tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4kYWNjb3JkaW9uLWFycm93LW1hcmdpbjogMCAuMjVyZW0gMCAwO1xyXG4kYWNjb3JkaW9uLXRpdGxlLW1hcmdpbjogMCAwIDAgMDtcclxuJGFjY29yZGlvbi1jb250ZW50LXBhZGRpbmc6IDAgMS43NXJlbSAwIDA7XHJcbiRjYXJkLXRleHQtYWxpZ246IGNlbnRlcjtcclxuJGNhcmQtZmxleC1hbGlnbjogY2VudGVyO1xyXG4kY2hlY2tib3gtYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiRzbmlwcGV0LWJhY2tncm91bmQtY29sb3I6ICR1aS0wMztcclxuJGNvbnRlbnQtc3dpdGNoZXItYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4kY29udGVudC1zd2l0Y2hlci1vcHRpb24tYm9yZGVyOiBub25lO1xyXG4kZGF0YS10YWJsZS1oZWFkaW5nLXRyYW5zZm9ybTogbm9uZTtcclxuJGRhdGEtdGFibGUtaGVhZGluZy1ib3JkZXItYm90dG9tOiAxcHggc29saWQgJHVpLTA0O1xyXG4kZGF0YS10YWJsZS1yb3ctaGVpZ2h0OiA1cmVtO1xyXG4kbW9kYWwtYm9yZGVyLXRvcDogbm9uZTtcclxuJG1vZGFsLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJHByb2dyZXNzLWluZGljYXRvci1iYXItd2lkdGg6IG5vbmU7XHJcbiRwcm9ncmVzcy1pbmRpY2F0b3Itc3Ryb2tlLXdpZHRoOiAyO1xyXG4kcHJvZ3Jlc3MtaW5kaWNhdG9yLWxpbmUtb2Zmc2V0OiAuN3JlbTtcclxuJHJhZGlvLWJvcmRlci13aWR0aDogMXB4O1xyXG4kc3RydWN0dXJlZC1saXN0LXBhZGRpbmc6IDJyZW07XHJcbiRzdHJ1Y3R1cmVkLWxpc3QtdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiRuYXYtMDE6ICMxYjI4MzQ7XHJcbiRuYXYtMDI6ICMxYzQ5NmQ7Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _carbon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carbon-module */ "./src/app/carbon-module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! carbon-components-angular */ "./node_modules/carbon-components-angular/index.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _email_suppression_email_suppression_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./email-suppression/email-suppression.component */ "./src/app/email-suppression/email-suppression.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _email_suppression_email_suppression_component__WEBPACK_IMPORTED_MODULE_12__["EmailSuppressionComponent"],
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_13__["ThankYouComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_8__["UIShellModule"],
                _carbon_module__WEBPACK_IMPORTED_MODULE_5__["CarbonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

/***/ "./src/app/email-suppression/email-suppression.component.html":
/*!********************************************************************!*\
  !*** ./src/app/email-suppression/email-suppression.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"width: 100%;\">\n\n  <div id=\"top\">\n    <p style=\"color: #FFFFFF; margin-left: 12px;  margin-top: 45px;\">\n    </p>\n  </div>\n\n  <div id=\"main1\" (window:resize)=\"reSize()\">\n    <div ibmGrid>\n      <div ibmRow>\n\n        <div ibmCol [columnNumbers]=\"{'lg':8,'md':0,'sm':0}\"><br>\n          <img class=\"img\" style=\"width: inherit;\" src=\"../../assets/img/unsubscribeme.jpg\" alt=\"\">\n        </div>\n\n        <div style=\"padding-top: 5%;\" ibmCol [columnNumbers]=\"{'lg':8,'md':8,'sm':4}\">\n          <div ibmRow>\n            <div ibmCol [columnNumbers]=\"{'lg':16,'md':8,'sm':4}\">\n              <h3><b>My IBM email preference</b></h3><br><br>\n              <hr>\n            </div>\n          </div>\n          <p>Please enter the email address you want to unsubscribe and select Continue to submit this request.</p>\n          <br>\n          <p>\n            <strong>This does not affect any newsletter subscriptions you are currently receiving or any\n              communications from communities you may have joined.</strong>\n          </p>\n          <div ibmRow>\n            <div ibmCol [columnNumbers]=\"{'lg':16,'md':8,'sm':4}\">\n              <br />Asterisks (*) indicate fields required to complete this transaction.<br />\n              <hr>\n            </div>\n          </div>\n\n          <div ibmRow>\n            <div ibmCol [columnNumbers]=\"{'lg':8,'md':4,'sm':4}\">\n              <p class=\"ibm-rule\"><b>Business Contact Information</b></p>\n              <br><br>\n              <legend>Work e-mail address<span style=\"color: red;\">*</span></legend><br>\n              <input ibmText [invalid]=\"invalid\" [formControl]=\"email\" (focus)=\"removeinvalid()\"\n                (blur)=\"checkEmailStatus()\">\n              <br><br> <br><br>\n              <button ibmButton (click)=\"submitOptout()\">Unsubscribe</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ibm-loading *ngIf=\"isLoading\" [isActive]=\"isLoading\" size=\"sm\" [overlay]=\"overlay\">\n  </ibm-loading>\n</div>"

/***/ }),

/***/ "./src/app/email-suppression/email-suppression.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/email-suppression/email-suppression.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main1 {\n  background-color: #171717; }\n\n.img {\n  min-height: 95%;\n  height: 85vh; }\n\n@media only screen and (max-width: 1024px) and (min-width: 0px) {\n  .img {\n    height: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWwtc3VwcHJlc3Npb24vQzpcXFVzZXJzXFxWaWduZXNod2FyYW5LXFxEb2N1bWVudHNcXGVtYWlsU3VwcHJlc3Npb24vc3JjXFxhcHBcXGVtYWlsLXN1cHByZXNzaW9uXFxlbWFpbC1zdXBwcmVzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUNEO0VBQ0M7SUFDTyxhQUFZLEVBQ2YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtYWlsLXN1cHByZXNzaW9uL2VtYWlsLXN1cHByZXNzaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcclxufVxyXG4uaW1ne1xyXG4gICAgbWluLWhlaWdodDogOTUlO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogMHB4KXtcclxuXHQuaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/email-suppression/email-suppression.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/email-suppression/email-suppression.component.ts ***!
  \******************************************************************/
/*! exports provided: EmailSuppressionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSuppressionComponent", function() { return EmailSuppressionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_suppression_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-suppression.service */ "./src/app/email-suppression/email-suppression.service.ts");





var EmailSuppressionComponent = /** @class */ (function () {
    function EmailSuppressionComponent(emailService, router) {
        this.emailService = emailService;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email);
        this.isLoading = false;
        this.overlay = false;
    }
    EmailSuppressionComponent.prototype.ngOnInit = function () {
        this.reSize();
    };
    // checking the status of the email whether it is opt-in or opt-out or a new one 
    EmailSuppressionComponent.prototype.checkEmailStatus = function () {
        if (this.email.value == '' || this.email.value.trim().length == 0) {
            return;
        }
        console.log(this.email.value);
        this.emailService.checkPreferences(this.email.value)
            .subscribe(function (data) {
            console.log("success", data);
        }, function (error) {
            console.log("errror", error);
        });
    };
    // to unsubscribe the email after clicking the unsubscribe button
    EmailSuppressionComponent.prototype.submitOptout = function () {
        var _this = this;
        this.isLoading = true;
        this.overlay = true;
        if (this.email.value == '' || this.email.value.trim().length == 0 || this.email.invalid) {
            this.invalid = true;
            this.isLoading = false;
            this.overlay = false;
            return;
        }
        this.emailService.submitOptOut(this.email.value)
            .subscribe(function (data) {
            console.log("success", data);
            if (data['status'] == 'Success') {
                _this.isLoading = false;
                _this.overlay = false;
                _this.router.navigateByUrl('/thankyou'); //Navigate to thankyou page 
            }
        }, function (error) {
            console.log("errror", error);
        });
    };
    // to remove the invalid class after prompting the error 
    EmailSuppressionComponent.prototype.removeinvalid = function () {
        this.invalid = false;
    };
    // to make the footer always at the bottom of the screen
    EmailSuppressionComponent.prototype.reSize = function () {
        this.height = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.height) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    EmailSuppressionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-suppression',
            template: __webpack_require__(/*! ./email-suppression.component.html */ "./src/app/email-suppression/email-suppression.component.html"),
            styles: [__webpack_require__(/*! ./email-suppression.component.scss */ "./src/app/email-suppression/email-suppression.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_email_suppression_service__WEBPACK_IMPORTED_MODULE_4__["EmailSuppressionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmailSuppressionComponent);
    return EmailSuppressionComponent;
}());



/***/ }),

/***/ "./src/app/email-suppression/email-suppression.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/email-suppression/email-suppression.service.ts ***!
  \****************************************************************/
/*! exports provided: EmailSuppressionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSuppressionService", function() { return EmailSuppressionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmailSuppressionService = /** @class */ (function () {
    function EmailSuppressionService(http) {
        this.http = http;
    }
    EmailSuppressionService.prototype.checkPreferences = function (email) {
        var country = 'us';
        var lang = 'en-US';
        var sid = '101';
        this.lookupAPI = "https://nc-lookup.mybluemix.net/v1/preferences?country=" + country + "&language=" + lang + "&sid=" + sid + "&emailAddress=" + email;
        return this.http.get(this.lookupAPI);
    };
    EmailSuppressionService.prototype.submitOptOut = function (email) {
        var optoutData = {
            country: 'US',
            language: 'en-US',
            sid: '102',
            emailAddress: email,
            oldEmailStatus: 'DEFAULT',
            NC_CHECK_EMAIL: 'OPT_OUT',
            NC_ID_EMAIL: 0,
        };
        this.optoutAPI = "https://nc-producer.mybluemix.net/v1/preference";
        return this.http.post(this.optoutAPI, optoutData);
    };
    EmailSuppressionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmailSuppressionService);
    return EmailSuppressionService;
}());

// export function checkPreferences(postData) {
//     return new Promise((resolve, reject) => { ?country = us & language=en & sid=101 & emailAddress=bluemix_ui_918291 % 40mailinator.com        axios.get(`https://nc-lookup.mybluemix.net/v1/preferences`, { params: postData }).then(response => { resolve(response.data); }).catch(error => {
//       console.error(error);
//       // eslint-disable-line no-console
//       reject(error);
//     });
//     })
//   }


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

module.exports = ".footer {\n  height: 100%;\n  width: 100%;\n  background-color: black;\n  text-align: center;\n  display: -webkit-box;\n  display: flex; }\n\n.footer a {\n  margin-left: 20px;\n  text-decoration: none;\n  color: whitesmoke;\n  margin-top: 10px;\n  font-weight: 600; }\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .footer {\n    padding: 20px;\n    line-height: 10px;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    text-align: left;\n    display: block; }\n  .footer a {\n    margin-left: 20px;\n    text-decoration: none;\n    color: whitesmoke;\n    margin-top: 10px;\n    font-weight: 600; } }\n\n@media only screen and (max-width: 579px) and (min-width: 0px) {\n  .footer {\n    padding: 20px;\n    line-height: 10px;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    text-align: left;\n    display: block;\n    -webkit-column-count: 2;\n       -moz-column-count: 2;\n            column-count: 2; }\n  .footer a {\n    margin-left: 20px;\n    text-decoration: none;\n    color: whitesmoke;\n    margin-top: 10px;\n    font-weight: 600; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVmlnbmVzaHdhcmFuS1xcRG9jdW1lbnRzXFxlbWFpbFN1cHByZXNzaW9uL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQVk7RUFDWixZQUFXO0VBQ1gsd0JBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixxQkFBYTtFQUFiLGNBQWEsRUFDYjs7QUFFRDtFQUNDLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDaEI7O0FBRUQ7RUFDQztJQUNDLGNBQWE7SUFDYixrQkFBaUI7SUFDakIsYUFBWTtJQUNaLFlBQVc7SUFDWCx3QkFBdUI7SUFDdkIsaUJBQWdCO0lBQ2hCLGVBQWMsRUFDZDtFQUNEO0lBQ0Msa0JBQWlCO0lBQ2pCLHNCQUFxQjtJQUNyQixrQkFBaUI7SUFDakIsaUJBQWdCO0lBQ2hCLGlCQUFnQixFQUNoQixFQUFBOztBQUVGO0VBQ0M7SUFDQyxjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLGFBQVk7SUFDWixZQUFXO0lBQ1gsd0JBQXVCO0lBQ3ZCLGlCQUFnQjtJQUNoQixlQUFjO0lBQ2Qsd0JBQWU7T0FBZixxQkFBZTtZQUFmLGdCQUFlLEVBQ2Y7RUFDRDtJQUNDLGtCQUFpQjtJQUNqQixzQkFBcUI7SUFDckIsa0JBQWlCO0lBQ2pCLGlCQUFnQjtJQUNoQixpQkFBZ0IsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZvb3RlciBhIHtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IHdoaXRlc21va2U7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG5cdC5mb290ZXIge1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcblx0LmZvb3RlciBhIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0Y29sb3I6IHdoaXRlc21va2U7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzlweCkgYW5kIChtaW4td2lkdGg6IDBweCl7XHJcblx0LmZvb3RlciB7XHJcblx0XHRwYWRkaW5nOiAyMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Y29sdW1uLWNvdW50OiAyO1xyXG5cdH1cclxuXHQuZm9vdGVyIGEge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRjb2xvcjogd2hpdGVzbW9rZTtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdH1cclxufVxyXG4iXX0= */"

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

module.exports = "<div class=\"ibm-header\" id=\"head\">\r\n\t<ibm-header name=\"[CIO]\">\r\n\t\t<ibm-header-navigation>\r\n\t\t</ibm-header-navigation>\r\n\t\t<span class=\"head\">Marketing Registration Services</span>\r\n\t\t<ibm-header-global id=\"headerId\">\r\n\t\t\t<ibm-header-action title=\"action\">\r\n\t\t\t\t<svg ibmIconNotification20></svg>\r\n\t\t\t</ibm-header-action>\r\n\t\t\t<ibm-header-action title=\"action\">\r\n\t\t\t\t<svg ibmIconUserAvatar20></svg>\r\n\t\t\t</ibm-header-action>\r\n\t\t\t<ibm-header-action title=\"action\">\r\n\t\t\t\t<svg ibmIconAppSwitcher20></svg>\r\n\t\t\t</ibm-header-action>\r\n\t\t</ibm-header-global>\r\n\t</ibm-header>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  font-size: 14px;\n  font-weight: bold; }\n\n.head a {\n  -webkit-columns: #ffffff;\n     -moz-columns: #ffffff;\n          columns: #ffffff;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVmlnbmVzaHdhcmFuS1xcRG9jdW1lbnRzXFxlbWFpbFN1cHByZXNzaW9uL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2pCOztBQUNEO0VBQ0MseUJBQWdCO0tBQWhCLHNCQUFnQjtVQUFoQixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaGVhZCBhe1xyXG5cdGNvbHVtbnM6ICNmZmZmZmY7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */"

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

/***/ "./src/app/thank-you/thank-you.component.html":
/*!****************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" style=\"width: 100%;\">\n\n  <div id=\"top\">\n    <p style=\"color: #FFFFFF; margin-left: 12px;  margin-top: 45px;\">\n    </p>\n  </div>\n\n  <div id=\"main1\" (window:resize)=\"reSize()\">\n    <div ibmGrid>\n      <div ibmRow>\n\n        <div ibmCol [columnNumbers]=\"{'lg':8,'md':0,'sm':0}\"><br>\n          <img class=\"img\" style=\"width: inherit;\" src=\"../../assets/img/unsubscribeme.jpg\" alt=\"\">\n        </div>\n\n        <div style=\"padding-top: 5%;\" ibmCol [columnNumbers]=\"{'lg':8,'md':8,'sm':4}\">\n          <div ibmRow>\n            <div ibmCol [columnNumbers]=\"{'lg':16,'md':8,'sm':4}\">\n              <h3><b>My IBM email preference</b></h3><br><br>\n              <hr>\n            </div>\n          </div>\n          <br>\n          <h4>\n            <p>Thank You</p>\n            <br>\n            <p>Your request for unsubscribing the emails is being processed</p>\n          </h4>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.scss":
/*!****************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  background-image: url('unsubscribeme.jpg');\n  opacity: 0.2;\n  background-repeat: no-repeat;\n  background-size: inherit; }\n\n#main1 {\n  background-color: #171717; }\n\n.img {\n  min-height: 95%;\n  height: 85vh; }\n\n@media only screen and (max-width: 1024px) and (min-width: 0px) {\n  .img {\n    height: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmsteW91L0M6XFxVc2Vyc1xcVmlnbmVzaHdhcmFuS1xcRG9jdW1lbnRzXFxlbWFpbFN1cHByZXNzaW9uL3NyY1xcYXBwXFx0aGFuay15b3VcXHRoYW5rLXlvdS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUF5RDtFQUN6RCxhQUFZO0VBQ1osNkJBQTRCO0VBQzVCLHlCQUF3QixFQUMzQjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGdCQUFlO0VBQ2YsYUFBWSxFQUNmOztBQUNEO0VBQ0M7SUFDTyxhQUFZLEVBQ2YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL3Vuc3Vic2NyaWJlbWUuanBnKTtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XHJcbn1cclxuI21haW4xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTcxNztcclxufVxyXG4uaW1ne1xyXG4gICAgbWluLWhlaWdodDogOTUlO1xyXG4gICAgaGVpZ2h0OiA4NXZoO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogMHB4KXtcclxuXHQuaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.ts":
/*!**************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.ts ***!
  \**************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent() {
    }
    ThankYouComponent.prototype.ngOnInit = function () {
        this.reSize();
    };
    // to make the footer display at the bottom of the screen always
    ThankYouComponent.prototype.reSize = function () {
        this.height = window.innerHeight - (document.getElementById('footerId').offsetHeight + document.getElementById('headerId').offsetHeight);
        this.screenHeight = (this.height) + 'px';
        document.getElementById('main1').style.minHeight = this.screenHeight;
    };
    ThankYouComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.scss */ "./src/app/thank-you/thank-you.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThankYouComponent);
    return ThankYouComponent;
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

module.exports = __webpack_require__(/*! C:\Users\VigneshwaranK\Documents\emailSuppression\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map