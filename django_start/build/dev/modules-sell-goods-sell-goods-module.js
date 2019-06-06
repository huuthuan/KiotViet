(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-sell-goods-sell-goods-module"],{

/***/ "./src/app/components/md-sell/cart-tabs/cart-tabs.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/md-sell/cart-tabs/cart-tabs.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-tab-wrap\">\n    <div class=\"content-tab\">\n        <div class=\"scroll-lane\">\n            <ul>\n                <li *ngFor=\"let report of invoiceReports\">\n                    <a (click)=\"onSelectTab(report)\"\n                       [ngClass]=\"{'active':selectedTab === report.invoice_code}\">\n                                    <span>\n                                        {{ report.invoice_name }}\n                                    </span>\n                    </a>\n                    <span class=\"delete-invoice\">\n                                    <i class=\"fas fa-times\" (click)=\"onDeleteReport(report.invoice_code)\"></i>\n                                </span>\n                </li>\n                <li class=\"add-btn\" (click)=\"onAddReport($event)\">\n                    <a>\n                        <i class=\"fas fa-plus\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-sell/cart-tabs/cart-tabs.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/md-sell/cart-tabs/cart-tabs.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-sell/cart-tabs/cart-tabs.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/md-sell/cart-tabs/cart-tabs.component.ts ***!
  \*********************************************************************/
/*! exports provided: CartTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartTabsComponent", function() { return CartTabsComponent; });
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

var CartTabsComponent = /** @class */ (function () {
    function CartTabsComponent() {
    }
    CartTabsComponent.prototype.ngOnInit = function () {
    };
    CartTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-tabs',
            template: __webpack_require__(/*! ./cart-tabs.component.html */ "./src/app/components/md-sell/cart-tabs/cart-tabs.component.html"),
            styles: [__webpack_require__(/*! ./cart-tabs.component.scss */ "./src/app/components/md-sell/cart-tabs/cart-tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CartTabsComponent);
    return CartTabsComponent;
}());



/***/ }),

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
        if (this.genderFemale) {
            this.genderFemale = !this.genderMale;
        }
    };
    SellCustomerDetailComponent.prototype.genderFemaleChanged = function () {
        if (this.genderMale) {
            this.genderMale = !this.genderFemale;
        }
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
            _this.onSuccess.emit(data);
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

/***/ "./src/app/components/md-sell/customer-search/customer-search.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/md-sell/customer-search/customer-search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<i class=\"fas fa-search\"></i>\n<dx-autocomplete\n        placeholder=\"Finding customers\"\n        [dataSource]=\"dataSource\"\n        valueExpr=\"name\"\n        [searchExpr]='[\"customer_code\",\"name\"]'\n        [(value)]=\"invoice.customer.name\"\n        (onItemClick)=\"onChangeCustomer($event)\">\n    <div *dxTemplate=\"let item of 'item'\">\n        <div>Code: {{ item.customer_code }}; Name: {{ item.name }}</div>\n    </div>\n</dx-autocomplete>\n<dx-button height=\"26\" width=\"29\" (onClick)=\"onAddCustomer()\">\n    <i class=\"fas fa-plus\"></i>\n</dx-button>\n\n<!--Detail product-->\n<div class=\"popup-container\" *ngIf=\"isCustomerPopup\">\n    <dx-popup [title]=\"customerPopupTitle\" [width]=\"950\" height=\"auto\" [(visible)]=\"isCustomerPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-sell-customer-detail\n                    [(customer)]=\"selectedCustomer\"\n                    (onSuccess)=\"onSavedCustomer($event)\"\n                    (onCancel)=\"onCancelCustomer()\">\n            </app-sell-customer-detail>\n        </div>\n    </dx-popup>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/md-sell/customer-search/customer-search.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/md-sell/customer-search/customer-search.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  position: absolute;\n  left: 2px;\n  bottom: 4px;\n  font-size: 13px;\n  color: #999999;\n  width: 14px;\n  height: 14px;\n  text-align: center; }\n\ndx-button {\n  position: absolute;\n  right: 0;\n  top: 1px;\n  padding: 6px;\n  border: 0;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  line-height: 0;\n  display: inline-block;\n  border-radius: 2px; }\n\ndx-button:hover {\n    outline: none;\n    background-color: #edf6e4; }\n\ndx-button i {\n    width: 14px;\n    height: 14px;\n    display: inline-block;\n    color: #0090DA;\n    margin-left: 6px; }\n\n::ng-deep .col-right-inside .customer-search .dx-autocomplete {\n  border-width: 0 0 1px;\n  background-color: transparent;\n  border-radius: 0;\n  height: 24px;\n  width: 100%;\n  padding-left: 17px;\n  padding-right: 26px;\n  line-height: 22px;\n  height: 29px; }\n"

/***/ }),

/***/ "./src/app/components/md-sell/customer-search/customer-search.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/md-sell/customer-search/customer-search.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSearchComponent", function() { return CustomerSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerSearchComponent = /** @class */ (function () {
    // customerName: string = this.invoice.customer.name;
    function CustomerSearchComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_3__["LoggedUser"]();
        this.dataSource = [];
        this.isCustomerPopup = false;
        this.customerPopupTitle = 'New Customer';
    }
    Object.defineProperty(CustomerSearchComponent.prototype, "invoice", {
        get: function () {
            return this._invoice;
        },
        set: function (value) {
            this._invoice = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadCustomer();
    };
    CustomerSearchComponent.prototype.loadCustomer = function () {
        var _this = this;
        this.apiService.get(this.apiService.apiUrl + "/sell-goods/customers").subscribe(function (data) {
            _this.dataSource = data;
        });
    };
    CustomerSearchComponent.prototype.onChangeCustomer = function (data) {
        this.invoice.customer = data.itemData;
    };
    CustomerSearchComponent.prototype.onAddCustomer = function () {
        this.customerPopupTitle = 'Add New Customer';
        this.selectedCustomer = new _models__WEBPACK_IMPORTED_MODULE_3__["CustomerDetailModel"]();
        this.isCustomerPopup = true;
    };
    CustomerSearchComponent.prototype.onSavedCustomer = function (customer) {
        this.isCustomerPopup = false;
        this.invoice.customer = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(customer);
        // this.customerName = this.invoice.customer.name;
    };
    CustomerSearchComponent.prototype.onCancelCustomer = function () {
        this.isCustomerPopup = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_3__["InvoiceReportModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_3__["InvoiceReportModel"]])
    ], CustomerSearchComponent.prototype, "invoice", null);
    CustomerSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-search',
            template: __webpack_require__(/*! ./customer-search.component.html */ "./src/app/components/md-sell/customer-search/customer-search.component.html"),
            styles: [__webpack_require__(/*! ./customer-search.component.scss */ "./src/app/components/md-sell/customer-search/customer-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CustomerSearchComponent);
    return CustomerSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/md-sell/index.ts":
/*!*********************************************!*\
  !*** ./src/app/components/md-sell/index.ts ***!
  \*********************************************/
/*! exports provided: SellGoodsComponent, ProductsComponent, PaymentComponent, ProductCartComponent, SellCustomerDetailComponent, CustomerSearchComponent, CartTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sell_goods_sell_goods_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sell-goods/sell-goods.component */ "./src/app/components/md-sell/sell-goods/sell-goods.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellGoodsComponent", function() { return _sell_goods_sell_goods_component__WEBPACK_IMPORTED_MODULE_0__["SellGoodsComponent"]; });

/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products/products.component */ "./src/app/components/md-sell/products/products.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return _products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"]; });

/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/components/md-sell/payment/payment.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return _payment_payment_component__WEBPACK_IMPORTED_MODULE_2__["PaymentComponent"]; });

/* harmony import */ var _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-cart/product-cart.component */ "./src/app/components/md-sell/product-cart/product-cart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCartComponent", function() { return _product_cart_product_cart_component__WEBPACK_IMPORTED_MODULE_3__["ProductCartComponent"]; });

/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/components/md-sell/customer-detail/customer-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SellCustomerDetailComponent", function() { return _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_4__["SellCustomerDetailComponent"]; });

/* harmony import */ var _customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-search/customer-search.component */ "./src/app/components/md-sell/customer-search/customer-search.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerSearchComponent", function() { return _customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_5__["CustomerSearchComponent"]; });

/* harmony import */ var _cart_tabs_cart_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-tabs/cart-tabs.component */ "./src/app/components/md-sell/cart-tabs/cart-tabs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartTabsComponent", function() { return _cart_tabs_cart_tabs_component__WEBPACK_IMPORTED_MODULE_6__["CartTabsComponent"]; });

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

module.exports = "<div class=\"wraper-payment\">\n    <ul class=\"payment-tab\">\n        <li>\n            <a>Invoice</a>\n        </li>\n    </ul>\n    <div>\n        <div class=\"payment-component\">\n            <div class=\"payment-component-child\">\n                <div class=\"form-group\">\n                    <div class=\"form-label\">\n                        Total money\n                        <span class=\"badge\">{{ invoice.total_quantity }}</span>\n                    </div>\n                    <div class=\"form-output\">\n                        {{ invoice.total }}\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"form-label\">\n                        Discount\n                    </div>\n                    <div class=\"form-output pt-0\">\n                        <div class=\"popup-anchor\">\n                            <button id=\"discount\" class=\"form-control\"\n                                    (click)=\"onOpenChangeDiscountPopover()\">{{ invoice.discount.discount }}</button>\n                            <div>\n                                <dx-popover\n                                        target=\"#discount\"\n                                        position=\"left\"\n                                        [width]=\"300\"\n                                        [(visible)]=\"isChangeDiscountPopover\">\n                                    <div *dxTemplate=\"let data = model of 'content'\">\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-3\" style=\"padding-right: 1px; padding-left: 8px\">\n                                                <div class=\"label mt-lg-2\">Discount</div>\n                                            </div>\n                                            <div class=\"col-lg-9\">\n                                                <dx-number-box [(value)]=\"invoice.discount.discount_convert\"\n                                                               [height]=\"30\"\n                                                               [width]=\"108\"\n                                                               [min]=\"0\"\n                                                               [max]=\"maxDiscount\"\n                                                               valueChangeEvent=\"keyup\"\n                                                               (onKeyUp)=\"onChangeDiscount($event)\">\n                                                </dx-number-box>\n                                                <a class=\"discount\" style=\"right: 50px\"\n                                                   [ngClass]=\"{'active':invoice.discount.conversion_form === '$'}\"\n                                                   (click)=\"setDiscountForm($event)\">$</a>\n                                                <a class=\"discount\" style=\"right: 15px\"\n                                                   [ngClass]=\"{'active':invoice.discount.conversion_form === '%'}\"\n                                                   (click)=\"setDiscountForm($event)\">%</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </dx-popover>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"form-label\">\n                        <strong>\n                            <span>Customers need to pay</span>\n                        </strong>\n                    </div>\n                    <div class=\"form-output text-hightlight\">\n                        {{ invoice.total - invoice.discount.discount }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-sell/payment/payment.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/md-sell/payment/payment.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wraper-payment .payment-tab {\n  display: table;\n  width: 94%;\n  margin-left: 12px;\n  margin-right: 12px;\n  list-style: none;\n  border-bottom: 1px solid #e1e1e1;\n  padding: 0; }\n  .wraper-payment .payment-tab li {\n    float: left;\n    padding-right: 1px;\n    margin-right: 5px; }\n  .wraper-payment .payment-tab li a {\n      background-color: #0090DA;\n      margin-bottom: -1px;\n      color: #ffffff;\n      padding: 7px 30px 8px 30px;\n      float: left; }\n  .wraper-payment .payment-component {\n  padding: 12px 12px 0px 12px; }\n  .wraper-payment .payment-component .payment-component-child .form-group {\n    margin-bottom: 7px;\n    min-height: 29px; }\n  .wraper-payment .payment-component .payment-component-child .form-group .form-label {\n      padding: 8px 5px 0px 0px;\n      line-height: 17px;\n      display: block;\n      width: 233px;\n      float: left;\n      cursor: default; }\n  .wraper-payment .payment-component .payment-component-child .form-group .form-label .badge {\n        display: inline-block;\n        min-width: 20px;\n        line-height: 1.4;\n        border: 1px solid #e1e1e1;\n        margin: 0 5px;\n        border-radius: 2px;\n        padding: 0 5px;\n        text-align: center; }\n  .wraper-payment .payment-component .payment-component-child .form-group .form-output {\n      margin-left: 233px;\n      text-align: right;\n      font-size: 15px;\n      padding-top: 8px;\n      line-height: 17px;\n      display: block; }\n  .wraper-payment .payment-component .payment-component-child .form-group .form-output .popup-anchor {\n        position: relative; }\n  .wraper-payment .payment-component .payment-component-child .form-group .form-output .popup-anchor .form-control {\n          border-width: 0 0 1px;\n          padding: 5px 0 1px;\n          background-color: transparent;\n          border-radius: 0;\n          height: 24px;\n          width: 100%;\n          border-color: #a0a0a0;\n          text-align: right;\n          font-size: 15px; }\n  .wraper-payment .payment-component .payment-component-child .form-group .text-hightlight {\n      font-size: 18px;\n      color: #0090DA;\n      font-weight: bold; }\n  .discount {\n  width: 33px;\n  height: 27px;\n  top: 0;\n  background-color: #999999;\n  color: #ffffff !important;\n  font-size: 13px;\n  padding: 5px 0;\n  text-align: center;\n  border-radius: 2px;\n  margin-left: 1px;\n  position: absolute; }\n  .discount:hover {\n    background-color: #317133; }\n  .discount.active {\n  background-color: #4bac4d !important; }\n"

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
    function PaymentComponent(userService) {
        this.userService = userService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_2__["LoggedUser"]();
        this.isChangeDiscountPopover = false;
        this.maxDiscount = null;
    }
    Object.defineProperty(PaymentComponent.prototype, "invoice", {
        get: function () {
            return this._invoice;
        },
        set: function (value) {
            this._invoice = value;
        },
        enumerable: true,
        configurable: true
    });
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
    };
    PaymentComponent.prototype.onOpenChangeDiscountPopover = function () {
        this.isChangeDiscountPopover = !this.isChangeDiscountPopover;
    };
    PaymentComponent.prototype.onChangeDiscount = function (e) {
        var event = e.event, str = event.key || String.fromCharCode(event.which);
        if (!/[0-9]/.test(str)) {
            event.preventDefault();
        }
        var discount = e.component._options.value;
        if (discount >= this.invoice.total) {
            this.invoice.discount.discount = this.invoice.total;
            if (this.invoice.discount.conversion_form === '$') {
                this.invoice.discount.discount_convert = this.invoice.total;
                this.maxDiscount = this.invoice.total;
            }
            else {
                if (this.invoice.discount.conversion_form === '%') {
                    this.invoice.discount.discount_convert = 100;
                    this.maxDiscount = 100;
                }
            }
        }
        else {
            if (this.invoice.discount.conversion_form === '$') {
                this.invoice.discount.discount = this.invoice.discount.discount_convert;
            }
            else {
                if (this.invoice.discount.conversion_form === '%') {
                    this.invoice.discount.discount = (this.invoice.total * (this.invoice.discount.discount_convert / 100));
                }
            }
        }
    };
    PaymentComponent.prototype.setDiscountForm = function (e) {
        if (e.currentTarget.text === '$') {
            this.invoice.discount.conversion_form = '$';
            if (this.invoice.discount.discount) {
                this.invoice.discount.discount_convert = this.invoice.discount.discount;
            }
            else {
                this.invoice.discount.discount_convert = 0;
            }
        }
        if (e.currentTarget.text === '%') {
            this.invoice.discount.conversion_form = '%';
            this.maxDiscount = 100;
            if (this.invoice.discount.discount) {
                this.invoice.discount.discount_convert = parseFloat(((this.invoice.discount.discount / this.invoice.total) * 100).toFixed(2));
            }
            else {
                this.invoice.discount.discount_convert = 0;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_2__["InvoiceReportModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_2__["InvoiceReportModel"]])
    ], PaymentComponent.prototype, "invoice", null);
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/md-sell/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/components/md-sell/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/md-sell/product-cart/product-cart.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/md-sell/product-cart/product-cart.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-cart-list\">\n    <div class=\"row-list\" *ngFor=\"let productDetail of invoice.products; index as indexProduct\">\n        <div class=\"cell-order\">{{ indexProduct + 1}}</div>\n        <div class=\"cell-action\">\n            <a class=\"btn-delete\">\n                <i class=\"fas fa-times\" (click)=\"onDeleteProduct(indexProduct)\"></i>\n            </a>\n        </div>\n        <div class=\"row-product\">\n            <div class=\"cell-code\">\n                {{ productDetail.product.product_code }}\n            </div>\n            <div class=\"cell-name not-units\">\n                <h4>\n                    {{ productDetail.product.name }}\n                </h4>\n                <div class=\"wrap-note\">\n                    <label id=\"note_{{ indexProduct }}\"\n                           (click)=\"onAddNoteProduct(productDetail.product.product_code)\">\n                        {{ productDetail.note }}\n                        <button class=\"btn-icon\">\n                            <span *ngIf=\"!productDetail.note\"> Note...</span>\n                            <i class=\"fas fa-pencil-alt\"></i>\n                        </button>\n                    </label>\n                    <div *ngIf=\"isNoteProductPopover && isOpenPopover_id === productDetail.product.product_code\">\n                        <dx-popover\n                                target=\"#note_{{ indexProduct }}\"\n                                position=\"bottom\"\n                                [width]=\"500\"\n                                [(visible)]=\"isNoteProductPopover\"\n                                class=\"center-popover\">\n                            <div *dxTemplate=\"let data = model of 'content'\">\n                                <dx-text-area\n                                        [height]=\"65\"\n                                        placeholder=\"Note\"\n                                        [(value)]=\"productDetail.note\">\n                                </dx-text-area>\n                            </div>\n                        </dx-popover>\n                    </div>\n                </div>\n            </div>\n            <div class=\"cell-quatity\">\n                <button id=\"btnUpQuantity\" class=\"btn-icon up\"\n                        (click)=\"onUpQuantityProduct(indexProduct)\">\n                    <i class=\"fas fa-angle-up\"></i>\n                </button>\n                <dx-number-box [(value)]=\"productDetail.quantity\"\n                               rtlEnabled=\"true\"\n                               [min]=\"1\"\n                               valueChangeEvent=\"keyup\"\n                               (onKeyUp)=\"onKeyUpChangeQuantity($event, indexProduct)\">\n                </dx-number-box>\n                <button id=\"btnDownQuantity\" class=\"btn-icon down\"\n                        (click)=\"onDownQuantityProduct(indexProduct)\">\n                    <i class=\"fas fa-angle-down\"></i>\n                </button>\n            </div>\n            <div class=\"cell-warning\">\n                <button *ngIf=\"productDetail.quantity > productDetail.product.on_hand\">\n                    <i class=\"fas fa-exclamation-triangle\"></i>\n                </button>\n            </div>\n            <div class=\"cell-change-price\">\n                <div class=\"popup-anchor\">\n                    <button id=\"price_{{ indexProduct }}\"\n                            (click)=\"onChangePriceProduct(productDetail.product.product_code)\">\n                        {{ productDetail.price }}\n                    </button>\n                    <span>\n                        <span>\n                            - {{ productDetail.discount.discount }}\n                        </span>\n                    </span>\n                    <div *ngIf=\"isChangePriceProductPopover && isOpenPopover_id === productDetail.product.product_code\">\n                        <dx-popover\n                                target=\"#price_{{ indexProduct }}\"\n                                position=\"left\"\n                                [width]=\"300\"\n                                [(visible)]=\"isChangePriceProductPopover\">\n                            <div *dxTemplate=\"let data = model of 'content'\">\n                                <div class=\"row\">\n                                    <div class=\"col-lg-3\" style=\"padding-right: 1px; padding-left: 8px\">\n                                        <div class=\"label mt-lg-2\">New price</div>\n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <dx-number-box [(value)]=\"productDetail.price\"\n                                                       [height]=\"30\"\n                                                       format=\"$ #,##0.##\"\n                                                       [min]=\"0\"\n                                                       valueChangeEvent=\"keyup\"\n                                                       (onKeyUp)=\"onChangePrice($event, indexProduct)\"\n                                        ></dx-number-box>\n                                    </div>\n                                </div>\n                                <div class=\"row mt-3\">\n                                    <div class=\"col-lg-3\" style=\"padding-right: 1px; padding-left: 8px\">\n                                        <div class=\"label mt-lg-2\">Discount</div>\n                                    </div>\n                                    <div class=\"col-lg-9\">\n                                        <dx-number-box [(value)]=\"productDetail.discount.discount\"\n                                                       [height]=\"30\"\n                                                       [width]=\"108\"\n                                                       [min]=\"0\"\n                                                       [max]=\"max\"\n                                                       valueChangeEvent=\"keyup\"\n                                                       (onKeyUp)=\"onChangeDiscount($event, indexProduct)\">\n                                        </dx-number-box>\n                                        <a class=\"discount\" style=\"right: 50px\"\n                                           [ngClass]=\"{'active':productDetail.discount.conversion_form === '$'}\"\n                                           (click)=\"setDiscountForm($event, productDetail)\">$</a>\n                                        <a class=\"discount\" style=\"right: 15px\"\n                                           [ngClass]=\"{'active':productDetail.discount.conversion_form === '%'}\"\n                                           (click)=\"setDiscountForm($event, productDetail)\">%</a>\n                                    </div>\n                                </div>\n                            </div>\n                        </dx-popover>\n                    </div>\n                </div>\n            </div>\n            <div class=\"cell-price\">\n                {{ productDetail.paid_amount }}\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-sell/product-cart/product-cart.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/md-sell/product-cart/product-cart.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-cart-list .row-list {\n  content: \"\";\n  display: table;\n  width: 100%;\n  border-bottom: 1px solid #ebebeb; }\n  .product-cart-list .row-list .cell-order {\n    width: 35px;\n    text-align: center; }\n  .product-cart-list .row-list .cell-action {\n    width: 35px;\n    text-align: center; }\n  .product-cart-list .row-list .cell-action .btn-delete i {\n      width: 14px;\n      height: 14px;\n      display: inline-block;\n      color: #e47885; }\n  .product-cart-list .row-list .cell-action .btn-delete i:hover {\n        background-color: #e47885;\n        color: #fff; }\n  .product-cart-list .row-list .row-product {\n    flex: 1;\n    position: relative;\n    margin-top: 15px;\n    display: flex; }\n  .product-cart-list .row-list .row-product button.btn-icon {\n      border: 0;\n      background: transparent;\n      padding: 0;\n      margin: 0;\n      line-height: 0;\n      display: none;\n      border-radius: 2px; }\n  .product-cart-list .row-list .row-product button.btn-icon i {\n        color: #a8a8a8; }\n  .product-cart-list .row-list .row-product .cell-code {\n      width: 120px;\n      max-width: 120px;\n      font-size: 13px;\n      color: #111111; }\n  .product-cart-list .row-list .row-product .cell-name {\n      flex: 1; }\n  .product-cart-list .row-list .row-product .cell-name h4 {\n        font-size: 13px;\n        padding-bottom: 2px;\n        margin: 0;\n        color: #111111;\n        font-weight: normal;\n        line-height: 1.3; }\n  .product-cart-list .row-list .row-product .cell-name .wrap-note label {\n        font-size: 11px;\n        padding: 0;\n        margin: 0;\n        color: #666666;\n        background: none;\n        border: none;\n        box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n        width: 100%;\n        cursor: pointer;\n        line-height: 14px; }\n  .product-cart-list .row-list .row-product .cell-name .wrap-note label button {\n          cursor: pointer; }\n  .product-cart-list .row-list .row-product .cell-quatity {\n      top: -5px;\n      text-align: right;\n      font-size: 14px;\n      padding-left: 34px !important;\n      padding-right: 34px !important;\n      width: 115px;\n      padding-top: 0 !important;\n      position: relative; }\n  .product-cart-list .row-list .row-product .cell-quatity button.btn-icon {\n        position: absolute;\n        cursor: pointer;\n        height: 24px;\n        width: 24px;\n        background: #e6121200;\n        text-align: center;\n        border: 1px solid rgba(0, 0, 0, 0.15); }\n  .product-cart-list .row-list .row-product .cell-quatity button.btn-icon i {\n          font-size: 16px; }\n  .product-cart-list .row-list .row-product .cell-quatity dx-number-box {\n        border-width: 0 0 1px;\n        border-radius: 0;\n        height: 24px;\n        width: 100%;\n        line-height: 22px;\n        height: 24px; }\n  .product-cart-list .row-list .row-product .cell-quatity button.down {\n        top: 0;\n        left: 4px; }\n  .product-cart-list .row-list .row-product .cell-quatity button.up {\n        right: 4px; }\n  .product-cart-list .row-list .row-product .cell-warning {\n      width: 25px;\n      height: 35px; }\n  .product-cart-list .row-list .row-product .cell-warning button {\n        background: transparent;\n        cursor: pointer;\n        border: none;\n        padding: 4px 0; }\n  .product-cart-list .row-list .row-product .cell-warning button i {\n          font-size: 12px;\n          color: #e47885; }\n  .product-cart-list .row-list .row-product .cell-change-price {\n      text-align: right;\n      font-size: 14px;\n      width: 100px; }\n  .product-cart-list .row-list .row-product .cell-change-price .popup-anchor button {\n        width: 100%;\n        text-align: right;\n        border-width: 0 0 1px;\n        border-style: solid;\n        border-bottom-color: #e1e1e1;\n        cursor: pointer;\n        padding: 0 0 1px;\n        background-color: transparent;\n        border-radius: 0 !important;\n        box-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n        height: 20px;\n        box-sizing: border-box; }\n  .product-cart-list .row-list .row-product .cell-change-price .popup-anchor span {\n        color: #e47885;\n        font-size: 12px; }\n  .product-cart-list .row-list .row-product .cell-price {\n      text-align: right;\n      font-size: 14px;\n      width: 120px;\n      margin-right: 10px;\n      font-weight: bold; }\n  .product-cart-list .row-list .row-product > [class^=\"cell-\"] {\n      padding: 0 5px;\n      float: left;\n      min-height: 1px; }\n  .product-cart-list .row-list ::ng-deep .cell-quatity .dx-editor-outlined {\n    background: transparent !important; }\n  .product-cart-list .row-list ::ng-deep .cell-quatity .dx-texteditor-container .dx-texteditor-input {\n    background: transparent !important;\n    text-align: right;\n    padding: 3px !important;\n    min-height: 24px; }\n  .product-cart-list .row-list:not(.not-batch) {\n    padding-bottom: 5px; }\n  .product-cart-list .row-list:not(.not-batch):nth-child(odd) {\n      background-color: #fafafa; }\n  .product-cart-list .row-list:hover .row-product .btn-icon {\n    display: initial; }\n  .product-cart-list .row-list > [class^=\"cell-\"] {\n    padding: 15px 5px 0;\n    float: left; }\n  .discount {\n  width: 33px;\n  height: 27px;\n  top: 0;\n  background-color: #999999;\n  color: #ffffff !important;\n  font-size: 13px;\n  padding: 5px 0;\n  text-align: center;\n  border-radius: 2px;\n  margin-left: 1px;\n  position: absolute; }\n  .discount:hover {\n    background-color: #317133; }\n  .discount.active {\n  background-color: #4bac4d !important; }\n  ::ng-deep .dx-overlay-wrapper .dx-overlay-content {\n  -webkit-transform: translate(207px, 182px);\n          transform: translate(207px, 182px); }\n  ::ng-deep .dx-overlay-wrapper .dx-overlay-content .dx-popup-content {\n    padding: 0; }\n"

/***/ }),

/***/ "./src/app/components/md-sell/product-cart/product-cart.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/md-sell/product-cart/product-cart.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCartComponent", function() { return ProductCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCartComponent = /** @class */ (function () {
    function ProductCartComponent() {
        this.isNoteProductPopover = false;
        this.isChangePriceProductPopover = false;
    }
    ProductCartComponent.prototype.ngOnInit = function () {
    };
    ProductCartComponent.prototype.onAddNoteProduct = function (product_code) {
        this.isOpenPopover_id = product_code;
        this.isNoteProductPopover = !this.isNoteProductPopover;
    };
    ProductCartComponent.prototype.onUpQuantityProduct = function (indexProduct) {
        var product = this.invoice.products[indexProduct];
        product.quantity += 1;
        this.invoice.total_quantity += 1;
        this.invoice.total += product.price;
        product.paid_amount = product.quantity * product.price;
    };
    ProductCartComponent.prototype.onDownQuantityProduct = function (indexProduct) {
        var product = this.invoice.products[indexProduct];
        if (product.quantity > 1) {
            product.quantity -= 1;
            this.invoice.total_quantity -= 1;
            this.invoice.total -= product.price;
        }
        product.paid_amount = product.quantity * product.price;
    };
    ProductCartComponent.prototype.onKeyUpChangeQuantity = function (e, index) {
        var event = e.event, str = event.key || String.fromCharCode(event.which);
        if (!/[0-9]/.test(str)) {
            event.preventDefault();
        }
        var product = this.invoice.products[index];
        var previousQuantity = product.paid_amount / product.price;
        var previousPaidAmount = product.paid_amount;
        product.paid_amount = product.quantity * product.price;
        this.invoice.total_quantity += (product.quantity - previousQuantity);
        this.invoice.total += (product.paid_amount - previousPaidAmount);
    };
    ProductCartComponent.prototype.onChangePriceProduct = function (product_code) {
        this.isOpenPopover_id = product_code;
        this.isChangePriceProductPopover = !this.isChangePriceProductPopover;
    };
    ProductCartComponent.prototype.onChangeDiscount = function (e, index) {
        var event = e.event, str = event.key || String.fromCharCode(event.which);
        if (!/[0-9]/.test(str)) {
            event.preventDefault();
        }
        var product = this.invoice.products[index];
        var paid_amount = product.paid_amount;
        var discount = e.component._options.value;
        var price = product.discount.price;
        if (!discount || discount === 0) {
            product.price = price;
        }
        else {
            if (discount > price) {
                product.discount.discount = price;
                e.component._options.text = price;
                product.price = 0;
                this.max = price;
            }
            else {
                if (product.discount.conversion_form === '$') {
                    product.price = price - discount;
                }
                if (product.discount.conversion_form === '%') {
                    product.price = price - (price * product.discount.discount) / 100;
                }
            }
        }
        product.paid_amount = product.quantity * product.price;
        this.invoice.total -= paid_amount - product.paid_amount;
    };
    ProductCartComponent.prototype.onChangePrice = function (e, index) {
        var event = e.event, str = event.key || String.fromCharCode(event.which);
        if (!/[0-9]/.test(str)) {
            event.preventDefault();
        }
        else {
            var priceNew = e.component._options.value;
            var product = this.invoice.products[index];
            var price = product.discount.price;
            var paid_amount = product.paid_amount;
            if (!priceNew || priceNew === 0) {
                product.discount.discount = price;
                product.price = 0;
            }
            else {
                if (priceNew > price) {
                    product.discount.discount = null;
                }
                else {
                    if (product.discount.conversion_form === '$') {
                        product.discount.discount = price - priceNew;
                    }
                    if (product.discount.conversion_form === '%') {
                        product.discount.discount = ((price - priceNew) / price) * 100;
                    }
                }
            }
            product.paid_amount = product.quantity * product.price;
            this.invoice.total -= paid_amount - product.paid_amount;
        }
    };
    ProductCartComponent.prototype.onDeleteProduct = function (indexProduct) {
        this.invoice.products.splice(indexProduct, 1);
    };
    ProductCartComponent.prototype.setDiscountForm = function (e, product) {
        if (e.currentTarget.text === '$') {
            product.discount.conversion_form = '$';
            this.max = null;
            product.discount.discount = (product.discount.price * product.discount.discount) / 100;
        }
        if (e.currentTarget.text === '%') {
            product.discount.conversion_form = '%';
            this.max = 100;
            product.discount.discount = parseFloat(((product.discount.discount / product.discount.price) * 100).toFixed(2));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_1__["InvoiceReportModel"])
    ], ProductCartComponent.prototype, "invoice", void 0);
    ProductCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-cart',
            template: __webpack_require__(/*! ./product-cart.component.html */ "./src/app/components/md-sell/product-cart/product-cart.component.html"),
            styles: [__webpack_require__(/*! ./product-cart.component.scss */ "./src/app/components/md-sell/product-cart/product-cart.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCartComponent);
    return ProductCartComponent;
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
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["ProductCartComponent"],
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["SellCustomerDetailComponent"],
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["CustomerSearchComponent"],
                _components_md_sell__WEBPACK_IMPORTED_MODULE_3__["CartTabsComponent"],
            ]
        })
    ], SellGoodsModule);
    return SellGoodsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-sell-goods-sell-goods-module.js.map