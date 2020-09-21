(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-form/survey-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey-form/survey-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\" [formGroup]=\"duckSurveyForm\">\n\n  <mat-card id=\"title-card\" align=\"center\">Please fill the survey</mat-card>&nbsp;\n  <div *ngIf=\"errorMessage\">\n    <section class=\"alert alert-danger\">{{errorMessage}}</section>\n  </div>\n  <mat-form-field>\n    <input matInput required formControlName=\"foodName\" placeholder=\"What food do you feed the ducks?\">\n    <span *ngIf=\"duckSurveyForm.get('foodName').touched && duckSurveyForm.get('foodName').invalid\"\n      class=\"invalid-feedback\">\n      <span *ngIf=\"duckSurveyForm.get('foodName').errors.required\">\n        This field is required.\n      </span>\n    </span>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput required formControlName=\"location\" placeholder=\"Where do you feed the ducks?\">\n    <span *ngIf=\"duckSurveyForm.get('location').touched && duckSurveyForm.get('location').invalid\"\n      class=\"invalid-feedback\">\n      <span *ngIf=\"duckSurveyForm.get('location').errors.required\">\n        This field is required.\n      </span>\n    </span>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput required formControlName=\"totalNoOfDucks\" placeholder=\"How many ducks do you feed?\">\n    <span *ngIf=\"duckSurveyForm.get('totalNoOfDucks').touched && duckSurveyForm.get('totalNoOfDucks').invalid\"\n      class=\"invalid-feedback\">\n      <span *ngIf=\"duckSurveyForm.get('totalNoOfDucks').errors.required\">\n        This field is required.\n      </span>\n      <span *ngIf=\"duckSurveyForm.get('totalNoOfDucks').errors.pattern\">\n        Please enter in numbers\n      </span>\n    </span>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput required formControlName=\"amountFed\" placeholder=\"Enter the food quantity\">\n    <span *ngIf=\"duckSurveyForm.get('amountFed').touched && duckSurveyForm.get('amountFed').invalid\"\n      class=\"invalid-feedback\">\n      <span *ngIf=\"duckSurveyForm.get('amountFed').errors.required\">\n        This field is required.\n      </span>\n    </span>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput required formControlName=\"feedingTime\" placeholder=\"At what time of the day the ducks are fed?\">\n    <span *ngIf=\"duckSurveyForm.get('feedingTime').touched && duckSurveyForm.get('feedingTime').invalid\"\n      class=\"invalid-feedback\">\n      <span *ngIf=\"duckSurveyForm.get('feedingTime').errors.required\">\n        This field is required.\n      </span>\n    </span>\n  </mat-form-field> &nbsp;\n\n  <button id=\"submit-button\" mat-raised-button [disabled]='!duckSurveyForm?.valid'\n    (click)=\"saveSurveyData()\">Submit</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-report/survey-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey-report/survey-report.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-container\">\n  <mat-card id=\"title-card\" align=\"center\">Survey Report</mat-card>&nbsp;\n  <div class=\"table-responsive\">\n    <table class=\"table mb-0\" *ngIf=\"duckfeed\">\n      <thead>\n        <tr>\n          <th>Food Item</th>\n          <th>Place</th>\n          <th>Number of Ducks</th>\n          <th>Time</th>\n          <th>Amount</th>\n        </tr>\n      </thead>\n      <tbody *ngFor=\"let report of duckfeed\">\n        <tr>\n          <td>{{ report?.foodName }}</td>\n          <td>{{ report?.location }}</td>\n          <td>{{ report?.totalNoOfDucks }}</td>\n          <td>{{ report?. feedingTime}}</td>\n          <td>{{ report?.amountFed }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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
/* harmony import */ var _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey-form/survey-form.component */ "./src/app/survey-form/survey-form.component.ts");
/* harmony import */ var _survey_report_survey_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey-report/survey-report.component */ "./src/app/survey-report/survey-report.component.ts");





var routes = [
    { path: '', component: _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_3__["SurveyFormComponent"] },
    { path: 'report', component: _survey_report_survey_report_component__WEBPACK_IMPORTED_MODULE_4__["SurveyReportComponent"] },
    { path: '**', component: _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_3__["SurveyFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'ducksurvey';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey-form/survey-form.component */ "./src/app/survey-form/survey-form.component.ts");
/* harmony import */ var _survey_report_survey_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./survey-report/survey-report.component */ "./src/app/survey-report/survey-report.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_6__["SurveyFormComponent"],
                _survey_report_survey_report_component__WEBPACK_IMPORTED_MODULE_7__["SurveyReportComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ducksurvey.service.ts":
/*!***************************************!*\
  !*** ./src/app/ducksurvey.service.ts ***!
  \***************************************/
/*! exports provided: DucksurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DucksurveyService", function() { return DucksurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DucksurveyService = /** @class */ (function () {
    function DucksurveyService(http) {
        this.http = http;
        this.surveyUrl = 'http://192.168.99.100:41961/survey/';
    }
    DucksurveyService.prototype.createSurveyData = function (surveyData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.surveyUrl + 'duck', surveyData, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (datapoint) { return console.log("duckreport:", JSON.stringify(datapoint)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DucksurveyService.prototype.getSurveyReport = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.get(this.surveyUrl + 'surveyreport', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (datapoint) { return console.log("Duck Report:", JSON.stringify(datapoint)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DucksurveyService.prototype.handleError = function (err) {
        var errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code
            errorMessage = "Backend returned code " + err.status + ": " + err.body.error;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    DucksurveyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DucksurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DucksurveyService);
    return DucksurveyService;
}());



/***/ }),

/***/ "./src/app/survey-form/survey-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/survey-form/survey-form.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 200px;\n  padding-right: 200px;\n  padding-top: 50px;\n  width: 100%;\n}\n\n#title-card {\n  font-size: large;\n  font-family: Arial;\n  font-weight: bold;\n  background-color: dodgerblue;\n}\n\n#submit-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 14px;\n  font-family: Arial;\n  font-weight: bold;\n  background-color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5LWZvcm0vQzpcXFVzZXJzXFxhcGFyblxcZHVja3N1cnZleVxcY2xpZW50L3NyY1xcYXBwXFxzdXJ2ZXktZm9ybVxcc3VydmV5LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1cnZleS1mb3JtL3N1cnZleS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBUkksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRGdCRTtFQVBJLGdCQVFpQjtFQVBqQixrQkFBQTtFQUNBLGlCQUFBO0VBRUYsNEJBQUE7QUNOSjs7QURhRTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQVpFLGVBYWlCO0VBWmpCLGtCQUFBO0VBQ0EsaUJBQUE7RUFFRiw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5LWZvcm0vc3VydmV5LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1peGluIG1haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIG1haW4tY29udGFpbmVyKClcclxuICB9XHJcblxyXG4gIEBtaXhpbiBtYWluQ29sb3IoJHNpemUpIHtcclxuICAgIGZvbnQ6IHtcclxuICAgICAgc2l6ZTogJHNpemU7XHJcbiAgICAgIGZhbWlseTogQXJpYWw7XHJcbiAgICAgIHdlaWdodDogYm9sZDtcclxuICAgIH0gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIH1cclxuXHJcbiAgI3RpdGxlLWNhcmQge1xyXG4gICAgQGluY2x1ZGUgbWFpbkNvbG9yKGxhcmdlKTtcclxuICB9XHJcbiAgXHJcbiAgI3N1Ym1pdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgQGluY2x1ZGUgbWFpbkNvbG9yKDE0cHgpO1xyXG4gIH1cclxuXHJcblxyXG4iLCIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdGl0bGUtY2FyZCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG59XG5cbiNzdWJtaXQtYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/survey-form/survey-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/survey-form/survey-form.component.ts ***!
  \******************************************************/
/*! exports provided: SurveyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyFormComponent", function() { return SurveyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ducksurvey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ducksurvey.service */ "./src/app/ducksurvey.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var SurveyFormComponent = /** @class */ (function () {
    // get isDirty() : boolean {
    //   return this.surveyForm.dirty ? true : false ;
    // }
    function SurveyFormComponent(duckservice, router, toaster) {
        this.duckservice = duckservice;
        this.router = router;
        this.toaster = toaster;
    }
    SurveyFormComponent.prototype.ngOnInit = function () {
        this.duckSurveyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            foodName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            totalNoOfDucks: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]*$")]),
            amountFed: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            feedingTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
    };
    SurveyFormComponent.prototype.saveSurveyData = function () {
        var _this = this;
        if (this.duckSurveyForm.valid) {
            if (this.duckSurveyForm.dirty) {
                //copying the form values to the local model object
                var surveyData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.duckfeed, this.duckSurveyForm.value);
                this.duckservice.createSurveyData(surveyData).subscribe(function (success) {
                    _this.onSuccess();
                    _this.onSaveComplete();
                }, function (error) {
                    _this.onFailure();
                });
            }
        }
        else {
            this.errorMessage = "Please correct the errors in the form";
        }
    };
    //Toaster message for a successful server response
    SurveyFormComponent.prototype.onSuccess = function () {
        this.toaster.success('Your survey is valuable for us!', 'Thank you!', {
            timeOut: 5500,
            closeButton: true,
            progressBar: true
        });
    };
    //Toaster message for an unsuccessful server response
    SurveyFormComponent.prototype.onFailure = function () {
        this.toaster.error('Please try again Later!', 'Sorry!', {
            timeOut: 5500,
            closeButton: true,
            progressBar: true
        });
    };
    SurveyFormComponent.prototype.onSaveComplete = function () {
        // Reset back to pristine
        this.duckSurveyForm.reset(this.duckSurveyForm.value);
        // Navigate to the report page
        this.router.navigate(['/report']);
    };
    SurveyFormComponent.ctorParameters = function () { return [
        { type: _ducksurvey_service__WEBPACK_IMPORTED_MODULE_2__["DucksurveyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], SurveyFormComponent.prototype, "surveyForm", void 0);
    SurveyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-form',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-form/survey-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey-form.component.scss */ "./src/app/survey-form/survey-form.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ducksurvey_service__WEBPACK_IMPORTED_MODULE_2__["DucksurveyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], SurveyFormComponent);
    return SurveyFormComponent;
}());



/***/ }),

/***/ "./src/app/survey-report/survey-report.component.scss":
/*!************************************************************!*\
  !*** ./src/app/survey-report/survey-report.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 200px;\n  padding-right: 200px;\n  padding-top: 50px;\n  width: 100%;\n}\n\n#title-card {\n  font-size: large;\n  font-family: Arial;\n  font-weight: bold;\n  background-color: dodgerblue;\n}\n\n#submit-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 14px;\n  font-family: Arial;\n  font-weight: bold;\n  background-color: dodgerblue;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 200px;\n  padding-right: 200px;\n  padding-top: 50px;\n  width: 100%;\n}\n\n#title-card {\n  font-size: large;\n  font-family: Arial;\n  font-weight: bold;\n  background-color: dodgerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5LXJlcG9ydC9DOlxcVXNlcnNcXGFwYXJuXFxkdWNrc3VydmV5XFxjbGllbnQvc3JjXFxhcHBcXHN1cnZleS1mb3JtXFxzdXJ2ZXktZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3VydmV5LXJlcG9ydC9zdXJ2ZXktcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdXJ2ZXktcmVwb3J0L0M6XFxVc2Vyc1xcYXBhcm5cXGR1Y2tzdXJ2ZXlcXGNsaWVudC9zcmNcXGFwcFxcc3VydmV5LXJlcG9ydFxcc3VydmV5LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQVJJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURnQkU7RUFQSSxnQkFRaUI7RUFQakIsa0JBQUE7RUFDQSxpQkFBQTtFQUVGLDRCQUFBO0FDTko7O0FEYUU7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFaRSxlQWFpQjtFQVpqQixrQkFBQTtFQUNBLGlCQUFBO0VBRUYsNEJBQUE7QUNFSjs7QUNwQkE7RUZBSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDd0JKOztBQ3pCQztFRlVLLGdCRVRnQjtFRlVoQixrQkFBQTtFQUNBLGlCQUFBO0VBRUYsNEJBQUE7QUNrQkoiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXktcmVwb3J0L3N1cnZleS1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1peGluIG1haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4tY29udGFpbmVyIHtcclxuICAgIEBpbmNsdWRlIG1haW4tY29udGFpbmVyKClcclxuICB9XHJcblxyXG4gIEBtaXhpbiBtYWluQ29sb3IoJHNpemUpIHtcclxuICAgIGZvbnQ6IHtcclxuICAgICAgc2l6ZTogJHNpemU7XHJcbiAgICAgIGZhbWlseTogQXJpYWw7XHJcbiAgICAgIHdlaWdodDogYm9sZDtcclxuICAgIH0gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIH1cclxuXHJcbiAgI3RpdGxlLWNhcmQge1xyXG4gICAgQGluY2x1ZGUgbWFpbkNvbG9yKGxhcmdlKTtcclxuICB9XHJcbiAgXHJcbiAgI3N1Ym1pdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgQGluY2x1ZGUgbWFpbkNvbG9yKDE0cHgpO1xyXG4gIH1cclxuXHJcblxyXG4iLCIubWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jdGl0bGUtY2FyZCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG59XG5cbiNzdWJtaXQtYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogMjAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiN0aXRsZS1jYXJkIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbn0iLCJAaW1wb3J0ICcuLi9zdXJ2ZXktZm9ybS9zdXJ2ZXktZm9ybS5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIEBpbmNsdWRlIG1haW4tY29udGFpbmVyKCk7XHJcbn0gIFxyXG5cclxuICN0aXRsZS1jYXJkIHtcclxuICAgQGluY2x1ZGUgbWFpbkNvbG9yKGxhcmdlKTtcclxuIH0gXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/survey-report/survey-report.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/survey-report/survey-report.component.ts ***!
  \**********************************************************/
/*! exports provided: SurveyReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyReportComponent", function() { return SurveyReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ducksurvey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ducksurvey.service */ "./src/app/ducksurvey.service.ts");



var SurveyReportComponent = /** @class */ (function () {
    function SurveyReportComponent(duckService) {
        this.duckService = duckService;
        this.duckfeed = [];
    }
    SurveyReportComponent.prototype.ngOnInit = function () {
        this.retriveSurveyReport();
    };
    SurveyReportComponent.prototype.retriveSurveyReport = function () {
        var _this = this;
        this.duckService.getSurveyReport().subscribe(function (result) {
            console.log(result);
            _this.duckfeed = result;
        });
    };
    SurveyReportComponent.ctorParameters = function () { return [
        { type: _ducksurvey_service__WEBPACK_IMPORTED_MODULE_2__["DucksurveyService"] }
    ]; };
    SurveyReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-report',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./survey-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/survey-report/survey-report.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./survey-report.component.scss */ "./src/app/survey-report/survey-report.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ducksurvey_service__WEBPACK_IMPORTED_MODULE_2__["DucksurveyService"]])
    ], SurveyReportComponent);
    return SurveyReportComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\aparn\ducksurvey\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map