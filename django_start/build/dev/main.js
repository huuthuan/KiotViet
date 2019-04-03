(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts",
		"modules-auth-auth-module"
	],
	"./modules/client/client.module": [
		"./src/app/modules/client/client.module.ts",
		"modules-client-client-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gaurds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/gaurds */ "./src/app/services/gaurds/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [_services_gaurds__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: './modules/client/client.module#ClientModule'
            }
        ]
    },
    { path: '', loadChildren: './modules/auth/auth.module#AuthModule' },
    { path: '**', component: _components__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
];
var config = {
    useHash: false,
};
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utilities */ "./src/app/utils/utilities.ts");
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
    function AppComponent(router, route, sharedService, routerService, userService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.routerService = routerService;
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init router
        this.routerService.initRouterData();
        // Init the global account info
        this.userService.initAccountInfo();
        // Set the correct panel for User
        this.userService.setAccountPanel();
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (!_utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].isNoneRedirectionPage(window.location.pathname) && _this.router.url === '/') {
                    // Redirect user to correct Panel
                    _this.userService.redirectToPanel();
                }
            }
        });
        this.sharedService.hasPopupOpened.subscribe(function (isOpen) {
            var hasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;
            if (isOpen && hasScroll) {
                document.body.classList.add('popup-opened');
            }
            else {
                document.body.classList.remove('popup-opened');
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_2__["SharedService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["RouterService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-malihu-scrollbar */ "./node_modules/ngx-malihu-scrollbar/fesm5/ngx-malihu-scrollbar.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _services_gaurds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/gaurds */ "./src/app/services/gaurds/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function tokenGetter() {
    return localStorage.getItem(_services__WEBPACK_IMPORTED_MODULE_11__["TOKEN_KEY"]);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        authScheme: 'JWT '
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_7__["NgxPermissionsModule"].forRoot(),
                ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_6__["MalihuScrollbarModule"].forRoot(),
                _modules_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"].forRoot(),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_11__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
                _services__WEBPACK_IMPORTED_MODULE_11__["RouterService"],
                _services_gaurds__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                _services_gaurds__WEBPACK_IMPORTED_MODULE_12__["GuestGuard"],
                ngx_malihu_scrollbar__WEBPACK_IMPORTED_MODULE_6__["MalihuScrollbarService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["APP_BASE_HREF"], useValue: '/' }
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\">\n  <div class=\"container mt-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/components/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<h4 class=\"title\">\n\t\t<span *ngIf=\"loggedUser && loggedUser.company_name\">\n\t\t\t{{ loggedUser.company_name }}<i class=\"material-icons\" style=\"opacity: 0.6\">chevron_right</i>\n\t\t</span>{{ title }}\n\t</h4>\n\t<nav class=\"user-menu\" (clickOutside)=\"onCloseMenu()\">\n\t\t<ul>\n\t\t\t<li class=\"dropdown\" (click)=\"onToggleMenu()\">\n\t\t\t\t<div class=\"dropdown-toggle pointer\">\n\t\t\t\t\t<span class=\"user-name\"\n\t\t\t\t\t\t  *ngIf=\"loggedUser\">{{ loggedUser.username }}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dropdown-menu dropdown-menu-right\" [class.show]=\"isOpenMenu\">\n\t\t\t\t\t<a class=\"dropdown-item\" [routerLink]=\"['/profile']\">\n\t\t\t\t\t\t<i class=\"far fa-user\"></i> Edit Profile\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t<a class=\"dropdown-item pointer\" (click)=\"onLogout()\">\n\t\t\t\t\t\t<i class=\"fas fa-power-off\"></i> Logout\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n    <nav class=\"user-menu\" (clickOutside)=\"onCloseMenuSetting()\">\n\t\t<ul>\n\t\t\t<li class=\"dropdown\" (click)=\"onToggleMenuSetting()\">\n                <div class=\"dropdown-toggle pointer\">\n\t\t\t\t\t<span class=\"user-name\">Setting</span>\n\t\t\t\t</div>\n                <div class=\"dropdown-menu dropdown-menu-right\" [class.show]=\"isOpenMenuSetting\">\n\t\t\t\t\t<a class=\"dropdown-item\" [routerLink]=\"['/settingshop']\">\n\t\t\t\t\t\t<i class=\"far fa-user\"></i> Setting Shop\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"dropdown-divider\"></div>\n\t\t\t\t\t<a class=\"dropdown-item pointer\" [routerLink]=\"['/user']\">\n\t\t\t\t\t\t<i class=\"fas fa-power-off\"></i> User Management\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-size: 18px; }\n\n.material-icons {\n  vertical-align: middle; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(routerService, userService, authService) {
        this.routerService = routerService;
        this.userService = userService;
        this.authService = authService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_2__["LoggedUser"]();
        this.isOpenMenu = false;
        this.isOpenMenuSetting = false;
        this.title = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.titleSubscription = this.routerService.currentPageTitle.subscribe(function (title) {
            _this.title = title;
        });
    };
    HeaderComponent.prototype.onToggleMenu = function () {
        this.onCloseMenuSetting();
        this.isOpenMenu = !this.isOpenMenu;
    };
    HeaderComponent.prototype.onCloseMenu = function () {
        if (this.isOpenMenu) {
            this.isOpenMenu = false;
        }
    };
    HeaderComponent.prototype.onToggleMenuSetting = function () {
        this.onCloseMenu();
        this.isOpenMenuSetting = !this.isOpenMenuSetting;
    };
    HeaderComponent.prototype.onCloseMenuSetting = function () {
        if (this.isOpenMenuSetting) {
            this.isOpenMenuSetting = false;
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
        this.titleSubscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["RouterService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: LayoutComponent, HeaderComponent, SidebarComponent, ErrorComponent, LoadingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]; });

/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]; });

/* harmony import */ var _loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-panel/loading-panel.component */ "./src/app/components/loading-panel/loading-panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingPanelComponent", function() { return _loading_panel_loading_panel_component__WEBPACK_IMPORTED_MODULE_4__["LoadingPanelComponent"]; });








/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar (onSidebarToggle)=\"onSidebarToggle()\"></app-sidebar>\n<main>\n\t<div class=\"content-wrapper\">\n\t\t<div class=\"container-fluid mb-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep app-layout {\n  display: block;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  position: relative; }\n  ::ng-deep app-layout app-header > header {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 76px;\n    padding-left: 28px;\n    border-bottom: solid 1px rgba(0, 0, 0, 0.125);\n    background-color: white;\n    color: #343434;\n    z-index: 2; }\n  ::ng-deep app-layout app-header > header:after {\n      display: block;\n      clear: both;\n      content: \"\"; }\n  ::ng-deep app-layout app-header > header > h4 {\n      display: none;\n      float: left;\n      margin: 0;\n      line-height: 76px;\n      color: #343434; }\n  ::ng-deep app-layout app-header > header > nav.user-menu {\n      float: right;\n      padding-right: 25px;\n      line-height: 76px; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul {\n        margin: 0;\n        padding: 0 10px 0 0;\n        list-style: none;\n        display: inline-block; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li {\n          position: relative;\n          display: inline-block;\n          line-height: normal;\n          margin: 0;\n          padding: 0; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li .avatar img {\n            width: 30px;\n            height: 30px;\n            border-radius: 50%;\n            margin-right: 10px; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li .user-name {\n            margin-right: 2px;\n            font-weight: 500; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li .user-name:hover {\n              color: #c22642; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li .dropdown-menu {\n            top: 50px;\n            border-radius: 0 0 0.25rem 0.25rem; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li a {\n            padding: 10px 20px;\n            transition: color .15s ease;\n            color: inherit;\n            text-decoration: none; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li a:active, ::ng-deep app-layout app-header > header > nav.user-menu ul li a:hover {\n              color: #c22642 !important;\n              cursor: pointer;\n              text-decoration: none;\n              background-color: #f8f9fa; }\n  ::ng-deep app-layout app-header > header > nav.user-menu ul li a > i {\n              margin-right: 6px; }\n  ::ng-deep app-layout app-sidebar > aside {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 250px;\n    padding-top: 76px;\n    background: white;\n    color: #404E67;\n    box-shadow: 1px 0 6px #0c0c0c;\n    transition: left .2s ease, width .2s ease;\n    z-index: 3; }\n  ::ng-deep app-layout app-sidebar > aside > a.logo {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 210px;\n      height: 76px;\n      display: block;\n      border-bottom: solid 1px rgba(0, 0, 0, 0.125);\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAz1BMVEUAAADUBy/DDi7dAzDdAzDdAzDdAzDDDi7DDi7DDi7dAzDdAzDdAzDDDi7DDi7DDi7dAzDdAzDdAzDDDi7DDi7DDi7dAzDdAzDDDi7DDi7dAzDdAzDDDi7DDi7dAzDDDi7fEz3HHTvugZjhh5f97/L78PLqYn7////aaHz74OX44eXmQmTSSmL3wMvww8vhI0rLLEjyobHppbHdAzDDDi7jMlfOO1XoUnHWWW/50Nj00tjscYvdd4nwkaTllqT0sL7stL7hRGPXBjDWBi/FDS4+JsiBAAAARXRSTlMAMDAwj9///9+PIHDPz3AgEGC/v2AQUK+vUJ/v75+AgP////////////////////////9AQP//////////////////r6+TKVt1AAAH7ElEQVR4AezUtaHDUBTA0I9mZtx/zHDMWOY+nQ3U6AsAAAAAAAAAAAAA8Em+f9Ts/v3713TDVK7esh3tRr9xPV+d7iCMtCf9KU5SJcKzXOvonaIU313VmjZK7zRtKXtsY/qI1OlZ9rN7Jb2rlza9IHS0JfoSV9D0wlxboa8oElljO5HeTU/C2E6kC5heN7Yz6QKm143tTLqA6QXrYzub/pxeKmFsV2buQllxZQ3DcJZ1jwuMS7AYGmx84Jy97/+exjNGWLv+zvst+O7gKfnrha6Kna4/ethhq9wUvdIf99G7EV8407xp1zpHevTuff8JrqN//3H/8PgPG0/njx5/2Hg6f/T4w8bTj/bo3ahKNWjdXpC76ty7B/9vMXz9Qbic+0cTOGz2JanRChw94LC55svyvPDNd5VH7+zrQQc2zPORJ/bi5ekhD5t94/zLJoAcOHrEYTNs+pU+M/CAowccNmBl/m1zD646evxhQ7f4Tl96cvzRW1WHjVs3/7HfswY6emv+v0Vy/Yo+oOnUP5rVT1F8SUVPeTnz8/bMaZZV8ipr+J1GDSeiD3/RRyJ61HTW+2bImWoTifxFY3pLQp/+Tp9J6G2eDuZMtflx0mMFffEnfamgd0g6nzNk1vD0R8qcUWZN86BdKXNGmTXr5jknzBlp1gC/4YQ5I82aqPkuZDkjzZprAL0lyxlp1rQB+mNY/iqv3WuY/gSgx6qc0WZNB6DflDWstGbvAPSVKGfEWbM+Ono32UdPezAdmCZn1FkTERPlDJ81PP0WKH+TX7K3oPw2Qm8pckadNW2Efi7IGXnWXEfosSBn5FnTQej3+ZzRZ80DhL7ic0afNWuEfsbnjD5rTiNkfM7osyZi9pzOGX3WvIDoLTpn9FnTJul8zvBZw9NjOmf0WdNh6XzOLJZs1vD0R6qcGU9UWfMUoq9EOfPO+feirFlD9HuinMmcL4CsYZ9e+Kb5sGtMus730nxnH4mioXYhyZmNc95vJVlzDaO3JA1bfqXPJTXbxuiPFTkzdV/pfqbImicYPVa8ML75Tn+reHvsYPSbgpwZuu90PxJkzR2MvhLkTL+iDwRZsz4a+qZG163ovXx3W4AOjc+ZhavofslnTcQNz5l8/Is+ybms4em36Jx5537R/Xs6a26D9BadM9nv9ILOmjZIfwbnTNL9nd5L4ax5CdJjOGcW7ne6X8JZ0wHp9+HHpvJP+hx+hHoA0ldszkzdn3Q/Y7NmDdLP2JzJ/qYXbNacRuDQnBnufrVghGZNRA7Nmf4ufUBlDU9vkY9N5S59Tj5CtVk6mDMLt0v3SyhreHoMPjaN6+gT8BGqw9K5nBm6OrofAVmD0YEHmP/VeLJ6epHv7v/804t9Kyxnkm49vZdiWbNG6Tewhl24erpfYjV7N0JH5Uxe7qPPcyprInYXzAtjle+79PqQH/BPL+a1oJzJ9tMLKGvaMP0xkzNDt5/uR0zWPIHpsZ3+ri7f6+n7Q/69nd6h6UjO5OVl9HkOZA1PXyE5s3CX0f0SyZo1TSdyJh9fTp/kQNbg9IjImaG7nO5HRNZE9Iicyf6LXgBZw9NvWXMG2wB9etE3zZCjj/RFQz7AZDm4wvj0Qi825gw4W9Z0cPp9W86gm9ieXuitbDmDzpQ1a5x+ZsoZeHP+6cUye85ws2RNdEh6N8fXOyi9pc8ZImvaB6UnPD09KD3W5wyRNR09nW9YpmYV9Ed8zlg24Z9e8KaZaugzumgMu6HPGSJr7kaC6XOGyJpIsQs+Z/isuSaht4Jzpj+u3z+TPRsEZ01bQn8cmjOJ27N/9wrS0Kx5IqHHoTmzsdO3oVnT0dMtOVPa6XN71ijpq8CcmTo73c8Cs2atpxtyJguhF/asEdKjsJxJXAjdp2FZE2kWljObMPrWnjVC+q2gnCnD6HN71tBPL4am6RuOXEU3HroBXzTIA0xiOHIV3XjoUvLpxbA4IGcSF0r3aUDWdET0+wE5swmnbwOy5oGIvgr42FAZTp8HfK5oLaKf2XNm6sLpfmbPmtNINPvHhrIm9ML+uaJINXPOJK4J3afmrJHRW8aGzTfN6NvcWLNtHd362FQ2o8+tj1A6emz8duLUNaP7mfErjJ0D0DPDkTPQC+MjlI7+yJYziWtK96kta57K6Ctbzmya07e2rFnL6Ddsj01lc/rc9gh1N5LNlDNT15zuZ6asiXS7sDw2ZQS9sDxCXRPSW4acSRxB96kha9pC+mNDzmwY+taQNU+E9NjwKeiSoc8NH5fuXDW97NctcwzdF4O6za+avvrcnl3Y6A5DQRS+PzMzF5FUMO/139KSeJmONdLe08EIvsR29+e9Of3n1TkdyXt6kI1OvtPP00CbX12n3zZBNzw6Tr/MokTV0m36qo5SbTtO0/uHYAO8k79ulHfy143yTv66Ud6J183VO/G6uXonWDfeu1P56WdWN9478brhtZYlp6+a4VTVKTW9X4dbi1OJ6ed1/DwD78Tr5uqdeN1cvROvm6t34nVz9U68bq7eidfN1Tvxurl6J0A3h6rxb0yfELrxLTo/nd5ndDPwTj66AeOP359+YYfzDZffm74CWTfwTrxurt6J183VO/G6uXonXjdX78Tr5uqdeN1cvROvm6t3ctYNGN9+ffoAGG7XcPdy+t5aN+BxWvxjsat3InTz79E7PekWQPbeyV83qOG//7PI/mhZlmVZlmVZlmVZlmXZPZmSvHpA7pEOAAAAAElFTkSuQmCC\") no-repeat 22px 20px;\n      background-size: auto 42px;\n      transition: all .2s ease; }\n  ::ng-deep app-layout app-sidebar > aside > div.toggle-icon {\n      position: absolute;\n      top: 23px;\n      right: -16px;\n      width: 34px;\n      height: 34px;\n      padding: 6px;\n      cursor: pointer;\n      border-radius: 50%;\n      transition: background-color 0.2s ease, right .2s ease;\n      -moz-transition: background-color 0.2s ease, right .2s ease;\n      -webkit-transition: background-color 0.2s ease, right .2s ease; }\n  ::ng-deep app-layout app-sidebar > aside > div.toggle-icon:hover {\n        background-color: #1a21614a; }\n  ::ng-deep app-layout app-sidebar > aside > div.toggle-icon > div {\n        font-size: 14px;\n        text-align: center;\n        width: 22px;\n        height: 22px;\n        line-height: 20px;\n        background-color: white;\n        color: #c22642;\n        border: solid 1px #c22642;\n        border-radius: 50%;\n        box-shadow: 0 0 3px #00000080; }\n  ::ng-deep app-layout app-sidebar > aside > nav {\n      position: absolute;\n      top: 76px;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      color: #343434; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul {\n        margin: 0;\n        padding: 0; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li {\n          position: relative;\n          margin: 0;\n          padding: 0;\n          border: 0.1px solid #e3e3e3; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > ul > li > a {\n            margin-left: 15px; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li.navigation-header {\n            padding-left: 27px;\n            margin-top: 10px;\n            margin-bottom: 10px;\n            font-weight: 500;\n            text-transform: uppercase;\n            font-size: 15px; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li.navigation-header > i {\n              display: none; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > a {\n            position: relative;\n            color: #343434;\n            text-decoration: none;\n            font-size: 15px;\n            display: block;\n            line-height: 18px;\n            width: 100%;\n            padding-top: 15px;\n            padding-bottom: 15px;\n            padding-left: 12px;\n            white-space: nowrap;\n            overflow: hidden;\n            transition: color .15s ease, background-color .15s ease; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > a span.circle-down {\n              right: 8px;\n              position: absolute; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > a:hover {\n              text-decoration: none;\n              color: #c22642;\n              background: #f8f9fa; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > a.active {\n              color: #c22642;\n              font-weight: 500;\n              background: #f8f9fa; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > a > i {\n              margin: 0 15px; }\n  ::ng-deep app-layout app-sidebar > aside > nav ul > li > ul > li:after {\n        display: none; }\n  ::ng-deep app-layout > main {\n    position: absolute;\n    top: 76px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n    background: white;\n    padding: 15px 10px 15px 0; }\n  ::ng-deep app-layout > main .content-wrapper {\n      border-left: 1px solid #E4E7ED;\n      min-height: calc(100vh - 100px); }\n  ::ng-deep app-layout.minimized app-header > header {\n    margin-left: 70px; }\n  ::ng-deep app-layout.minimized app-sidebar > aside {\n    left: -250px;\n    box-shadow: none; }\n  ::ng-deep app-layout.minimized app-sidebar > aside > a.logo {\n      right: -70px;\n      width: 70px;\n      border-right: solid 1px rgba(0, 0, 0, 0.125);\n      background: transparent url(\"data:image/png;base64,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\") center center no-repeat;\n      background-size: auto 36px; }\n  ::ng-deep app-layout.minimized app-sidebar > aside > div.toggle-icon {\n      right: -86px;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n  @media (min-width: 576px) {\n  ::ng-deep app-layout app-header > header > h4 {\n    display: block; } }\n  @media (min-width: 992px) {\n  ::ng-deep app-layout {\n    position: relative; }\n    ::ng-deep app-layout app-header > header {\n      left: 250px; }\n    ::ng-deep app-layout app-sidebar > aside {\n      left: 0;\n      box-shadow: none; }\n    ::ng-deep app-layout > main {\n      left: 250px; }\n    ::ng-deep app-layout.minimized > main {\n      left: 70px; }\n    ::ng-deep app-layout.minimized app-header > header {\n      margin-left: 0;\n      left: 70px; }\n    ::ng-deep app-layout.minimized app-sidebar > aside {\n      left: 0;\n      width: 70px; }\n      ::ng-deep app-layout.minimized app-sidebar > aside > a.logo {\n        right: 0;\n        border-right: 0;\n        background: transparent url(\"data:image/png;base64,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\") center center no-repeat;\n        background-size: auto 36px; }\n      ::ng-deep app-layout.minimized app-sidebar > aside > div.toggle-icon {\n        right: -20px; }\n      ::ng-deep app-layout.minimized app-sidebar > aside > nav ul > li.navigation-header span {\n        display: none; }\n      ::ng-deep app-layout.minimized app-sidebar > aside > nav ul > li.navigation-header i {\n        display: inline-block; }\n      ::ng-deep app-layout.minimized app-sidebar > aside > nav ul > li > a > span {\n        display: none; }\n      ::ng-deep app-layout.minimized app-sidebar > aside > nav ul > li > ul > li > a {\n        padding-left: 12px; }\n        ::ng-deep app-layout.minimized app-sidebar > aside > nav ul > li > ul > li > a > span {\n          display: none; } }\n"

/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.navMinimized = window.innerWidth < 992;
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent.prototype.onSidebarToggle = function () {
        this.navMinimized = !this.navMinimized;
        window.dispatchEvent(new Event('resize'));
        //
        // Trigger resize event
        setTimeout(function () {
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.minimized'),
        __metadata("design:type", Boolean)
    ], LayoutComponent.prototype, "navMinimized", void 0);
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/loading-panel/loading-panel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/loading-panel/loading-panel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-panel d-flex align-items-center justify-content-center\">\n\t<div class=\"sk-wave\">\n\t\t<div class=\"sk-rect sk-rect1\"></div>\n\t\t<div class=\"sk-rect sk-rect2\"></div>\n\t\t<div class=\"sk-rect sk-rect3\"></div>\n\t\t<div class=\"sk-rect sk-rect4\"></div>\n\t\t<div class=\"sk-rect sk-rect5\"></div>\n\t\t<div class=\"loading-text\">{{ loading_text }}</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loading-panel/loading-panel.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/loading-panel/loading-panel.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-panel {\n  position: absolute;\n  width: calc(100% - 1px);\n  height: 100%;\n  left: 1px;\n  background: white;\n  opacity: 0.95;\n  z-index: 1; }\n  .loading-panel .loading-text {\n    font-size: 18px;\n    margin-left: -10px;\n    color: #c22642; }\n  .loading-panel .sk-wave {\n    margin: -27px auto 0;\n    width: 50px;\n    height: 40px;\n    text-align: center;\n    font-size: 10px; }\n  .loading-panel .sk-wave .sk-rect {\n      background-color: #c22642;\n      height: 100%;\n      margin: 0 1px;\n      width: 6px;\n      display: inline-block;\n      -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n      animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }\n  .loading-panel .sk-wave .sk-rect1 {\n      -webkit-animation-delay: -1.2s;\n      animation-delay: -1.2s; }\n  .loading-panel .sk-wave .sk-rect2 {\n      -webkit-animation-delay: -1.1s;\n      animation-delay: -1.1s; }\n  .loading-panel .sk-wave .sk-rect3 {\n      -webkit-animation-delay: -1s;\n      animation-delay: -1s; }\n  .loading-panel .sk-wave .sk-rect4 {\n      -webkit-animation-delay: -.9s;\n      animation-delay: -.9s; }\n  .loading-panel .sk-wave .sk-rect5 {\n      -webkit-animation-delay: -.8s;\n      animation-delay: -.8s; }\n  @-webkit-keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1); } }\n  @keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1); } }\n"

/***/ }),

/***/ "./src/app/components/loading-panel/loading-panel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/loading-panel/loading-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPanelComponent", function() { return LoadingPanelComponent; });
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

var LoadingPanelComponent = /** @class */ (function () {
    function LoadingPanelComponent() {
        this.loading_text = 'Loading';
    }
    LoadingPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('loading_text'),
        __metadata("design:type", String)
    ], LoadingPanelComponent.prototype, "loading_text", void 0);
    LoadingPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading-panel',
            template: __webpack_require__(/*! ./loading-panel.component.html */ "./src/app/components/loading-panel/loading-panel.component.html"),
            styles: [__webpack_require__(/*! ./loading-panel.component.scss */ "./src/app/components/loading-panel/loading-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingPanelComponent);
    return LoadingPanelComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside>\n    <a class=\"logo\" routerLink=\"/\"></a>\n\n    <div class=\"toggle-icon\" (click)=\"toggleMinimize()\">\n        <div>\n            <i class=\"fa fa-angle-left\"></i>\n        </div>\n    </div>\n\n    <nav *ngIf=\"user\">\n        <ul>\n            <li>\n                <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                    <i class=\"fas fa-tachometer-alt\"></i>\n                    <span>Dashboard</span>\n                </a>\n            </li>\n            <li (click)=\"onToggleMenuProduct()\">\n                <a routerLinkActive=\"active\" (click)=\"onShowProductItem()\">\n                    <i class=\"fas fa-cube\"></i>Product\n                    <span *ngIf=\"!isProductItem\" class=\"fas fa-chevron-circle-down showhideicon\"></span>\n                    <span *ngIf=\"isProductItem\" class=\"fas fa-chevron-circle-up showhideicon\"></span>\n                </a>\n                <ul *ngIf=\"isProductItem\">\n                    <li>\n                        <a routerLinkActive=\"active\" [routerLink]=\"['/product']\">\n                            <i class=\"fas fa-th\"></i>\n                            <span>Product portfolio</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-tags\"></i>\n                            <span>Set prices</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a routerLinkActive=\"active\" (click)=\"onShowExchangeItem()\">\n                    <i class=\"fas fa-exchange-alt\"></i>Exchange\n                    <span *ngIf=\"!isExchangeItem\" class=\"fas fa-chevron-circle-down showhideicon\"></span>\n                    <span *ngIf=\"isExchangeItem\" class=\"fas fa-chevron-circle-up showhideicon\"></span>\n                </a>\n                <ul *ngIf=\"isExchangeItem\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-file\"></i>\n                            <span>Bill</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-reply-all\"></i>\n                            <span>Return the goods</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-share-square\"></i>\n                            <span>Goods receipt</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-reply-all\"></i>\n                            <span>Tra hang nhap</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a routerLinkActive=\"active\" (click)=\"onShowReportItem\">\n                    <i class=\"fas fa-chart-bar\"></i>Report\n                    <span *ngIf=\"!isReportItem\" class=\"fas fa-chevron-circle-down showhideicon\"></span>\n                    <span *ngIf=\"isReportItem\" class=\"fas fa-chevron-circle-up showhideicon\"></span>\n                </a>\n                <ul *ngIf=\"isReportItem\">\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-chart-pie\"></i>\n                            <span>End day</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-clipboard\"></i>\n                            <span>Sell</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-inbox\"></i>\n                            <span>Order</span>\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"#\">\n                            <i class=\"fas fa-cube\"></i>\n                            <span>merchandise</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</aside>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService) {
        this.userService = userService;
        this.onSidebarToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.user = new _models__WEBPACK_IMPORTED_MODULE_2__["LoggedUser"]();
        this.isOpenMenuProduct = false;
        this.isProductItem = true;
        this.isReportItem = true;
        this.isExchangeItem = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
    };
    SidebarComponent.prototype.toggleMinimize = function () {
        this.onSidebarToggle.emit();
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    SidebarComponent.prototype.onToggleMenuProduct = function () {
        this.isOpenMenuProduct = !this.isOpenMenuProduct;
    };
    SidebarComponent.prototype.onShowProductItem = function () {
        this.isProductItem = !this.isProductItem;
    };
    SidebarComponent.prototype.onShowReportItem = function () {
        this.isReportItem = !this.isReportItem;
    };
    SidebarComponent.prototype.onShowExchangeItem = function () {
        this.isExchangeItem = !this.isExchangeItem;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidebarComponent.prototype, "onSidebarToggle", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/models/account.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/account.model.ts ***!
  \*****************************************/
/*! exports provided: AccountLoginInput, LoginTokenModel, LoggedUser, UserConfirmPassword, ChangePasswordModel, ForgotPasswordModel, ResetPasswordModel, RegisterInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginInput", function() { return AccountLoginInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginTokenModel", function() { return LoginTokenModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedUser", function() { return LoggedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserConfirmPassword", function() { return UserConfirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function() { return ChangePasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModel", function() { return ForgotPasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return ResetPasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterInput", function() { return RegisterInput; });
var AccountLoginInput = /** @class */ (function () {
    function AccountLoginInput(init) {
        Object.assign(this, init);
    }
    return AccountLoginInput;
}());

var LoginTokenModel = /** @class */ (function () {
    function LoginTokenModel(init) {
        Object.assign(this, init);
    }
    return LoginTokenModel;
}());

var LoggedUser = /** @class */ (function () {
    function LoggedUser(init) {
        Object.assign(this, init);
    }
    return LoggedUser;
}());

var UserConfirmPassword = /** @class */ (function () {
    function UserConfirmPassword(init) {
        Object.assign(this, init);
    }
    return UserConfirmPassword;
}());

var ChangePasswordModel = /** @class */ (function () {
    function ChangePasswordModel() {
    }
    return ChangePasswordModel;
}());

var ForgotPasswordModel = /** @class */ (function () {
    function ForgotPasswordModel() {
    }
    return ForgotPasswordModel;
}());

var ResetPasswordModel = /** @class */ (function () {
    function ResetPasswordModel() {
    }
    return ResetPasswordModel;
}());

var RegisterInput = /** @class */ (function () {
    function RegisterInput(init) {
        Object.assign(this, init);
    }
    return RegisterInput;
}());



/***/ }),

/***/ "./src/app/models/category.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: CategoryLookupModel, UpdateCategoryModel, ProductDetailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryLookupModel", function() { return CategoryLookupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCategoryModel", function() { return UpdateCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModel", function() { return ProductDetailModel; });
/**
 * Created by Thuan Le on 03/14/2019.
 */
var CategoryLookupModel = /** @class */ (function () {
    function CategoryLookupModel(init) {
        Object.assign(this, init);
    }
    return CategoryLookupModel;
}());

var UpdateCategoryModel = /** @class */ (function () {
    function UpdateCategoryModel(init) {
        Object.assign(this, init);
    }
    return UpdateCategoryModel;
}());

var ProductDetailModel = /** @class */ (function () {
    function ProductDetailModel(init) {
        Object.assign(this, init);
    }
    return ProductDetailModel;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: AccountLoginInput, LoginTokenModel, LoggedUser, UserConfirmPassword, ChangePasswordModel, ForgotPasswordModel, ResetPasswordModel, RegisterInput, UpdateProductModel, CategoryLookupModel, UpdateCategoryModel, ProductDetailModel, SearchFilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _account_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.model */ "./src/app/models/account.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountLoginInput", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["AccountLoginInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginTokenModel", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["LoginTokenModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggedUser", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["LoggedUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserConfirmPassword", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["UserConfirmPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModel", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["ChangePasswordModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModel", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModel", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["ResetPasswordModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterInput", function() { return _account_model__WEBPACK_IMPORTED_MODULE_0__["RegisterInput"]; });

/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.model */ "./src/app/models/product.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateProductModel", function() { return _product_model__WEBPACK_IMPORTED_MODULE_1__["UpdateProductModel"]; });

/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.model */ "./src/app/models/category.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryLookupModel", function() { return _category_model__WEBPACK_IMPORTED_MODULE_2__["CategoryLookupModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateCategoryModel", function() { return _category_model__WEBPACK_IMPORTED_MODULE_2__["UpdateCategoryModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModel", function() { return _category_model__WEBPACK_IMPORTED_MODULE_2__["ProductDetailModel"]; });

/* harmony import */ var _search_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.models */ "./src/app/models/search.models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilterModel", function() { return _search_models__WEBPACK_IMPORTED_MODULE_3__["SearchFilterModel"]; });







/***/ }),

/***/ "./src/app/models/product.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/product.model.ts ***!
  \*****************************************/
/*! exports provided: UpdateProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductModel", function() { return UpdateProductModel; });
/**
 * Created by Thuan Le on 03/13/2019.
 */
var UpdateProductModel = /** @class */ (function () {
    function UpdateProductModel(init) {
        Object.assign(this, init);
    }
    return UpdateProductModel;
}());



/***/ }),

/***/ "./src/app/models/search.models.ts":
/*!*****************************************!*\
  !*** ./src/app/models/search.models.ts ***!
  \*****************************************/
/*! exports provided: SearchFilterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterModel", function() { return SearchFilterModel; });
/**
 * Created by Thuan Le on 03/30/2019.
 */
var SearchFilterModel = /** @class */ (function () {
    function SearchFilterModel(init) {
        Object.assign(this, init);
    }
    return SearchFilterModel;
}());



/***/ }),

/***/ "./src/app/modules/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pipies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipies */ "./src/app/pipies/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./src/app/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BASE_MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
    ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsModule"],
    //
    // Dev Extreme
    devextreme_angular__WEBPACK_IMPORTED_MODULE_5__["DevExtremeModule"]
];
var COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
    _components__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
    _components__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
    _components__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
    _components__WEBPACK_IMPORTED_MODULE_7__["LoadingPanelComponent"],
];
var DIRECTIVES = [];
var PIPES = [
    _pipies__WEBPACK_IMPORTED_MODULE_6__["JoinPipe"]
];
var NB_THEME_PROVIDERS = [];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: NB_THEME_PROVIDERS.slice(),
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: BASE_MODULES.slice(),
            exports: BASE_MODULES.concat(COMPONENTS, DIRECTIVES, PIPES),
            declarations: COMPONENTS.concat(DIRECTIVES, PIPES),
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/pipies/array.pipies.ts":
/*!****************************************!*\
  !*** ./src/app/pipies/array.pipies.ts ***!
  \****************************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var JoinPipe = /** @class */ (function () {
    function JoinPipe() {
    }
    JoinPipe.prototype.transform = function (input, character) {
        if (character === void 0) { character = ''; }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isArray"])(input)) {
            return input;
        }
        return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["join"])(input, character);
    };
    JoinPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'join'
        })
    ], JoinPipe);
    return JoinPipe;
}());



/***/ }),

/***/ "./src/app/pipies/index.ts":
/*!*********************************!*\
  !*** ./src/app/pipies/index.ts ***!
  \*********************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_pipies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.pipies */ "./src/app/pipies/array.pipies.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return _array_pipies__WEBPACK_IMPORTED_MODULE_0__["JoinPipe"]; });




/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/utilities */ "./src/app/utils/utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiService = /** @class */ (function () {
    function ApiService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    Object.defineProperty(ApiService.prototype, "apiUrl", {
        get: function () {
            return this.baseURL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "headers", {
        get: function () {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiService.prototype, "options", {
        get: function () {
            return {
                headers: this.headers
            };
        },
        enumerable: true,
        configurable: true
    });
    ApiService.prototype.fixUrl = function (url) {
        return url.replace(/\/?(\?|#|$)/, '/$1');
    };
    ApiService.prototype.get = function (url) {
        return this.http
            .get("" + this.fixUrl(url), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.getWithDynamicQueryTerm = function (url, key, val) {
        return this.http
            .get(this.fixUrl(url) + "?" + key + "=" + val, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.getWithFixedQueryString = function (url, param) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('query', param);
        var options = { headers: this.headers, params: params };
        return this.http
            .get("" + this.fixUrl(url), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.getWithObjectAsQueryString = function (url, param) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        var options = { headers: this.headers, params: params };
        return this.http
            .get("" + this.fixUrl(url), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.post = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .post("" + this.fixUrl(url), body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.update = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .put("" + this.fixUrl(url), body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.patch = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .patch("" + this.fixUrl(url), body, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.delete = function (url, param) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        var options = { headers: this.headers, params: params };
        return this.http
            .delete("" + this.fixUrl(url), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.deleteWithKey = function (url, key, val) {
        return this.http
            .delete(this.fixUrl(url) + "?" + key + "=" + val, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    ApiService.prototype.extractData = function (res) {
        return res || {};
    };
    ApiService.prototype.handleError = function (data) {
        var errMsg = '';
        var errKey = '';
        // Force to login page if Unauthorized error
        if (data.status === 401 || data.statusText === 'Unauthorized') {
            _utils_utilities__WEBPACK_IMPORTED_MODULE_7__["Utils"].notifyError('Signature has expired.');
            this.userService.logout();
        }
        if (Object.keys(data.error).length) {
            errKey = Object.keys(data.error)[0];
            errMsg = data.error[errKey];
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(errMsg)) {
                errMsg = errMsg[0];
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error_key: errKey, message: errMsg, messages: data.error, data: data });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(apiService, userService) {
        this.apiService = apiService;
        this.userService = userService;
    }
    AuthenticationService.prototype.login = function (loginData) {
        return this.apiService.post(this.apiService.apiUrl + "/auth/login/", loginData);
    };
    AuthenticationService.prototype.logout = function () {
        this.userService.logout();
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/gaurds/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/services/gaurds/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/services/user.service.ts");
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
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.isLoggedIn = function () {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.userService.logout();
        return false;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.isLoggedIn();
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.isLoggedIn();
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.isLoggedIn();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/gaurds/guest.guard.ts":
/*!************************************************!*\
  !*** ./src/app/services/gaurds/guest.guard.ts ***!
  \************************************************/
/*! exports provided: GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return GuestGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestGuard = /** @class */ (function () {
    function GuestGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    Object.defineProperty(GuestGuard.prototype, "isLoggedIn", {
        get: function () {
            return this.userService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    GuestGuard.prototype.canActivate = function (route, state) {
        // Return before URL if is logged.
        if (this.isLoggedIn) {
            var beforeURL = route.queryParams['returnUrl'] || '/';
            // Navigate to before URL.
            this.router.navigate([beforeURL]);
            return false;
        }
        return true;
    };
    GuestGuard.prototype.canActivateChild = function (route, state) {
        return !this.isLoggedIn;
    };
    GuestGuard.prototype.canLoad = function (route) {
        return !this.isLoggedIn;
    };
    GuestGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GuestGuard);
    return GuestGuard;
}());



/***/ }),

/***/ "./src/app/services/gaurds/index.ts":
/*!******************************************!*\
  !*** ./src/app/services/gaurds/index.ts ***!
  \******************************************/
/*! exports provided: AuthGuard, GuestGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/services/gaurds/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _guest_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guest.guard */ "./src/app/services/gaurds/guest.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuestGuard", function() { return _guest_guard__WEBPACK_IMPORTED_MODULE_1__["GuestGuard"]; });





/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: RouterService, SharedService, ApiService, TOKEN_KEY, UserService, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.service */ "./src/app/services/router.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return _router_service__WEBPACK_IMPORTED_MODULE_0__["RouterService"]; });

/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return _shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]; });

/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOKEN_KEY", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["TOKEN_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]; });








/***/ }),

/***/ "./src/app/services/router.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/router.service.ts ***!
  \********************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var APP_NAME = '';
var RouterService = /** @class */ (function () {
    function RouterService(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this._pageTitle = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this._routerData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    RouterService.prototype.setPageTitle = function (value) {
        this._pageTitle.next(value);
    };
    Object.defineProperty(RouterService.prototype, "currentPageTitle", {
        get: function () {
            return this._pageTitle.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RouterService.prototype.setRouterData = function (value) {
        this._routerData.next(value);
    };
    Object.defineProperty(RouterService.prototype, "routerData", {
        get: function () {
            return this._routerData.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    RouterService.prototype.initRouterData = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (route) { return route.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.hasOwnProperty('title') && data.title) {
                return data;
            }
            else {
                // If not, we do a little magic on the url to create an approximation
                // return this.router.url.split('/').reduce((acc, frag) => {
                // 	data.title = this.ucFirst(frag);
                // 	return data;
                // });
                data.title = APP_NAME;
                return data;
            }
        })).subscribe(function (data) {
            _this.setRouterData(data);
            _this.setPageTitle(data.title);
            if (data.title !== APP_NAME) {
                if (APP_NAME) {
                    _this.titleService.setTitle(data.title + " - " + APP_NAME);
                }
                else {
                    _this.titleService.setTitle("" + data.title);
                }
            }
            else {
                _this.titleService.setTitle("" + APP_NAME);
            }
        });
    };
    RouterService.prototype.ucFirst = function (string) {
        if (!string) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    RouterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        this._popupOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    SharedService.prototype.setPopupOpen = function (value) {
        this._popupOpened.next(value);
    };
    Object.defineProperty(SharedService.prototype, "hasPopupOpened", {
        get: function () {
            return this._popupOpened.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: TOKEN_KEY, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_KEY", function() { return TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TOKEN_KEY = '_id_';
var UserService = /** @class */ (function () {
    function UserService(router, permissionsService, jwtHelper) {
        this.router = router;
        this.permissionsService = permissionsService;
        this.jwtHelper = jwtHelper;
        this._loginUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    Object.defineProperty(UserService.prototype, "currentUser", {
        get: function () {
            return this._loginUser.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "accessToken", {
        get: function () {
            return localStorage.getItem(TOKEN_KEY) || null;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.setAccessToken = function (token) {
        var user = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"](this.jwtHelper.decodeToken(token));
        user.token = token;
        this.setLoggedUser(user);
    };
    UserService.prototype.setCurrentUser = function (value) {
        this._loginUser.next(value);
    };
    Object.defineProperty(UserService.prototype, "loggedUser", {
        get: function () {
            if (!this.accessToken) {
                return null;
            }
            var user = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"](this.jwtHelper.decodeToken(this.accessToken));
            user.token = this.accessToken;
            return user;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.setLoggedUser = function (user) {
        if (!!user) {
            localStorage.setItem(TOKEN_KEY, user.token);
        }
        else {
            localStorage.removeItem(TOKEN_KEY);
        }
        this.initAccountInfo();
    };
    UserService.prototype.isLoggedIn = function () {
        return this.accessToken && !this.jwtHelper.isTokenExpired(this.accessToken);
    };
    UserService.prototype.initAccountInfo = function () {
        var user = this.loggedUser;
        this.setCurrentUser(user);
        if (!user) {
            this.permissionsService.flushPermissions();
        }
        else {
            this.permissionsService.loadPermissions([user.type, user.role]);
        }
    };
    UserService.prototype.setAccountPanel = function () {
    };
    UserService.prototype.redirectToPanel = function () {
        if (this.loggedUser) {
            this.router.navigate(['/']);
        }
        else {
            // TODO: Check this for other cases
            // this.logout();
        }
    };
    UserService.prototype.logout = function () {
        this.setLoggedUser(null);
        this.router.navigate(['/login']);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_4__["NgxPermissionsService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/utils/consts.ts":
/*!*********************************!*\
  !*** ./src/app/utils/consts.ts ***!
  \*********************************/
/*! exports provided: VALIDATION_REGEX, REGEX_NONE_PANEL_REDIRECTION_PAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_REGEX", function() { return VALIDATION_REGEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGEX_NONE_PANEL_REDIRECTION_PAGES", function() { return REGEX_NONE_PANEL_REDIRECTION_PAGES; });
var VALIDATION_REGEX = {
    ip_address: /^(?!(10\.)|192\.168|172\.(2[0-9]|1[6-9]|3[0-2]))[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/,
    zip_code: /^\d{5}(\d{4})?$/,
    latitude: /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
    longitude: /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
    cidr: /^(([0-9]|[1-2][0-9]|3[0-2]))$/,
    phone: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
    email: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
};
var REGEX_NONE_PANEL_REDIRECTION_PAGES = [
    /\/download\/.+/
];


/***/ }),

/***/ "./src/app/utils/utilities.ts":
/*!************************************!*\
  !*** ./src/app/utils/utilities.ts ***!
  \************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/ui/notify */ "./node_modules/devextreme/ui/notify.js");
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "./src/app/utils/consts.ts");


var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Utils.createGuid = function () {
        return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Utils.notifySuccess = function (message) {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_0___default()(message, 'success', 4000);
    };
    Utils.notifyError = function (message) {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_0___default()(message, 'error', 4000);
    };
    Utils.notifyWarning = function (message) {
        devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_0___default()(message, 'warning', 4000);
    };
    Utils.isNoneRedirectionPage = function (path) {
        var result = false;
        for (var i = 0; i < _consts__WEBPACK_IMPORTED_MODULE_1__["REGEX_NONE_PANEL_REDIRECTION_PAGES"].length; i++) {
            if (_consts__WEBPACK_IMPORTED_MODULE_1__["REGEX_NONE_PANEL_REDIRECTION_PAGES"][i].test(path)) {
                result = true;
            }
        }
        return result;
    };
    return Utils;
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
    production: false,
    apiUrl: '/api/v1'
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

module.exports = __webpack_require__(/*! C:\Users\Thuan Le\Desktop\Git\KiotViet\django_start\AppUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map