(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/components/md-auth/change-password/change-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/md-auth/change-password/change-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 col-lg-6\">\n                <div class=\"form-wrap col-12\">\n                    <dx-validation-group>\n                        <div class=\"row d-flex align-items-center mt-3\">\n                            <div class=\"col-md-12 mt-3\">\n                                <div class=\"field\">\n                                    <div class=\"label\">Old password</div>\n                                    <dx-text-box [(value)]=\"changePassword.old_password\"\n                                                 mode=\"password\" valueChangeEvent=\"keyup\"\n                                                 placeholder=\"Enter old password\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\" message=\"Old password is required\">\n                                            </dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 mt-3\">\n                                <div class=\"field\">\n                                    <div class=\"label\">New password</div>\n                                    <dx-text-box mode=\"password\" placeholder=\"Enter new password\"\n                                                 valueChangeEvent=\"keyup\" [(value)]=\"changePassword.new_password1\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\" message=\"New password is required\">\n                                            </dxi-validation-rule>\n                                            <dxi-validation-rule\n                                                    type=\"stringLength\"\n                                                    [min]=\"8\"\n                                                    message=\"Password must be at least 8 characters.\">\n                                            </dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                            </div>\n                            <div class=\"col-md-12 mt-3\">\n                                <div class=\"field\">\n                                    <div class=\"label\">Confirm new password</div>\n                                    <dx-text-box mode=\"password\" placeholder=\"Confirm new password\"\n                                                 valueChangeEvent=\"keyup\" [(value)]=\"changePassword.new_password2\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\"\n                                                                 message=\"Confirm new password is required\">\n                                            </dxi-validation-rule>\n                                            <dxi-validation-rule type=\"compare\" [comparisonTarget]=\"passwordComparison\"\n                                                                 message=\"New password and Confirm password do not match\">\n                                            </dxi-validation-rule>\n                                            <dxi-validation-rule\n                                                    type=\"stringLength\"\n                                                    [min]=\"8\"\n                                                    message=\"Password must be at least 8 characters.\">\n                                            </dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row text-left mt-3\">\n                            <div class=\"col\">\n                                <dx-button text=\"Save\" type=\"danger\" (onClick)=\"onSaveClick($event)\"\n\t\t\t\t\t\t\t\t[(disabled)]=\"!isFormDirty || isSubmitting\"></dx-button>\n                                <dx-button class=\"ml-3\" text=\"Cancel\" (onClick)=\"onCancelClick()\"></dx-button>\n                            </div>\n                        </div>\n                    </dx-validation-group>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/md-auth/change-password/change-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/md-auth/change-password/change-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-auth/change-password/change-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/md-auth/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utilities */ "./src/app/utils/utilities.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, apiService) {
        var _this = this;
        this.userService = userService;
        this.apiService = apiService;
        this.changePassword = new _models__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordModel"]();
        this.isSubmitting = false;
        this.passwordComparison = function () { return _this.changePassword.new_password1; };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onCancelClick = function () {
        this.userService.redirectToPanel();
    };
    ChangePasswordComponent.prototype.onSaveClick = function (e) {
        var _this = this;
        debugger;
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        this.isSubmitting = true;
        this.apiService.post(this.apiService.apiUrl + "/auth/password/change", this.changePassword).subscribe(function (data) {
            _this.changePassword = new _models__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordModel"]();
            e.validationGroup.reset();
            if (data.token) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_1__["Utils"].notifySuccess('Your password has been changed successfully.');
                _this.userService.setAccessToken(data.token);
                _this.userService.redirectToPanel();
            }
            else {
                _this.isSubmitting = false;
                _utils_utilities__WEBPACK_IMPORTED_MODULE_1__["Utils"].notifyError('An error has occurred. Please try again.');
            }
        }, function (error) {
            _this.isSubmitting = false;
            if (error.message) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_1__["Utils"].notifyError(error.message);
            }
            else {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_1__["Utils"].notifyError('An error has occurred. Please try again.');
            }
        }, function () {
            _this.isSubmitting = false;
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "isFormDirty", {
        // TODO: refactor
        get: function () {
            return Object.values(this.changePassword).some(function (p) { return p != null; });
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/md-auth/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/components/md-auth/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/md-auth/index.ts":
/*!*********************************************!*\
  !*** ./src/app/components/md-auth/index.ts ***!
  \*********************************************/
/*! exports provided: LoginComponent, ProfileComponent, RegisterComponent, ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/components/md-auth/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });

/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/md-auth/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]; });

/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/components/md-auth/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]; });

/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/components/md-auth/change-password/change-password.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]; });







/***/ }),

/***/ "./src/app/components/md-auth/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/md-auth/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 col-lg-10\">\n                <div class=\"login-form\">\n                    <div class=\"logo-wrap mb-5\">\n                        <a [routerLink]=\"['/']\">\n                            <img src=\"/static/app/assets/images/logo.png\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"form-wrap\">\n                        <dx-validation-group>\n                            <div class=\"field\">\n                                <div class=\"label\">Username</div>\n                                <dx-text-box [(value)]=\"user.username\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Username is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-2\">\n                                <div class=\"label\">Password</div>\n                                <dx-text-box [(value)]=\"user.password\" mode=\"password\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Password is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"row d-flex align-items-center mt-3\">\n                                <div class=\"col-md-12 col-lg-8\"><a [routerLink]=\"['/forgot-password/']\">Forgot your\n                                    password?</a></div>\n                                <div class=\"col text-lg-left mt-2\">\n                                    <dx-button width=\"150\" text=\"Manage\" icon=\"fields\" type=\"danger\"></dx-button>\n                                </div>\n                                <div class=\"col text-lg-right mt-2\">\n                                    <dx-button width=\"150\" icon=\"cart\" text=\"Sell goods\" type=\"danger\"\n                                               [(disabled)]=\"isSubmitting\"\n                                               (onClick)=\"onLogin($event)\"></dx-button>\n                                </div>\n                            </div>\n                            <div class=\"row mt-5\">\n                                <div class=\"col\">\n                                    <h6>Don't have an account?\n                                        <a [routerLink]=\"['/register/']\">Register now!</a>\n                                    </h6>\n                                </div>\n                            </div>\n                        </dx-validation-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-auth/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/md-auth/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrap {\n  min-height: 100vh;\n  height: 100%;\n  width: 100%;\n  background: #4a4a4a; }\n  .login-wrap .login-form {\n    background-color: #fff;\n    box-shadow: 0 1px 8px 0 #000;\n    padding: 100px 50px; }\n  .login-wrap .login-form .logo-wrap {\n      text-align: center; }\n  .login-wrap .login-form .form-wrap {\n      max-width: 350px;\n      margin: 10px auto; }\n  .login-wrap .login-form a,\n    .login-wrap .login-form p {\n      font-size: 15px;\n      color: #73818f; }\n"

/***/ }),

/***/ "./src/app/components/md-auth/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/md-auth/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/utilities */ "./src/app/utils/utilities.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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
    function LoginComponent(route, router, userService, authService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.user = new _models__WEBPACK_IMPORTED_MODULE_5__["AccountLoginInput"]();
        this.isSubmitting = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn()) {
            this.userService.redirectToPanel();
        }
    };
    LoginComponent.prototype.onLogin = function (e) {
        var _this = this;
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        this.isSubmitting = true;
        var edited_user = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(this.user);
        edited_user.username = edited_user.username.toLowerCase();
        this.authService.login(edited_user).subscribe(function (data) {
            if (data.token) {
                _this.userService.setAccessToken(data.token);
                _this.userService.redirectToPanel();
            }
            else {
                _this.isSubmitting = false;
                _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError('Unable to log in with provided credentials.');
            }
        }, function (error) {
            _this.isSubmitting = false;
            if (error.message) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError(error.message);
            }
            else {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError('Unable to login with provided credentials.');
            }
        }, function () {
            _this.isSubmitting = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/md-auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/md-auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/md-auth/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-auth/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 col-lg-10\">\n                <div class=\"mb-5\">\n                    <div class=\"logo-wrap mb-5 text-center profile_title\">\n                       Update your information\n                    </div>\n                    <div class=\"form-wrap\">\n                        <dx-validation-group>\n                            <div class=\"row d-flex align-items-center mt-3\">\n                                <div class=\"col text-lg-left mt-2\">\n                                    <div class=\"label text-left\">First name</div>\n                                    <dx-text-box [(value)]=\"editing_profile.first_name\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\"\n                                                                 message=\"First name is required\"></dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                                <div class=\"col text-lg-right mt-2\">\n                                    <div class=\"label text-left\">Last name</div>\n                                    <dx-text-box [(value)]=\"editing_profile.last_name\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\"\n                                                                 message=\"Last name is required\"></dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">User name</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_profile.username\" >\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Phone</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_profile.phone\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Phone is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Email</div>\n                                <dx-text-box [(value)]=\"editing_profile.email\" valueChangeEvent=\"keyup\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\" message=\"Email is required\">\n                                        </dxi-validation-rule>\n                                        <dxi-validation-rule type=\"email\" message=\"Invalid email\">\n                                        </dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Address</div>\n                                <dx-text-box [(value)]=\"editing_profile.address\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Address is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"row text-left mt-2\">\n                                <div class=\"field col-12 change-password-link\" routerLinkActive=\"active\"\n                                     [routerLink]=\"['/change-password']\">\n                                    <small class=\"text-danger\">Change your password</small>\n                                </div>\n                            </div>\n                            <div class=\"row d-flex align-items-center mt-3\">\n                                <div class=\"col text-lg-left mt-2\">\n                                    <dx-button width=\"150\" text=\"Save\" type=\"danger\"\n                                               [(disabled)]=\"!isFormDirty || isSubmitting\"\n                                               (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                                    <dx-button text=\"Cancel\" (onClick)=\"onCancelClick()\"></dx-button>\n                                </div>\n                            </div>\n                        </dx-validation-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-auth/profile/profile.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-auth/profile/profile.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile_title {\n  font-size: 25px; }\n\n.change-password-link {\n  cursor: pointer;\n  color: #c22642; }\n"

/***/ }),

/***/ "./src/app/components/md-auth/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/md-auth/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utilities */ "./src/app/utils/utilities.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.profile = new _models__WEBPACK_IMPORTED_MODULE_4__["LoggedUser"]();
        this.editing_profile = new _models__WEBPACK_IMPORTED_MODULE_4__["LoggedUser"]();
        this.isSubmitting = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.profile = user;
        });
        this.apiService.get(this.apiService.apiUrl + "/auth/profile").subscribe(function (data) {
            _this.profile = data;
            _this.editing_profile = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(data);
        }, function (error) {
            console.error(error);
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "isFormDirty", {
        get: function () {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.editing_profile, this.profile);
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.onCancelClick = function () {
        this.userService.redirectToPanel();
    };
    ProfileComponent.prototype.onSaveClick = function (e) {
        var _this = this;
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        this.isSubmitting = true;
        this.apiService.post(this.apiService.apiUrl + "/auth/profile", this.editing_profile).subscribe(function (data) {
            _this.userService.setAccessToken(data.token);
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Profile has been updated successfully.');
            _this.profile = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(_this.editing_profile);
            _this.isSubmitting = false;
        }, function (error) {
            _this.isSubmitting = false;
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifyError('An error has occurred.');
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.profileSubscription.unsubscribe();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/md-auth/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/md-auth/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/md-auth/register/register.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/md-auth/register/register.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 col-lg-10\">\n                <div class=\"mb-5\">\n                    <div class=\"logo-wrap mb-5 text-center register_head\">\n                        Create your account\n                    </div>\n                    <div class=\"form-wrap\">\n                        <dx-validation-group>\n                            <div class=\"row d-flex align-items-center mt-3\">\n                                <div class=\"col text-lg-left mt-2\">\n                                    <div class=\"label text-left\">First name</div>\n                                    <dx-text-box [(value)]=\"register.first_name\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\"\n                                                                 message=\"Username is required\"></dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                                <div class=\"col text-lg-right mt-2\">\n                                    <div class=\"label text-left\">Last name</div>\n                                    <dx-text-box [(value)]=\"register.last_name\">\n                                        <dx-validator>\n                                            <dxi-validation-rule type=\"required\"\n                                                                 message=\"Username is required\"></dxi-validation-rule>\n                                        </dx-validator>\n                                    </dx-text-box>\n                                </div>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Phone</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"register.phone\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Password is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field  mt-3\">\n                                <div class=\"label\">Shop name</div>\n                                <dx-text-box [(value)]=\"register.shop_name\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Username is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Address</div>\n                                <dx-text-box [(value)]=\"register.address\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Password is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Email</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"register.email\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\" message=\"Email is required.\">\n                                        </dxi-validation-rule>\n                                        <dxi-validation-rule type=\"email\" message=\"Invalid email\">\n                                        </dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">User name</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"register.username\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Password is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Password</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"register.password\" mode=\"password\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Username is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Confirm password</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"register.confirm_password\" mode=\"password\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Password is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"row d-flex align-items-center mt-3\">\n                                <div class=\"col text-lg-left mt-2\">\n                                    <dx-button width=\"150\" text=\"Sign up\" type=\"danger\"\n                                               [(disabled)]=\"isSubmitting\"\n                                               (onClick)=\"onSaveClick($event)\"></dx-button>\n                                </div>\n                            </div>\n                        </dx-validation-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-auth/register/register.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/md-auth/register/register.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register_head {\n  background: 0 0;\n  color: #111;\n  font-size: 31px;\n  text-transform: uppercase;\n  line-height: 34px;\n  margin-top: 35px; }\n"

/***/ }),

/***/ "./src/app/components/md-auth/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-auth/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utilities */ "./src/app/utils/utilities.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.register = new _models__WEBPACK_IMPORTED_MODULE_4__["RegisterInput"]();
        this.isSubmitting = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSaveClick = function (e) {
        var _this = this;
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        this.isSubmitting = true;
        this.apiService.post(this.apiService.apiUrl + "/auth/register", this.register).subscribe(function (data) {
            // this.userService.setAccessToken(data.token);
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Caregory product has been added successfully.');
            _this.router.navigate(['/login']);
            _this.isSubmitting = false;
        }, function (error) {
            _this.isSubmitting = false;
            if (error.message) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifyError(error.message);
            }
            else {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifyError('An error has occurred. Please try again.');
            }
        }, function () {
            _this.isSubmitting = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/md-auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/md-auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _services_gaurds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/gaurds */ "./src/app/services/gaurds/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/app/components/index.ts");
/* harmony import */ var _components_md_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/md-auth */ "./src/app/components/md-auth/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                        canActivate: [_services_gaurds__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                        children: [
                            {
                                path: 'profile',
                                component: _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                                data: { title: 'Profile' }
                            },
                            {
                                path: 'change-password',
                                component: _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"],
                                data: { title: 'Change Password' }
                            }
                        ]
                    },
                    {
                        path: 'login',
                        component: _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                        canActivate: [_services_gaurds__WEBPACK_IMPORTED_MODULE_3__["GuestGuard"]],
                        data: { title: 'Login' }
                    },
                    {
                        path: 'register',
                        component: _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                        canActivate: [_services_gaurds__WEBPACK_IMPORTED_MODULE_3__["GuestGuard"]],
                        data: { title: 'Register' }
                    },
                ])
            ],
            declarations: [
                _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _components_md_auth__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"],
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map