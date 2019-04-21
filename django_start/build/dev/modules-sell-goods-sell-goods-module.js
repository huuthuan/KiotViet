(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sell-goods-sell-goods-module"],{

/***/ "./src/app/components/md-sell/customer-detail/customer-detail.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/md-sell/customer-detail/customer-detail.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Customer name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Customer.name\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Product name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Birthday</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-date-box type=\"date\" width=\"100%\"\n                                     [dateSerializationFormat]=\"'yyyy-MM-dd'\"\n                                     [(value)]=\"editing_Customer.birthday\">\n                        </dx-date-box>\n                    </div>\n                </div>\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Gender</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-check-box [(value)]=\"genderMale\"\n                                      [width]=\"80\"\n                                      text=\"Male\"\n                                      (onValueChanged)=\"genderMaleChanged()\"></dx-check-box>\n                        <dx-check-box [(value)]=\"genderFemale\"\n                                      [width]=\"80\"\n                                      text=\"Female\"\n                                      (onValueChanged)=\"genderFemaleChanged()\"></dx-check-box>\n                    </div>\n                </div>\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Phone</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box\n                                [(value)]=\"editing_Customer.phone\"\n                                mask=\"+1 (X00) 000-000\"\n                                [maskRules]=\"phoneRules\"\n                                maskInvalidMessage=\"The phone must have a correct USA phone format\"\n                                [useMaskedValue]=\"true\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\"\n                                                     message=\"The phone must have a correct USA phone format\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Email</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_Customer.email\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"email\" message=\"Invalid email\">\n                                </dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Tax code</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Customer.tax_code\">\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Address</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Customer.address\">\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Note</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-area height=\"100\" [(value)]=\"editing_Customer.note\" maxLength=\"255\">\n                        </dx-text-area>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-5 mr-5 mb-3\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelCustomer()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n"

/***/ }),

/***/ "./src/app/components/md-sell/customer-detail/customer-detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/md-sell/customer-detail/customer-detail.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-sell/customer-detail/customer-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/md-sell/customer-detail/customer-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SellCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellCustomerDetailComponent", function() { return SellCustomerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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






var SellCustomerDetailComponent = /** @class */ (function () {
    function SellCustomerDetailComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"]();
        this.isSubmitting = false;
        this.phonePattern = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{3}$/;
        this.phoneRules = {
            X: /[02-9]/
        };
        this.customerDateStart = new Date();
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SellCustomerDetailComponent.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: true,
        configurable: true
    });
    SellCustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.editing_Customer = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.customer);
    };
    SellCustomerDetailComponent.prototype.onCancelCustomer = function () {
        this.onCancel.emit();
    };
    SellCustomerDetailComponent.prototype.genderMaleChanged = function () {
        if (this.genderFemale)
            this.genderFemale = !this.genderMale;
    };
    SellCustomerDetailComponent.prototype.genderFemaleChanged = function () {
        if (this.genderMale)
            this.genderMale = !this.genderFemale;
    };
    SellCustomerDetailComponent.prototype.onAddCustomer = function () {
        var _this = this;
        this.isSubmitting = true;
        this.editing_Customer.created_by = this.loggedUser.user_id;
        this.editing_Customer.created_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.customerDateStart, 'yyyy-MM-dd', 'en-US', '+0530');
        if (this.genderMale)
            this.editing_Customer.gender = 'Male';
        else if (this.genderFemale)
            this.editing_Customer.gender = 'Female';
        this.apiService.post(this.apiService.apiUrl + "/sell-goods/customers/", this.editing_Customer).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifySuccess('Customer has been added successfully.');
            _this.isSubmitting = false;
        }, function (error) {
            _this.isSubmitting = false;
            if (error.message) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError(error.message);
            }
            else {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError('An error has occurred. Please try again.');
            }
        }, function () {
            _this.isSubmitting = false;
        });
    };
    SellCustomerDetailComponent.prototype.onSaveClick = function (e) {
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        this.onAddCustomer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailModel"]])
    ], SellCustomerDetailComponent.prototype, "customer", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SellCustomerDetailComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SellCustomerDetailComponent.prototype, "onCancel", void 0);
    SellCustomerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell-customer-detail',
            template: __webpack_require__(/*! ./customer-detail.component.html */ "./src/app/components/md-sell/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__(/*! ./customer-detail.component.scss */ "./src/app/components/md-sell/customer-detail/customer-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], SellCustomerDetailComponent);
    return SellCustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/md-sell/index.ts":
/*!*********************************************!*\
  !*** ./src/app/components/md-sell/index.ts ***!
  \*********************************************/
/*! exports provided: SellGoodsComponent, ProductsComponent, PaymentComponent, SellCustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sell_goods_sell_goods_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sell-goods/sell-goods.component */ "./src/app/components/md-sell/sell-goods/sell-goods.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellGoodsComponent", function() { return _sell_goods_sell_goods_component__WEBPACK_IMPORTED_MODULE_0__["SellGoodsComponent"]; });

/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ "./src/app/components/md-sell/products/products.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]; });

/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/components/md-sell/payment/payment.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__["PaymentComponent"]; });

/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/components/md-sell/customer-detail/customer-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellCustomerDetailComponent", function() { return _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_3__["SellCustomerDetailComponent"]; });

/**
 * Created by Thuan Le on 04/12/2019.
 */






/***/ }),

/***/ "./src/app/components/md-sell/payment/payment.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-sell/payment/payment.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sale-user\">\n    <div class=\"form-inline\">\n        <div class=\"form-group sales-man\">\n            <i class=\"far fa-user-circle\"></i>\n            <div class=\"form-output\">\n                <span>asdasdasdas</span>\n            </div>\n        </div>\n        <div class=\"form-group pull-right\">\n            <label>\n                12/03/2019 08:30\n            </label>\n        </div>\n    </div>\n</div>\n<div class=\"col-right-content\">\n    <div class=\"col-right-container\">\n        <div class=\"col-right-inside\">\n            <div class=\"customer-search\">\n                <i class=\"fas fa-search\"></i>\n                <dx-autocomplete\n                        placeholder=\"Finding customers\">\n                </dx-autocomplete>\n                <dx-button height=\"26\" width=\"29\" (onClick)=\"onAddCustomer()\">\n                    <i class=\"fas fa-plus\"></i>\n                </dx-button>\n            </div>\n            <div class=\"wraper-payment-content mt-9\">\n                <div class=\"wraper-payment\">\n                    <ul class=\"payment-tab\">\n                        <li>\n                            <a>\n                                Invoice\n                            </a>\n                        </li>\n                    </ul>\n                    <div>\n                        <div class=\"payment-component\">\n                            <div class=\"payment-component-child\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-label\">\n                                        Total money\n                                        <span class=\"badge\">4</span>\n                                    </div>\n                                    <div class=\"form-output\">\n                                        23123123213\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"form-label\">\n                                        Discount\n                                    </div>\n                                    <div class=\"form-output pt-0\">\n                                        <div class=\"popup-anchor\">\n                                            <button class=\"form-control\">2131232123</button>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"form-label\">\n                                        <strong>\n                                            <span>Customers need to pay</span>\n                                        </strong>\n                                    </div>\n                                    <div class=\"form-output text-hightlight\">\n                                        23123123213\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"payment-refun payment-component-child\">\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-right-inside\">\n            <div class=\"form-note-wrap\">\n                <div class=\"form-note\">\n                    <i class=\"fas fa-pencil-alt\"></i>\n                    <dx-text-area\n                            [height]=\"100\"\n                            placeholder=\"Note\">\n                    </dx-text-area>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"wrap-button\">\n        <dx-button width=\"100%\" height=\"60\" text=\"Payment (F9)\" type=\"danger\"></dx-button>\n    </div>\n</div>\n\n<!--Detail product-->\n<div class=\"popup-container\" *ngIf=\"isCustomerPopup\">\n    <dx-popup [title]=\"customerPopupTitle\" [width]=\"950\" height=\"auto\" [(visible)]=\"isCustomerPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-sell-customer-detail\n                    [(customer)]=\"selectedCustomer\"\n                    (onSuccess)=\"onSavedCustomer($event)\"\n                    (onCancel)=\"onCancelCustomer()\">\n            </app-sell-customer-detail>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-sell/payment/payment.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-sell/payment/payment.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sale-user {\n  height: 38px;\n  padding: 10px 12px 0;\n  overflow: hidden; }\n  .sale-user .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0; }\n  .sale-user .form-inline .form-group.sales-man {\n    width: calc(100% - 110px); }\n  .sale-user .form-inline .form-group.sales-man i {\n      float: left;\n      margin: 3px 3px 0 0;\n      font-size: 12px; }\n  .sale-user .form-inline .form-group.sales-man .form-output {\n      position: relative;\n      padding: 0;\n      margin: 0;\n      display: inline-block; }\n  .sale-user .form-inline .form-group.pull-right {\n    float: right !important; }\n  .col-right-content {\n  position: relative;\n  height: calc(100% - 38px);\n  overflow: auto; }\n  .col-right-content .col-right-container .col-right-inside .customer-search {\n    position: relative;\n    margin-right: 9px;\n    margin-left: 10px; }\n  .col-right-content .col-right-container .col-right-inside .customer-search i {\n      position: absolute;\n      left: 2px;\n      bottom: 4px;\n      font-size: 13px;\n      color: #999999;\n      width: 14px;\n      height: 14px;\n      text-align: center; }\n  .col-right-content .col-right-container .col-right-inside .customer-search dx-autocomplete {\n      border-width: 0 0 1px;\n      background-color: transparent;\n      border-radius: 0;\n      height: 24px;\n      width: 100%;\n      padding-left: 17px;\n      padding-right: 26px;\n      line-height: 22px;\n      height: 29px; }\n  .col-right-content .col-right-container .col-right-inside .customer-search dx-button {\n      position: absolute;\n      right: 0;\n      top: 1px;\n      padding: 6px;\n      border: 0;\n      background: transparent;\n      padding: 0;\n      margin: 0;\n      line-height: 0;\n      display: inline-block;\n      border-radius: 2px; }\n  .col-right-content .col-right-container .col-right-inside .customer-search dx-button:hover {\n        outline: none;\n        background-color: #edf6e4; }\n  .col-right-content .col-right-container .col-right-inside .customer-search dx-button i {\n        width: 14px;\n        height: 14px;\n        display: inline-block;\n        color: #0090DA; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content {\n    font-size: 13px;\n    position: relative;\n    margin-top: 60px; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-tab {\n      display: table;\n      width: 94%;\n      margin-left: 12px;\n      margin-right: 12px;\n      list-style: none;\n      border-bottom: 1px solid #e1e1e1;\n      padding: 0; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-tab li {\n        float: left;\n        padding-right: 1px;\n        margin-right: 5px; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-tab li a {\n          background-color: #0090DA;\n          margin-bottom: -1px;\n          color: #ffffff;\n          padding: 7px 30px 8px 30px;\n          float: left; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component {\n      padding: 12px 12px 0px 12px; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group {\n        margin-bottom: 7px;\n        min-height: 29px; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group .form-label {\n          padding: 8px 5px 0px 0px;\n          line-height: 17px;\n          display: block;\n          width: 233px;\n          float: left;\n          cursor: default; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group .form-label .badge {\n            display: inline-block;\n            min-width: 20px;\n            line-height: 1.4;\n            border: 1px solid #e1e1e1;\n            margin: 0 5px;\n            border-radius: 2px;\n            padding: 0 5px;\n            text-align: center; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group .form-output {\n          margin-left: 233px;\n          text-align: right;\n          font-size: 15px;\n          padding-top: 8px;\n          line-height: 17px;\n          display: block; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group .form-output .popup-anchor {\n            position: relative; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group .form-output .popup-anchor .form-control {\n              border-width: 0 0 1px;\n              padding: 5px 0 1px;\n              background-color: transparent;\n              border-radius: 0;\n              height: 24px;\n              width: 100%;\n              border-color: #a0a0a0;\n              text-align: right;\n              font-size: 15px; }\n  .col-right-content .col-right-container .col-right-inside .wraper-payment-content .wraper-payment .payment-component .payment-component-child .form-group .text-hightlight {\n          font-size: 18px;\n          color: #0090DA;\n          font-weight: bold; }\n  .col-right-content .col-right-container .col-right-inside .form-note-wrap {\n    height: 100%;\n    width: 100%;\n    position: relative; }\n  .col-right-content .col-right-container .col-right-inside .form-note-wrap .form-note {\n      margin: 10px 12px 0; }\n  .col-right-content .col-right-container .col-right-inside .form-note-wrap .form-note i {\n        color: #999999;\n        position: absolute;\n        left: 14px;\n        top: 11px; }\n  .col-right-content .col-right-container .col-right-inside .form-note-wrap .form-note dx-text-area {\n        border: 0;\n        background-color: transparent;\n        padding-left: 15px; }\n  .col-right-content .wrap-button {\n    margin: 0 12px;\n    padding-top: 5px;\n    height: 129px; }\n  .col-right-content .wrap-button dx-button {\n      background-color: #4bac4d;\n      color: white;\n      font-size: 18px;\n      font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/components/md-sell/payment/payment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/md-sell/payment/payment.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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
    function PaymentComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_2__["LoggedUser"]();
        this.isCustomerPopup = false;
        this.customerPopupTitle = 'New Customer';
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
    };
    PaymentComponent.prototype.onAddCustomer = function () {
        this.customerPopupTitle = 'Add New Customer';
        this.selectedCustomer = new _models__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailModel"]();
        this.isCustomerPopup = true;
    };
    PaymentComponent.prototype.onSavedCustomer = function () {
        this.isCustomerPopup = false;
    };
    PaymentComponent.prototype.onCancelCustomer = function () {
        this.isCustomerPopup = false;
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/md-sell/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/components/md-sell/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/md-sell/products/products.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/md-sell/products/products.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list\">\n    <div class=\"productListWrapper\">\n        <div class=\"action-toolbar\">\n            <div class=\"action-left\">\n                <a>\n                    <i class=\"fa fa-arrow-up\"></i>\n                </a>\n                <a>\n                    <i class=\"fas fa-list\"></i>\n                </a>\n            </div>\n            <div class=\"action-right\">\n                asdasdsdfhgl,.\n            </div>\n        </div>\n        <div class=\"product-price\">\n            <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                    <ul>\n                        <li *ngFor=\"let product of products\" (click)=\"addProduct(product)\">\n                            <a>\n                                <div class=\"product-img\">\n                                    <img src=\"https://cdn-app.kiotviet.vn/sample/machine/1.png\">\n                                    <span class=\"product-price\">{{ product.price_sale }}</span>\n                                </div>\n                                <div class=\"product-info\">\n                                    <span class=\"product-name\">{{ product.name }}</span>\n                                </div>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-sell/products/products.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/md-sell/products/products.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  overflow: hidden;\n  width: 100%;\n  padding: 0 7px 0 12px; }\n  .product-list .productListWrapper .action-toolbar {\n    height: 28px;\n    padding-top: 6px;\n    overflow: hidden; }\n  .product-list .productListWrapper .action-toolbar .action-left {\n      float: left; }\n  .product-list .productListWrapper .action-toolbar .action-left a {\n        line-height: 0;\n        float: left;\n        padding: 2px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: #c2c2c2;\n        -o-border-image: initial;\n           border-image: initial;\n        border-radius: 2px; }\n  .product-list .productListWrapper .action-toolbar .action-right {\n      float: right; }\n  .product-list .productListWrapper .product-price {\n    margin: 0 auto;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 300px;\n    max-width: 1500px; }\n  .product-list .productListWrapper .product-price .swiper-slide {\n      flex-shrink: 0;\n      position: relative; }\n  .product-list .productListWrapper .product-price .swiper-slide ul {\n        padding: 0px; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li {\n          width: 140px;\n          height: 132px;\n          float: left;\n          list-style: none;\n          padding: 10px;\n          margin: 2px 0; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li a {\n            display: block; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li a .product-img {\n              width: 100%;\n              height: 77px;\n              text-align: center;\n              white-space: nowrap;\n              position: relative; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li a .product-img img {\n                max-width: 100%;\n                max-height: 100%;\n                vertical-align: middle;\n                margin-left: -3px; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li a .product-img .product-price {\n                font-weight: bold;\n                color: #0090DA;\n                display: inline-block;\n                padding: 2px 3px;\n                background-color: #ebebeb;\n                position: absolute;\n                left: 0;\n                bottom: 0; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li a .product-info {\n              padding: 5px 0 0;\n              line-height: 1.4; }\n  .product-list .productListWrapper .product-price .swiper-slide ul li a .product-info .product-name {\n                display: -webkit-box;\n                -webkit-line-clamp: 2;\n                overflow: hidden;\n                text-overflow: ellipsis;\n                height: 33px; }\n  @media screen and (max-width: 1133px) and (min-width: 944px) {\n  .product-list .swiper-slide ul li {\n    width: 20%; } }\n  .product-list .swiper-slide ul li:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); }\n  .product-list .swiper-slide ul li a .product-img:not(.error-img) {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/md-sell/products/products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-sell/products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(apiService) {
        this.apiService = apiService;
        this.onAddProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = {
            slidesPerView: 'auto',
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: true,
        };
        this.products = [];
        this.isLoading = false;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadProducts();
    };
    ProductsComponent.prototype.loadProducts = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.get(this.apiService.apiUrl + "/sell-goods/product-list/").subscribe(function (data) {
            _this.products = data;
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    ProductsComponent.prototype.addProduct = function (product) {
        this.onAddProduct.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "onAddProduct", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/md-sell/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/md-sell/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/modules/sell-goods/sell-goods.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/sell-goods/sell-goods.module.ts ***!
  \*********************************************************/
/*! exports provided: SellGoodsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellGoodsModule", function() { return SellGoodsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _components_md_sell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/md-sell */ "./src/app/components/md-sell/index.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SellGoodsModule = /** @class */ (function () {
    function SellGoodsModule() {
    }
    SellGoodsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["SellGoodsComponent"],
                        data: { title: 'Sell goods' }
                    }
                ])
            ],
            declarations: [
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["SellGoodsComponent"],
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"],
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["SellCustomerDetailComponent"],
            ]
        })
    ], SellGoodsModule);
    return SellGoodsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sell-goods-sell-goods-module.js.map