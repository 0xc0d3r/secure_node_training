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

/***/ "./src/app/activity/activity.component.css":
/*!*************************************************!*\
  !*** ./src/app/activity/activity.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activity/activity.component.html":
/*!**************************************************!*\
  !*** ./src/app/activity/activity.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Activity Feed</h2>\n\n<alert [dismissible]=\"dismissible\" *ngIf=\"errorMessage\" type=\"danger\">{{ errorMessage }}\n</alert>\n\n<div class=\"row\" *ngIf=\"activities?.length == 0\">\n  <div class=\"container\">\n    <div class=\"col-sm-12\">\n      No records found.\n    </div>\n  </div>\n</div>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let activity of activities\">\n    <div class=\"container\">\n      <div class=\"col-sm-12\">\n        <h5>{{ activity.from }} </h5>\n        <p> {{activity.createdAt | date}}</p>\n        <p [innerHTML]=\"activity.trustedNote\"></p>\n      </div>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/activity/activity.component.ts":
/*!************************************************!*\
  !*** ./src/app/activity/activity.component.ts ***!
  \************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity.service */ "./src/app/activity/activity.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(activityService, auth, sanitizer) {
        this.activityService = activityService;
        this.auth = auth;
        this.sanitizer = sanitizer;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.getActivitys();
    };
    ActivityComponent.prototype.getActivitys = function () {
        var _this = this;
        this.activityService.getActivitys()
            .subscribe(function (data) {
            _this.activities = data.map(function (activity) {
                activity.trustedNote = _this.sanitizer.bypassSecurityTrustHtml(activity.note);
                return activity;
            });
        }, function (errorResponse) {
            var message = errorResponse.error.message ? errorResponse.error.message : errorResponse.message;
            _this.errorMessage = message;
        });
    };
    ActivityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! ./activity.component.html */ "./src/app/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/activity/activity.component.css")]
        }),
        __metadata("design:paramtypes", [_activity_service__WEBPACK_IMPORTED_MODULE_2__["ActivityService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/activity/activity.service.ts":
/*!**********************************************!*\
  !*** ./src/app/activity/activity.service.ts ***!
  \**********************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getActivitys = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/activity");
    };
    ActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/add-friend/add-friend.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-friend/add-friend.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-friend/add-friend.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-friend/add-friend.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add New Friend</h2>\n<br>\n<br>\n<div *ngIf=\"errorMessage\">\n  <alert dismissible=\"true\" type=\"danger\">{{ errorMessage }}</alert>\n</div>\n<div *ngIf=\"successMessage\">\n  <alert dismissible=true *ngIf=\"successMessage\" type=\"success\">{{ successMessage }}</alert>\n</div>\n\n<div class=\"col-sm-6 col-sm-offset-3\">\n  <form #addFriendForm=\"ngForm\" (ngSubmit)=\"addFriend(addFriendForm.value)\">\n    <div class=\"form-group\">\n      <h4>{{ companion.firstname}} {{ companion.lastname}} - {{ companion.username}}</h4>\n      <p> {{ companion.city}}, {{ companion.country}} </p>\n      <input type=\"hidden\" class=\"form-control\" name=\"friendUserId\" [(ngModel)]=\"companion._id\">\n\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n    <button type=\"submit\" class=\"btn btn-secondary ml-3\" (click)=\"goBack()\">Back</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-friend/add-friend.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-friend/add-friend.component.ts ***!
  \****************************************************/
/*! exports provided: AddFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendComponent", function() { return AddFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _friend_friend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../friend/friend.service */ "./src/app/friend/friend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFriendComponent = /** @class */ (function () {
    function AddFriendComponent(route, router, location, friendService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.friendService = friendService;
    }
    AddFriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.companion = data.companion;
        });
    };
    AddFriendComponent.prototype.addFriend = function (data) {
        var _this = this;
        this.friendService.addToFriends(data)
            .subscribe(function () { return _this.router.navigate(['companion']); }, function (error) { return _this.errorMessage = error.message; });
    };
    AddFriendComponent.prototype.goBack = function () {
        this.router.navigate(['companion']);
    };
    AddFriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-friend',
            template: __webpack_require__(/*! ./add-friend.component.html */ "./src/app/add-friend/add-friend.component.html"),
            styles: [__webpack_require__(/*! ./add-friend.component.css */ "./src/app/add-friend/add-friend.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _friend_friend_service__WEBPACK_IMPORTED_MODULE_3__["FriendService"]])
    ], AddFriendComponent);
    return AddFriendComponent;
}());



/***/ }),

/***/ "./src/app/add-friend/add-friend.router.resolver.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-friend/add-friend.router.resolver.ts ***!
  \**********************************************************/
/*! exports provided: AddFriendRouterResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendRouterResolver", function() { return AddFriendRouterResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _companion_companion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../companion/companion.service */ "./src/app/companion/companion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFriendRouterResolver = /** @class */ (function () {
    function AddFriendRouterResolver(companionService, router) {
        this.companionService = companionService;
        this.router = router;
    }
    AddFriendRouterResolver.prototype.resolve = function (route, state) {
        return this.companionService.getCompanion(route.params.id);
    };
    AddFriendRouterResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_companion_companion_service__WEBPACK_IMPORTED_MODULE_2__["CompanionService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddFriendRouterResolver);
    return AddFriendRouterResolver;
}());



/***/ }),

/***/ "./src/app/add-wallet/add-wallet.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-wallet/add-wallet.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-wallet/add-wallet.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-wallet/add-wallet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add New Wallet</h2>\n<br>\n<div class=\"col-sm-6 col-sm-offset-3\">\n  <form #addWalletForm=\"ngForm\" (ngSubmit)=\"addWallet(addWalletForm.value)\">\n    <div class=\"form-group\">\n      <label for=\"currency\" class=\"\">Currency</label>\n      <select class=\"form-control\" name=\"currency\" ngModel required>\n        <option *ngFor=\"let currency of currencies\" [value]=\"currency.code\">{{currency.name}} ({{currency.code}})\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"\">Wallet Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Wallet Name\" name=\"name\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"balance\" class=\"\">Balance</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Balance\" name=\"balance\" ngModel required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n    <button type=\"submit\" class=\"btn btn-secondary ml-3\" (click)=\"goBack()\">Back</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-wallet/add-wallet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-wallet/add-wallet.component.ts ***!
  \****************************************************/
/*! exports provided: AddWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWalletComponent", function() { return AddWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wallet_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wallet/wallet.service */ "./src/app/wallet/wallet.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddWalletComponent = /** @class */ (function () {
    function AddWalletComponent(router, location, walletService) {
        this.router = router;
        this.location = location;
        this.walletService = walletService;
    }
    AddWalletComponent.prototype.ngOnInit = function () {
        this.currencies = [
            { code: 'BTC', name: 'Bitcoin' },
            { code: 'BCH', name: 'Bitcoin Cash' },
            { code: 'ETH', name: 'Euthereum' },
            { code: 'LTC', name: 'LiteCoin' }
        ];
    };
    AddWalletComponent.prototype.addWallet = function (data) {
        var _this = this;
        this.walletService.addWallet(data)
            .subscribe(function () { return _this.router.navigate(['wallet']); }, function (error) { return console.log(error); });
    };
    AddWalletComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-wallet',
            template: __webpack_require__(/*! ./add-wallet.component.html */ "./src/app/add-wallet/add-wallet.component.html"),
            styles: [__webpack_require__(/*! ./add-wallet.component.css */ "./src/app/add-wallet/add-wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _wallet_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"]])
    ], AddWalletComponent);
    return AddWalletComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary rounded\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">[...coin]</a>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <ul *ngIf=\"auth.isAuthenticated() && !auth.isAdmin()\" class=\"nav navbar-nav\">\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/activity\">Activity</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/wallet\">Wallets</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/friend\">Friends</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/companion\">Out there</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home\" (click)=\"auth.logout()\">Sign Out</a></li>\n      </ul>\n      <ul *ngIf=\"auth.isAuthenticated() && auth.isAdmin()\" class=\"nav navbar-nav\">\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/fees\">Manage Fees</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/home\" (click)=\"auth.logout()\">Sign Out\n          </a></li>\n      </ul>\n\n    </ul>\n  </div>\n</nav>\n<br /><br />\n<main class=\"container\">\n  <router-outlet></router-outlet>\n</main>"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_DOMAIN, API_HOST, API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DOMAIN", function() { return API_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_HOST", function() { return API_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_DOMAIN = 'localhost:3000';
var API_HOST = "http://" + API_DOMAIN;
var API_URL = API_HOST + "/api/v1";


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/activity/activity.component.ts");
/* harmony import */ var _add_wallet_add_wallet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-wallet/add-wallet.component */ "./src/app/add-wallet/add-wallet.component.ts");
/* harmony import */ var _companion_companion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./companion/companion.component */ "./src/app/companion/companion.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/friend/friend.component.ts");
/* harmony import */ var _fees_fees_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fees/fees.component */ "./src/app/fees/fees.component.ts");
/* harmony import */ var _auth_authguard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/authguard.service */ "./src/app/auth/authguard.service.ts");
/* harmony import */ var _auth_roleguard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/roleguard.service */ "./src/app/auth/roleguard.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _wallet_wallet_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./wallet/wallet.service */ "./src/app/wallet/wallet.service.ts");
/* harmony import */ var _activity_activity_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./activity/activity.service */ "./src/app/activity/activity.service.ts");
/* harmony import */ var _companion_companion_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./companion/companion.service */ "./src/app/companion/companion.service.ts");
/* harmony import */ var _friend_friend_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./friend/friend.service */ "./src/app/friend/friend.service.ts");
/* harmony import */ var _fees_fees_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fees/fees.service */ "./src/app/fees/fees.service.ts");
/* harmony import */ var _payment_payment_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./payment/payment.service */ "./src/app/payment/payment.service.ts");
/* harmony import */ var _fees_fees_router_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fees/fees.router.resolver */ "./src/app/fees/fees.router.resolver.ts");
/* harmony import */ var _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./add-friend/add-friend.component */ "./src/app/add-friend/add-friend.component.ts");
/* harmony import */ var _add_friend_add_friend_router_resolver__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./add-friend/add-friend.router.resolver */ "./src/app/add-friend/add-friend.router.resolver.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _payment_payment_wallets_resolver__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./payment/payment.wallets.resolver */ "./src/app/payment/payment.wallets.resolver.ts");
/* harmony import */ var _payment_payment_friend_resolver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./payment/payment.friend.resolver */ "./src/app/payment/payment.friend.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_12__["WalletComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_13__["ActivityComponent"],
                _add_wallet_add_wallet_component__WEBPACK_IMPORTED_MODULE_14__["AddWalletComponent"],
                _companion_companion_component__WEBPACK_IMPORTED_MODULE_15__["CompanionComponent"],
                _friend_friend_component__WEBPACK_IMPORTED_MODULE_16__["FriendComponent"],
                _fees_fees_component__WEBPACK_IMPORTED_MODULE_17__["FeesComponent"],
                _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_28__["AddFriendComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_30__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["AlertModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: [_app_constants__WEBPACK_IMPORTED_MODULE_8__["API_DOMAIN"]]
                    }
                })
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _auth_authguard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _auth_roleguard_service__WEBPACK_IMPORTED_MODULE_19__["RoleGuard"],
                _wallet_wallet_service__WEBPACK_IMPORTED_MODULE_21__["WalletService"],
                _activity_activity_service__WEBPACK_IMPORTED_MODULE_22__["ActivityService"],
                _companion_companion_service__WEBPACK_IMPORTED_MODULE_23__["CompanionService"],
                _friend_friend_service__WEBPACK_IMPORTED_MODULE_24__["FriendService"],
                _fees_fees_service__WEBPACK_IMPORTED_MODULE_25__["FeesService"],
                _payment_payment_service__WEBPACK_IMPORTED_MODULE_26__["PaymentService"],
                _fees_fees_router_resolver__WEBPACK_IMPORTED_MODULE_27__["FeesRouterResolver"],
                _add_friend_add_friend_router_resolver__WEBPACK_IMPORTED_MODULE_29__["AddFriendRouterResolver"],
                _payment_payment_wallets_resolver__WEBPACK_IMPORTED_MODULE_31__["PaymentWalletsResolver"],
                _payment_payment_friend_resolver__WEBPACK_IMPORTED_MODULE_32__["PaymentFriendResolver"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/wallet/wallet.component.ts");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/activity/activity.component.ts");
/* harmony import */ var _companion_companion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./companion/companion.component */ "./src/app/companion/companion.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/friend/friend.component.ts");
/* harmony import */ var _add_wallet_add_wallet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-wallet/add-wallet.component */ "./src/app/add-wallet/add-wallet.component.ts");
/* harmony import */ var _auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/authguard.service */ "./src/app/auth/authguard.service.ts");
/* harmony import */ var _fees_fees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fees/fees.component */ "./src/app/fees/fees.component.ts");
/* harmony import */ var _fees_fees_router_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fees/fees.router.resolver */ "./src/app/fees/fees.router.resolver.ts");
/* harmony import */ var _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-friend/add-friend.component */ "./src/app/add-friend/add-friend.component.ts");
/* harmony import */ var _add_friend_add_friend_router_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-friend/add-friend.router.resolver */ "./src/app/add-friend/add-friend.router.resolver.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _payment_payment_wallets_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./payment/payment.wallets.resolver */ "./src/app/payment/payment.wallets.resolver.ts");
/* harmony import */ var _payment_payment_friend_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment/payment.friend.resolver */ "./src/app/payment/payment.friend.resolver.ts");















var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'wallet/new', component: _add_wallet_add_wallet_component__WEBPACK_IMPORTED_MODULE_6__["AddWalletComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'wallet', component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_2__["WalletComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'activity', component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_3__["ActivityComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'companion', component: _companion_companion_component__WEBPACK_IMPORTED_MODULE_4__["CompanionComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'friend', component: _friend_friend_component__WEBPACK_IMPORTED_MODULE_5__["FriendComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    {
        path: 'friend/add/:id', component: _add_friend_add_friend_component__WEBPACK_IMPORTED_MODULE_10__["AddFriendComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        resolve: { companion: _add_friend_add_friend_router_resolver__WEBPACK_IMPORTED_MODULE_11__["AddFriendRouterResolver"] }
    },
    {
        path: 'pay/:id', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_12__["PaymentComponent"], canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        resolve: { wallets: _payment_payment_wallets_resolver__WEBPACK_IMPORTED_MODULE_13__["PaymentWalletsResolver"], friend: _payment_payment_friend_resolver__WEBPACK_IMPORTED_MODULE_14__["PaymentFriendResolver"] }
    },
    {
        path: 'fees',
        component: _fees_fees_component__WEBPACK_IMPORTED_MODULE_8__["FeesComponent"],
        canActivate: [_auth_authguard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        resolve: { fees: _fees_fees_router_resolver__WEBPACK_IMPORTED_MODULE_9__["FeesRouterResolver"] }
    }
];


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router, jwtHelper) {
        this.http = http;
        this.router = router;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.login = function (credentials) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_HOST"] + "/access/signin", credentials);
    };
    AuthService.prototype.signup = function (credentials) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_HOST"] + "/access/signup", credentials);
    };
    AuthService.prototype.finishAuthentication = function (token) {
        localStorage.setItem('access_token', token);
        if (this.isAdmin()) {
            this.router.navigate(['fees']);
        }
        else {
            this.router.navigate(['companion']);
        }
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('access_token');
    };
    AuthService.prototype.isAuthenticated = function () {
        return !this.jwtHelper.isTokenExpired();
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('access_token');
    };
    AuthService.prototype.isAdmin = function () {
        return this.jwtHelper.decodeToken(this.getToken()).scope === 'admin';
    };
    AuthService.prototype.getUseRole = function () {
        return this.jwtHelper.decodeToken(this.getToken()).scope;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/authguard.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/authguard.service.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/roleguard.service.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/roleguard.service.ts ***!
  \*******************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function () {
        if (this.auth.isAuthenticated() && this.auth.isAdmin()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
        }
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/companion/companion.component.css":
/*!***************************************************!*\
  !*** ./src/app/companion/companion.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/companion/companion.component.html":
/*!****************************************************!*\
  !*** ./src/app/companion/companion.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>You May Know</h2>\n\n<alert [dismissible]=\"dismissible\" *ngIf=\"errorMessage\" type=\"danger\">{{ errorMessage }}\n</alert>\n<div class=\"row\" *ngIf=\"companions?.length == 0\">\n    <div class=\"container\">\n      <div class=\"col-sm-12\">\n        No records found.\n      </div>\n    </div>\n  </div>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let companion of companions\">\n    <div class=\"container\">\n      <div class=\"col-sm-12\">\n        <h4>{{ companion.firstname}} {{ companion.lastname}} - {{ companion.username}}</h4>\n        <p> {{ companion.city}}, {{ companion.country}} </p>\n      </div>\n    </div>\n\n    <button class=\"btn btn-primary\" *ngIf=\"auth.isAuthenticated()\" routerLink=\"/friend/add/{{companion.id}}\">\n      <i class=\"glyphicon glyphicon-plus\"></i> Add to Friends\n    </button>\n\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/companion/companion.component.ts":
/*!**************************************************!*\
  !*** ./src/app/companion/companion.component.ts ***!
  \**************************************************/
/*! exports provided: CompanionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanionComponent", function() { return CompanionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _companion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companion.service */ "./src/app/companion/companion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanionComponent = /** @class */ (function () {
    function CompanionComponent(companionService, auth) {
        this.companionService = companionService;
        this.auth = auth;
    }
    CompanionComponent.prototype.ngOnInit = function () {
        this.getCompanions();
    };
    CompanionComponent.prototype.getCompanions = function () {
        var _this = this;
        this.companionService.getCompanions()
            .subscribe(function (data) { return _this.companions = data; }, function (errResponse) { return _this.errorMessage = errResponse.error.message || errResponse.message; });
    };
    CompanionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companion',
            template: __webpack_require__(/*! ./companion.component.html */ "./src/app/companion/companion.component.html"),
            styles: [__webpack_require__(/*! ./companion.component.css */ "./src/app/companion/companion.component.css")]
        }),
        __metadata("design:paramtypes", [_companion_service__WEBPACK_IMPORTED_MODULE_2__["CompanionService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CompanionComponent);
    return CompanionComponent;
}());



/***/ }),

/***/ "./src/app/companion/companion.service.ts":
/*!************************************************!*\
  !*** ./src/app/companion/companion.service.ts ***!
  \************************************************/
/*! exports provided: CompanionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanionService", function() { return CompanionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanionService = /** @class */ (function () {
    function CompanionService(http) {
        this.http = http;
    }
    CompanionService.prototype.getCompanions = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/companion");
    };
    CompanionService.prototype.getCompanion = function (id) {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/companion/" + id);
    };
    CompanionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanionService);
    return CompanionService;
}());



/***/ }),

/***/ "./src/app/fees/fees.component.css":
/*!*****************************************!*\
  !*** ./src/app/fees/fees.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/fees/fees.component.html":
/*!******************************************!*\
  !*** ./src/app/fees/fees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Set Transaction Fees (in %)</h2>\n<br>\n<div *ngIf=\"errorMessage\">\n  <alert dismissible=\"true\" type=\"danger\">{{ errorMessage }}</alert>\n</div>\n<div *ngIf=\"successMessage\">\n  <alert dismissible=true *ngIf=\"successMessage\" type=\"success\">{{ successMessage }}</alert>\n</div>\n<div class=\"col-sm-6 col-sm-offset-3\">\n  <form #manageFeesForm=\"ngForm\" (ngSubmit)=\"saveFees(manageFeesForm.value)\">\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"\">BitCoin Transaction</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"%\" name=\"btc_fees\" [(ngModel)]=\"fees.btc_fees\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"\">BitCash Transaction</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"%\" name=\"bch_fees\" [(ngModel)]=\"fees.bch_fees\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"\">Euthereum Transaction</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"%\" name=\"eth_fees\" [(ngModel)]=\"fees.eth_fees\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"\">Litecoin Transaction</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"%\" name=\"ltc_fees\" [(ngModel)]=\"fees.ltc_fees\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/fees/fees.component.ts":
/*!****************************************!*\
  !*** ./src/app/fees/fees.component.ts ***!
  \****************************************/
/*! exports provided: FeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesComponent", function() { return FeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fees.service */ "./src/app/fees/fees.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeesComponent = /** @class */ (function () {
    function FeesComponent(route, router, location, feesService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.feesService = feesService;
    }
    FeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.fees = data.fees;
        });
    };
    FeesComponent.prototype.getFees = function () {
        var _this = this;
        this.feesService.getFees()
            .subscribe(function (data) { return _this.fees = data[0]; }, function (error) {
            _this.errorMessage = error.message;
        });
    };
    FeesComponent.prototype.saveFees = function (data) {
        var _this = this;
        this.feesService.saveFees(data)
            .subscribe(function () { return _this.successMessage = 'Changes saved successfuly!'; }, function (response) {
            _this.errorMessage = response.error.message;
        });
    };
    FeesComponent.prototype.goBack = function () {
        this.location.back();
    };
    FeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fees',
            template: __webpack_require__(/*! ./fees.component.html */ "./src/app/fees/fees.component.html"),
            styles: [__webpack_require__(/*! ./fees.component.css */ "./src/app/fees/fees.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _fees_service__WEBPACK_IMPORTED_MODULE_2__["FeesService"]])
    ], FeesComponent);
    return FeesComponent;
}());



/***/ }),

/***/ "./src/app/fees/fees.router.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/fees/fees.router.resolver.ts ***!
  \**********************************************/
/*! exports provided: FeesRouterResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesRouterResolver", function() { return FeesRouterResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fees_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fees.service */ "./src/app/fees/fees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeesRouterResolver = /** @class */ (function () {
    function FeesRouterResolver(feesService, router) {
        this.feesService = feesService;
        this.router = router;
    }
    FeesRouterResolver.prototype.resolve = function (route, state) {
        return this.feesService.getFees();
    };
    FeesRouterResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_fees_service__WEBPACK_IMPORTED_MODULE_2__["FeesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FeesRouterResolver);
    return FeesRouterResolver;
}());



/***/ }),

/***/ "./src/app/fees/fees.service.ts":
/*!**************************************!*\
  !*** ./src/app/fees/fees.service.ts ***!
  \**************************************/
/*! exports provided: FeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesService", function() { return FeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeesService = /** @class */ (function () {
    function FeesService(http) {
        this.http = http;
    }
    FeesService.prototype.getFees = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/fees");
    };
    FeesService.prototype.saveFees = function (data) {
        return this.http.put(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/fees", data);
    };
    FeesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FeesService);
    return FeesService;
}());



/***/ }),

/***/ "./src/app/friend/friend.component.css":
/*!*********************************************!*\
  !*** ./src/app/friend/friend.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/friend/friend.component.html":
/*!**********************************************!*\
  !*** ./src/app/friend/friend.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Friends</h2>\n\n<alert [dismissible]=\"dismissible\" *ngIf=\"errorMessage\" type=\"danger\">{{ errorMessage }}\n</alert>\n\n<div class=\"row\" *ngIf=\"friends?.length == 0\">\n  <div class=\"container\">\n    <div class=\"col-sm-12\">\n      No records found.\n    </div>\n  </div>\n</div>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let friend of friends\">\n    <div class=\"container\">\n      <div class=\"col-sm-12\">\n        <h4>{{ friend.firstname}} {{ friend.lastname}} - {{ friend.username}}</h4>\n        <p> {{ friend.city}}, {{ friend.country}} </p>\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" *ngIf=\"auth.isAuthenticated()\" routerLink=\"/pay/{{ friend.id }}\">\n      <i class=\"glyphicon glyphicon-plus\"></i> Pay\n    </button>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/friend/friend.component.ts":
/*!********************************************!*\
  !*** ./src/app/friend/friend.component.ts ***!
  \********************************************/
/*! exports provided: FriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendComponent", function() { return FriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./friend.service */ "./src/app/friend/friend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendComponent = /** @class */ (function () {
    function FriendComponent(friendService, auth) {
        this.friendService = friendService;
        this.auth = auth;
    }
    FriendComponent.prototype.ngOnInit = function () {
        this.getFriends();
    };
    FriendComponent.prototype.getFriends = function () {
        var _this = this;
        this.friendService.getFriends()
            .subscribe(function (data) { return _this.friends = data; }, function (error) {
            _this.errorMessage = error.message;
        });
    };
    FriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend',
            template: __webpack_require__(/*! ./friend.component.html */ "./src/app/friend/friend.component.html"),
            styles: [__webpack_require__(/*! ./friend.component.css */ "./src/app/friend/friend.component.css")]
        }),
        __metadata("design:paramtypes", [_friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], FriendComponent);
    return FriendComponent;
}());



/***/ }),

/***/ "./src/app/friend/friend.service.ts":
/*!******************************************!*\
  !*** ./src/app/friend/friend.service.ts ***!
  \******************************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendService = /** @class */ (function () {
    function FriendService(http) {
        this.http = http;
        this.friends$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    FriendService.prototype.getFriendById = function (id) {
        return this.friends$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (friends) { return friends.find(function (friend) { return friend.id === id; }); }));
    };
    FriendService.prototype.getFriends = function () {
        this.friends$ = this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/friend");
        return this.friends$;
    };
    FriendService.prototype.addToFriends = function (data) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/friend/" + data.friendUserId, data);
    };
    FriendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow zindex-100\">\n  <div class=\"card-body px-md-5 py-5\">\n\n    <h1>Welcome to Coin Spread!</h1>\n    <p><a class=\"btn btn-primary btn-lg\" routerLink=\"/login\" *ngIf=\"!auth.isAuthenticated()\" role=\"button\">Log In</a></p>\n    <p><a class=\"btn btn-primary btn-lg\" (click)=\"logout()\" *ngIf=\"auth.isAuthenticated()\" role=\"button\">Log Out</a></p>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-top: 15px;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-8 col-lg-6\">\n\n    <div class=\"card shadow zindex-100\">\n      <div class=\"card-body px-md-5 py-5\">\n        <alert *ngIf=\"errorMessage\" type=\"danger\">{{ errorMessage }}\n        </alert>\n\n        <tabset>\n          <tab heading='Sign In'>\n            <div class=\"text-center mb-5\">\n              <br>\n              <h6 class=\"h3\">Welcome back</h6>\n              <p class=\"text-muted mb-0\">Sign in to your account to continue</p>\n            </div>\n            <span class=\"clearfix\"></span>\n\n            <form #loginForm=\"ngForm\" (ngSubmit)=\"onLoginSubmit(loginForm.value)\">\n              <div class=\"form-group\">\n                <label for=\"user\">Username/Email</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username or email\" name=\"username\"\n                  ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\" class=\"\">Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" name=\"password\" ngModel\n                  required>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\">Sign In</button>\n            </form>\n          </tab>\n          <tab heading=\"Sign Up\">\n            <div class=\"text-center mb-5\">\n              <br>\n              <h6 class=\"h3\">Create your free account</h6>\n              <p class=\"text-muted mb-0\">Experience a new way to share payments</p>\n            </div>\n            <span class=\"clearfix\"></span>\n            <form #signupForm=\"ngForm\" (ngSubmit)=\"onSignupSubmit(signupForm.value)\">\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username\" name=\"username\" ngModel\n                  required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\" class=\"\">Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" name=\"password\" ngModel\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"username\">First Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your First Name\" name=\"firstname\" ngModel\n                  required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastname\">Last Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your Last Name\" name=\"lastname\" ngModel\n                  required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"taxid\">Tax ID</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your Tax ID / SSN\" name=\"tax_id\" ngModel>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"address\">Address</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your address\" name=\"address_line1\" ngModel>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"city\">City</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your city\" name=\"city\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"state\">State</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your state\" name=\"state\" ngModel required>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"country\">Country</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your country\" name=\"country\" ngModel\n                  required>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\">Create Account</button>\n            </form>\n          </tab>\n        </tabset>\n\n      </div>\n    </div>\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.onLoginSubmit = function (credentials) {
        var _this = this;
        this.auth.login(credentials)
            .subscribe(function (response) { return _this.auth.finishAuthentication(response.token); }, function (errorResponse) { return _this.errorMessage = errorResponse.error.message || errorResponse.message; });
    };
    LoginComponent.prototype.onSignupSubmit = function (credentials) {
        var _this = this;
        // credentials.admin = true;
        this.auth.signup(credentials)
            .subscribe(function (response) { return _this.auth.finishAuthentication(response.token); }, function (response) { return _this.errorMessage = response.error.message; });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Pay to {{friend.firstname}} {{friend.lastname}} ({{ friend.username}})</h2>\n<br>\n<div *ngIf=\"errorMessage\">\n  <alert type=\"danger\">{{ errorMessage }}</alert>\n</div>\n<div *ngIf=\"successMessage\">\n  <alert *ngIf=\"successMessage\" type=\"success\">{{ successMessage }}</alert>\n</div>\n<div class=\"col-sm-6 col-sm-offset-3\">\n\n  <form #payFriendForm=\"ngForm\" (ngSubmit)=\"payFriend(payFriendForm.value)\">\n    <div class=\"form-group\">\n      <label for=\"balance\">Wallet</label>\n      <select class=\"form-control\" name=\"wallet\" ngModel required>\n        <option *ngFor=\"let wallet of wallets\" [value]=\"wallet._id\">{{wallet.name}} - Available Balance:\n          {{wallet.balance}}\n          {{wallet.currency}}\n        </option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Amount</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter amount to pay\" name=\"amount\" ngModel required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Note</label>\n      <textarea class=\"form-control\" placeholder=\"Payment for...\" name=\"note\" ngModel required></textarea>\n    </div>\n    <input type=\"hidden\" class=\"form-control\" name=\"friendUserId\" [(ngModel)]=\"friend.id\" required>\n    <button type=\"submit\" class=\"btn btn-primary\">Pay</button>\n    <button type=\"submit\" class=\"btn btn-secondary ml-3\" (click)=\"goBack()\">Back</button>\n\n  </form>\n\n\n</div>"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.service */ "./src/app/payment/payment.service.ts");
/* harmony import */ var _friend_friend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../friend/friend.service */ "./src/app/friend/friend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(route, router, location, payFriendService, friendService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.payFriendService = payFriendService;
        this.friendService = friendService;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.wallets = data.wallets;
            _this.friend = data.friend;
        });
    };
    PaymentComponent.prototype.payFriend = function (data) {
        var _this = this;
        this.payFriendService.pay(data)
            .subscribe(function () { return _this.successMessage = 'Payment on its way!'; }, function (error) { return _this.errorMessage = error.message; });
    };
    PaymentComponent.prototype.goBack = function () {
        this.router.navigate(['friend']);
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"],
            _friend_friend_service__WEBPACK_IMPORTED_MODULE_4__["FriendService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.friend.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/payment/payment.friend.resolver.ts ***!
  \****************************************************/
/*! exports provided: PaymentFriendResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFriendResolver", function() { return PaymentFriendResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _friend_friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../friend/friend.service */ "./src/app/friend/friend.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentFriendResolver = /** @class */ (function () {
    function PaymentFriendResolver(friendService, router) {
        this.friendService = friendService;
        this.router = router;
    }
    PaymentFriendResolver.prototype.resolve = function (route, state) {
        return this.friendService.getFriendById(route.params.id);
    };
    PaymentFriendResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_friend_friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PaymentFriendResolver);
    return PaymentFriendResolver;
}());



/***/ }),

/***/ "./src/app/payment/payment.service.ts":
/*!********************************************!*\
  !*** ./src/app/payment/payment.service.ts ***!
  \********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
    }
    PaymentService.prototype.pay = function (data) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/payment/" + data.friendUserId, data);
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/payment/payment.wallets.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/payment/payment.wallets.resolver.ts ***!
  \*****************************************************/
/*! exports provided: PaymentWalletsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentWalletsResolver", function() { return PaymentWalletsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wallet_wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wallet/wallet.service */ "./src/app/wallet/wallet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentWalletsResolver = /** @class */ (function () {
    function PaymentWalletsResolver(walletService, router) {
        this.walletService = walletService;
        this.router = router;
    }
    PaymentWalletsResolver.prototype.resolve = function (route, state) {
        return this.walletService.getWallets();
    };
    PaymentWalletsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PaymentWalletsResolver);
    return PaymentWalletsResolver;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.component.css":
/*!*********************************************!*\
  !*** ./src/app/wallet/wallet.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wallet/wallet.component.html":
/*!**********************************************!*\
  !*** ./src/app/wallet/wallet.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert [dismissible]=\"dismissible\" *ngIf=\"errorMessage\" type=\"danger\">{{ errorMessage }}\n</alert>\n\n<h2>My Wallets</h2>\n\n<button class=\"btn btn-primary\" *ngIf=\"auth.isAuthenticated()\" routerLink=\"/wallet/new\">\n  <i class=\"glyphicon glyphicon-plus\"></i> Add Wallet\n</button>\n\n<ul class=\"list-group mt-3\">\n  <li class=\"list-group-item\" *ngFor=\"let wallet of wallets\">\n    <div class=\"container\">\n      <div class=\"col-sm-12\">\n        <h3 [innerHTML]=\"wallet.trustedName\"></h3>\n        <p> Currency: {{ wallet.currency }}</p>\n        <p> Balance: {{ wallet.balance }}</p>\n        <p> Address: {{ wallet.address }}</p>\n      </div>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/wallet/wallet.component.ts":
/*!********************************************!*\
  !*** ./src/app/wallet/wallet.component.ts ***!
  \********************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _wallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet.service */ "./src/app/wallet/wallet.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalletComponent = /** @class */ (function () {
    function WalletComponent(walletService, auth, sanitizer) {
        this.walletService = walletService;
        this.auth = auth;
        this.sanitizer = sanitizer;
    }
    WalletComponent.prototype.ngOnInit = function () {
        this.getWallets();
    };
    WalletComponent.prototype.getWallets = function () {
        var _this = this;
        this.walletService.getWallets()
            .subscribe(function (data) {
            _this.wallets = data.map(function (wallet) {
                wallet.trustedName = _this.sanitizer.bypassSecurityTrustHtml(wallet.name);
                return wallet;
            });
        }, function (error) {
            _this.errorMessage = error.message;
        });
    };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.css */ "./src/app/wallet/wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_wallet_service__WEBPACK_IMPORTED_MODULE_2__["WalletService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/app/wallet/wallet.service.ts":
/*!******************************************!*\
  !*** ./src/app/wallet/wallet.service.ts ***!
  \******************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalletService = /** @class */ (function () {
    function WalletService(http) {
        this.http = http;
    }
    WalletService.prototype.getWallets = function () {
        return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/wallet");
    };
    WalletService.prototype.addWallet = function (data) {
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/wallet", data);
    };
    WalletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WalletService);
    return WalletService;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/CK/projects/owasp/appSecUSA2018/secure-coding-node-training/coinspread/client/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map