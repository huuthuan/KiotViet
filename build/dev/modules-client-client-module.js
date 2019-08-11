(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-client-client-module"],{

/***/ "./src/app/components/md-admin/category/category.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/category/category.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row mt-2\">\n            <div class=\"col-lg-4\">\n                <div class=\"label mt-lg-2\">Category name</div>\n            </div>\n            <div class=\"col-lg-8\">\n                <dx-text-box [(value)]=\"editing_Category.name\">\n                    <dx-validator>\n                        <dxi-validation-rule type=\"required\"\n                                             message=\"Category name is required\"></dxi-validation-rule>\n                    </dx-validator>\n                </dx-text-box>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-lg-4\">\n                <div class=\"label mt-lg-2\">Parent</div>\n            </div>\n            <div class=\"col-lg-8\">\n                <dx-drop-down-box\n                        [(value)]=\"treeBoxValue\"\n                        valueExpr=\"id\"\n                        displayExpr=\"name\"\n                        placeholder=\"Category\"\n                        [dataSource]=\"lookupCategories\"\n                        [showClearButton]=\"true\"\n                        (onValueChanged)=\"syncTreeViewSelection($event)\">\n                    <div *dxTemplate=\"let data of 'content'\">\n                        <dx-tree-view #serviceCategoryTree\n                                      [dataSource]=\"lookupCategories\"\n                                      dataStructure=\"plain\"\n                                      keyExpr=\"id\"\n                                      displayExpr=\"name\"\n                                      parentIdExpr=\"parentId\"\n                                      selectionMode=\"single\"\n                                      [selectByClick]=\"true\"\n                                      (onContentReady)=\"$event.component.selectItem(treeBoxValue)\"\n                                      (onItemSelectionChanged)=\"treeView_itemSelectionChanged($event)\">\n                        </dx-tree-view>\n                    </div>\n                </dx-drop-down-box>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-2\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"!isFormDirty || isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button *ngIf=\"isShowBtnDelete\" width=\"85\" text=\"Delete\" type=\"danger\"\n                           [(disabled)]=\"isSubmitting\"\n                           (onClick)=\"onDeleteCategory($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelClick()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n"

/***/ }),

/***/ "./src/app/components/md-admin/category/category.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/category/category.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/category/category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/md-admin/category/category.component.ts ***!
  \********************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utilities */ "./src/app/utils/utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"]();
        this.editing_Category = new _models__WEBPACK_IMPORTED_MODULE_5__["CategoryLookupModel"]();
        this.isSubmitting = false;
        this.isShowBtnDelete = false;
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CategoryComponent.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorySubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadParent();
        this.editing_Category = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.category);
        if (this.editing_Category.id) {
            this.isShowBtnDelete = true;
        }
        if (this.editing_Category.parentId) {
            var selected_categories = [];
            selected_categories.push(this.editing_Category.parentId);
            this.treeBoxValue = selected_categories;
            this.syncTreeViewSelection();
        }
    };
    CategoryComponent.prototype.loadParent = function () {
        var _this = this;
        this.apiService.get(this.apiService.apiUrl + "/product/lookup/categories").subscribe(function (data) {
            _this.lookupCategories = data;
        });
    };
    CategoryComponent.prototype.onCancelClick = function () {
        this.onCancel.emit();
    };
    CategoryComponent.prototype.syncTreeViewSelection = function () {
        if (!this.treeView)
            return;
        if (!this.treeBoxValue) {
            this.treeView.instance.unselectAll();
        }
        else {
            this.treeView.instance.selectItem(this.treeBoxValue);
        }
    };
    CategoryComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [], that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };
    CategoryComponent.prototype.treeView_itemSelectionChanged = function (e) {
        var nodes = e.component.getNodes();
        this.treeBoxValue = this.getSelectedItemsKeys(nodes);
    };
    CategoryComponent.prototype.onAddCategory = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.treeBoxValue) {
            this.editing_Category.parentId = parseInt(this.treeBoxValue[0]);
        }
        this.apiService.post(this.apiService.apiUrl + "/product/categories/", this.editing_Category).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifySuccess('Category has been added successfully.');
            _this.isSubmitting = false;
        }, function (error) {
            _this.isSubmitting = false;
            if (error.message) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifyError(error.message);
            }
            else {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifyError('An error has occurred. Please try again.');
            }
        }, function () {
            _this.isSubmitting = false;
        });
    };
    CategoryComponent.prototype.onUpdateCategory = function () {
        var _this = this;
        this.isSubmitting = true;
        if (this.treeBoxValue) {
            this.editing_Category.parentId = parseInt(this.treeBoxValue[0]);
        }
        else {
            this.editing_Category.parentId = null;
        }
        this.apiService.update(this.apiService.apiUrl + "/product/categories/" + this.editing_Category.id, this.editing_Category).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifySuccess('Category has been added successfully.');
            _this.isSubmitting = false;
        }, function (error) {
            _this.isSubmitting = false;
            if (error.message) {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifyError(error.message);
            }
            else {
                _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifyError('An error has occurred. Please try again.');
            }
        }, function () {
            _this.isSubmitting = false;
        });
    };
    CategoryComponent.prototype.onDeleteCategory = function () {
        var _this = this;
        var message = 'Are you sure you want to delete this category?';
        var title = 'Delete Category';
        Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__["confirm"])(message, title).then(function (result) {
            if (result) {
                _this.apiService.delete(_this.apiService.apiUrl + "/product/categories/" + _this.editing_Category.id, _this._category)
                    .subscribe(function () {
                    _this.onSuccess.emit();
                    _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifySuccess('Category has been deleted successfully');
                }, function (error) {
                    if (error.message) {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifyError(error.message);
                    }
                    else {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_6__["Utils"].notifyError('An error has occurred. Please try again.');
                    }
                });
            }
        });
    };
    CategoryComponent.prototype.onSaveClick = function (e) {
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        if (this.category.id) {
            this.onUpdateCategory();
        }
        else {
            this.onAddCategory();
        }
    };
    Object.defineProperty(CategoryComponent.prototype, "isFormDirty", {
        get: function () {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this.editing_Category, this.category);
        },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.ngOnDestroy = function () {
        this.categorySubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"]),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "treeView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["CategoryLookupModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_5__["CategoryLookupModel"]])
    ], CategoryComponent.prototype, "category", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CategoryComponent.prototype, "onCancel", void 0);
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/components/md-admin/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/components/md-admin/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/customer-detail/customer-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/md-admin/customer-detail/customer-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Customer name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Customer.name\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Product name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Birthday</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-date-box type=\"date\" width=\"100%\"\n                                     [dateSerializationFormat]=\"'yyyy-MM-dd'\"\n                                     [(value)]=\"editing_Customer.birthday\">\n                        </dx-date-box>\n                    </div>\n                </div>\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Gender</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-check-box [(value)]=\"genderMale\"\n                                      [width]=\"80\"\n                                      text=\"Male\"\n                                      (onValueChanged)=\"genderMaleChanged()\"></dx-check-box>\n                        <dx-check-box [(value)]=\"genderFemale\"\n                                      [width]=\"80\"\n                                      text=\"Female\"\n                                      (onValueChanged)=\"genderFemaleChanged()\"></dx-check-box>\n                    </div>\n                </div>\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Phone</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box\n                                [(value)]=\"editing_Customer.phone\"\n                                mask=\"+1 (X00) 000-000\"\n                                [maskRules]=\"phoneRules\"\n                                maskInvalidMessage=\"The phone must have a correct USA phone format\"\n                                [useMaskedValue]=\"true\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\"\n                                                     message=\"The phone must have a correct USA phone format\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Email</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_Customer.email\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"email\" message=\"Invalid email\">\n                                </dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Tax code</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Customer.tax_code\">\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Address</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Customer.address\">\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Note</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-area height=\"100\" [(value)]=\"editing_Customer.note\" maxLength=\"255\">\n                        </dx-text-area>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-5 mr-5 mb-3\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"!isFormDirty || isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelCustomer()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n"

/***/ }),

/***/ "./src/app/components/md-admin/customer-detail/customer-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/md-admin/customer-detail/customer-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/customer-detail/customer-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/md-admin/customer-detail/customer-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return CustomerDetailComponent; });
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






var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(userService, apiService) {
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
    Object.defineProperty(CustomerDetailComponent.prototype, "customer", {
        get: function () {
            return this._customer;
        },
        set: function (value) {
            this._customer = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.editing_Customer = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.customer);
        if (this.editing_Customer.gender === 'Male') {
            this.genderMale = true;
        }
        else {
            if (this.editing_Customer.gender === 'Female') {
                this.genderFemale = true;
            }
        }
    };
    CustomerDetailComponent.prototype.onCancelCustomer = function () {
        this.onCancel.emit();
    };
    CustomerDetailComponent.prototype.genderMaleChanged = function () {
        if (this.genderFemale)
            this.genderFemale = !this.genderMale;
    };
    CustomerDetailComponent.prototype.genderFemaleChanged = function () {
        if (this.genderMale)
            this.genderMale = !this.genderFemale;
    };
    CustomerDetailComponent.prototype.onAddCustomer = function () {
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
    CustomerDetailComponent.prototype.onUpdateCustomer = function () {
        var _this = this;
        this.isSubmitting = true;
        this.editing_Customer.modified_date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.customerDateStart, 'yyyy-MM-dd', 'en-US', '+0530');
        if (this.genderMale)
            this.editing_Customer.gender = 'Male';
        else if (this.genderFemale)
            this.editing_Customer.gender = 'Female';
        this.apiService.update(this.apiService.apiUrl + "/sell-goods/customers/" + this.editing_Customer.id, this.editing_Customer).subscribe(function (data) {
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
    CustomerDetailComponent.prototype.onSaveClick = function (e) {
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        if (this.customer.id) {
            this.onUpdateCustomer();
        }
        else {
            this.onAddCustomer();
        }
    };
    Object.defineProperty(CustomerDetailComponent.prototype, "isFormDirty", {
        get: function () {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.editing_Customer, this.customer);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailModel"]])
    ], CustomerDetailComponent.prototype, "customer", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerDetailComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerDetailComponent.prototype, "onCancel", void 0);
    CustomerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__(/*! ./customer-detail.component.html */ "./src/app/components/md-admin/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__(/*! ./customer-detail.component.scss */ "./src/app/components/md-admin/customer-detail/customer-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/customer/customer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/customer/customer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-10 col-lg-10\">\r\n        <div class=\"row mb-3\">\r\n            <div class=\"col text-lg-right\">\r\n                <dx-button class=\"mr-1\" type=\"default\" (onClick)=\"onAddCustomer()\">\r\n                    <i class=\"fas fa-plus mr-2\"></i>Add new customer\r\n                </dx-button>\r\n            </div>\r\n        </div>\r\n        <app-loading-panel *ngIf=\"isLoading\"></app-loading-panel>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <dx-data-grid [dataSource]=\"dataSource\"\r\n                              [showBorders]=\"true\"\r\n                              [showColumnLines]=\"true\"\r\n                              [rowAlternationEnabled]=\"true\"\r\n                              [allowColumnReordering]=\"true\"\r\n                              [allowColumnResizing]=\"true\"\r\n                              [columnAutoWidth]=\"true\"\r\n                              [filterRow]=\"true\"\r\n                              [hoverStateEnabled]=\"true\">\r\n                    <dxo-selection [mode]=\"'row'\"></dxo-selection>\r\n                    <dxo-paging [pageSize]=\"10\"></dxo-paging>\r\n                    <dxi-column caption=\"#\" [allowFiltering]=\"false\" [fixed]=\"true\" alignment=\"center\" width=\"40\"\r\n                                cellTemplate=\"cellTemplateNumberOfRow\">\r\n                        <div *dxTemplate=\"let cellData of 'cellTemplateNumberOfRow'\">\r\n                            {{ cellData.row.rowIndex + 1 }}\r\n                        </div>\r\n                    </dxi-column>\r\n                    <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\r\n\r\n                    <dxi-column dataField=\"customer_code\" caption=\"Customer code\" [fixed]=\"true\" [width]=\"120\" [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"name\" caption=\"Name\" [width]=\"150\" [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"phone\" caption=\"Phone\" [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"gender\" caption=\"Gender\" format=\"$ #,##0.##\" [width]=\"75\"\r\n                                [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"birthday\" width=\"100\" caption=\"Birthday\"\r\n                                cellTemplate=\"cellTemplateStartTime\">\r\n                        <div *dxTemplate=\"let cellData of 'cellTemplateStartTime'\">\r\n                            {{ (cellData.value) | date: 'MM/dd/yyyy' }}\r\n                        </div>\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"email\" caption=\"Email\" [width]=\"150\" [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"created_date\" width=\"100\" caption=\"Created date\"\r\n                                cellTemplate=\"cellTemplateStartTime\">\r\n                        <div *dxTemplate=\"let cellData of 'cellTemplateStartTime'\">\r\n                            {{ (cellData.value) | date: 'MM/dd/yyyy' }}\r\n                        </div>\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"address\" caption=\"Address\" [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\" width=\"150\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"total_quantity\" caption=\"Total quantity\" format=\"$ #,##0.##\" [width]=\"110\"\r\n                                [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"total\" caption=\"Total\" format=\"$ #,##0.##\" [width]=\"130\"\r\n                                [allowFiltering]=\"true\"\r\n                                [allowHeaderFiltering]=\"true\">\r\n                    </dxi-column>\r\n                    <dxi-column dataField=\"id\" [width]=\"80\" caption=\"Action\" alignment=\"center\"\r\n                                cellTemplate=\"cellTemplateAction\"\r\n                                [allowSorting]=\"false\">\r\n                        <div *dxTemplate=\"let cellData of 'cellTemplateAction'\" class=\"d-flex\">\r\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onEditCustomerTemplate(cellData.data)\">\r\n                                <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\" title=\"Edit product\"></i>\r\n                            </div>\r\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onDeleteCustomerTemplate(cellData.data)\">\r\n                                <i class=\"fa fa-times\" aria-hidden=\"true\" title=\"Delete\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </dxi-column>\r\n                </dx-data-grid>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-2 col-lg-2 border-left\">\r\n        <app-search-form\r\n                (onFilter)=\"onFilterGrid($event)\"\r\n                [search_options]=\"search_options\">\r\n        </app-search-form>\r\n    </div>\r\n</div>\r\n\r\n<!--Detail product-->\r\n<div class=\"popup-container\" *ngIf=\"isCustomerPopup\">\r\n    <dx-popup [title]=\"customerPopupTitle\" [width]=\"900\" height=\"auto\" [(visible)]=\"isCustomerPopup\"\r\n              [dragEnabled]=\"false\" class=\"center-popup\">\r\n        <div *dxTemplate=\"let data of 'content'\">\r\n            <app-customer-detail\r\n                    [(customer)]=\"selectedCustomer\"\r\n                    (onSuccess)=\"onSavedCustomer($event)\"\r\n                    (onCancel)=\"onCancelCustomer()\">\r\n            </app-customer-detail>\r\n        </div>\r\n    </dx-popup>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/md-admin/customer/customer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/customer/customer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/customer/customer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/md-admin/customer/customer.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__);
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






var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search_options = new _models__WEBPACK_IMPORTED_MODULE_5__["SearchOptions"]();
        this.isCustomerPopup = false;
        this.customerPopupTitle = 'New Insurance';
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"]();
        this.dataSource = [];
        this.isLoading = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadCustomer();
        this.search_options.customer = true;
    };
    CustomerComponent.prototype.loadCustomer = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.get(this.apiService.apiUrl + "/customers").subscribe(function (data) {
            _this.dataSource = data;
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    CustomerComponent.prototype.onAddCustomer = function () {
        this.customerPopupTitle = 'Add New Customer';
        this.selectedCustomer = new _models__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailModel"]();
        this.isCustomerPopup = true;
    };
    CustomerComponent.prototype.onEditCustomerTemplate = function (customer) {
        this.customerPopupTitle = 'Edit Customer';
        this.selectedCustomer = customer;
        this.isCustomerPopup = true;
    };
    CustomerComponent.prototype.onSavedCustomer = function () {
        this.isCustomerPopup = false;
        this.loadCustomer();
    };
    CustomerComponent.prototype.onFilterGrid = function (searchFilter) {
        if (searchFilter) {
            if (searchFilter.customerName) {
                this.dataGrid.instance.filter([['name', '=', searchFilter.customerName],
                    'OR', ['customer_code', '=', searchFilter.customerName],
                    'OR', ['phone', '=', searchFilter.customerName]]);
                if (searchFilter.note) {
                    this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
                }
            }
            else {
                if (searchFilter.note) {
                    this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
                }
                else {
                    this.dataGrid.instance.clearFilter();
                }
            }
        }
    };
    CustomerComponent.prototype.onDeleteCustomerTemplate = function (customer) {
        var _this = this;
        var message = 'Are you sure you want to delete this product ?';
        var title = 'Delete Template';
        Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__["confirm"])(message, title).then(function (result) {
            if (result) {
                _this.apiService.delete(_this.apiService.apiUrl + "/customers/" + customer.id, customer)
                    .subscribe(function () {
                    _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifySuccess('Customer has been deleted successfully');
                    _this.loadCustomer();
                }, function (error) {
                    if (error.message) {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError(error.message);
                    }
                    else {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError('An error has occurred. Please try again.');
                    }
                });
            }
        });
    };
    CustomerComponent.prototype.onCancelCustomer = function () {
        this.isCustomerPopup = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], CustomerComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["SearchOptions"])
    ], CustomerComponent.prototype, "search_options", void 0);
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/md-admin/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/components/md-admin/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/employees-detail/employees-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/md-admin/employees-detail/employees-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row\">\n            <div class=\"col-lg-6\">\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">First name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Employee.first_name\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Full name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Last name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Employee.last_name\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Full name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Gender</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <div>\n                            <dx-check-box [(value)]=\"genderMale\"\n                                          [width]=\"80\"\n                                          text=\"Male\"\n                                          (onValueChanged)=\"genderMaleChanged()\"></dx-check-box>\n                            <dx-check-box [(value)]=\"genderFemale\"\n                                          [width]=\"80\"\n                                          text=\"Female\"\n                                          (onValueChanged)=\"genderFemaleChanged()\"></dx-check-box>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Birthday</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-date-box type=\"date\" width=\"100%\"\n                                     [dateSerializationFormat]=\"'yyyy-MM-dd'\"\n                                     [(value)]=\"editing_Employee.profile.date_birth\">\n                        </dx-date-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">User name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_Employee.username\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"User name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\" *ngIf=\"!editing_Employee.id\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Password</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_Employee.password\"\n                                     mode=\"password\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Password is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\" *ngIf=\"!editing_Employee.id\">\n                    <div class=\"col-lg-4\">\n                        <div class=\"label mt-lg-2\">Confirm password</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_Employee.confirm_password\"\n                                     mode=\"password\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Password is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row text-left mt-2\" *ngIf=\"editing_Employee.id\">\n                    <div class=\"col-lg-12 change-password\" routerLinkActive=\"active\"\n                         [routerLink]=\"['/change-password']\"> Change your password\n                    </div>\n                </div>\n                <div class=\"row text-left mt-2\" >\n                    <div class=\"col-lg-12 col-activer mt-3\">\n                        <dx-check-box [(value)]=\"editing_Employee.is_active\"\n                                      [width]=\"80\"\n                                      text=\"Active\"></dx-check-box>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Role</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-select-box [dataSource]=\"roles\"\n                                       displayExpr=\"name\"\n                                       valueExpr=\"id\" placeholder=\"Select role...\"\n                                       [(value)]=\"editing_Employee.profile.role\"\n                                       [searchEnabled]=\"true\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\" message=\"Role is required\">\n                                </dxi-validation-rule>\n                            </dx-validator>\n                        </dx-select-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Phone</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box\n                                [(value)]=\"editing_Employee.profile.phone\"\n                                mask=\"+1 (X00) 000-000\"\n                                [maskRules]=\"phoneRules\"\n                                maskInvalidMessage=\"The phone must have a correct USA phone format\"\n                                [useMaskedValue]=\"true\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"pattern\" [pattern]=\"phonePattern\"\n                                                     message=\"The phone must have a correct USA phone format\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Email</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_Employee.email\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\" message=\"Email is required.\">\n                                </dxi-validation-rule>\n                                <dxi-validation-rule type=\"email\" message=\"Invalid email\">\n                                </dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Address</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Employee.profile.address\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Password is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Note</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-area height=\"100\" [(value)]=\"editing_Employee.profile.note\" maxLength=\"255\">\n                        </dx-text-area>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-5 mr-5 mb-3\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"!isFormDirty || isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelEmployee()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n\n"

/***/ }),

/***/ "./src/app/components/md-admin/employees-detail/employees-detail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/md-admin/employees-detail/employees-detail.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".change-password {\n  color: #337ab7;\n  font-style: italic;\n  padding-left: 164px; }\n  .change-password:hover {\n    text-decoration: underline;\n    color: #007bff; }\n  .col-activer {\n  padding-left: 165px; }\n"

/***/ }),

/***/ "./src/app/components/md-admin/employees-detail/employees-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/md-admin/employees-detail/employees-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: EmployeesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesDetailComponent", function() { return EmployeesDetailComponent; });
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





var EmployeesDetailComponent = /** @class */ (function () {
    function EmployeesDetailComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_4__["LoggedUser"]();
        this.roles = [];
        this.isSubmitting = false;
        this.isOnReadOnlyRole = false;
        this.phonePattern = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{3}$/;
        this.phoneRules = {
            X: /[02-9]/
        };
        this.customerDateStart = new Date();
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(EmployeesDetailComponent.prototype, "employee", {
        get: function () {
            return this._employee;
        },
        set: function (value) {
            this._employee = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.editing_Employee = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.employee);
        debugger;
        if (!this.editing_Employee.id) {
            this.editing_Employee.is_active = true;
        }
        this.loadRole();
    };
    EmployeesDetailComponent.prototype.loadRole = function () {
        var _this = this;
        this.apiService.get(this.apiService.apiUrl + "/auth/roles").subscribe(function (data) {
            _this.roles = data;
        }, function (error) {
            console.error(error);
        });
    };
    EmployeesDetailComponent.prototype.onCancelEmployee = function () {
        this.onCancel.emit();
    };
    EmployeesDetailComponent.prototype.genderMaleChanged = function () {
        if (this.genderFemale) {
            this.genderFemale = !this.genderMale;
        }
    };
    EmployeesDetailComponent.prototype.genderFemaleChanged = function () {
        if (this.genderMale) {
            this.genderMale = !this.genderFemale;
        }
    };
    EmployeesDetailComponent.prototype.onAddEmployee = function () {
        var _this = this;
        this.isSubmitting = true;
        this.apiService.post(this.apiService.apiUrl + "/auth/employees/", this.editing_Employee).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Customer has been added successfully.');
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
    EmployeesDetailComponent.prototype.onUpdateEmployee = function () {
        var _this = this;
        this.isSubmitting = true;
        this.apiService.update(this.apiService.apiUrl + "/auth/employees/" + this.editing_Employee.id, this.editing_Employee).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Customer has been added successfully.');
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
    EmployeesDetailComponent.prototype.onSaveClick = function (e) {
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        if (this.employee.id) {
            this.onUpdateEmployee();
        }
        else {
            this.onAddEmployee();
        }
    };
    Object.defineProperty(EmployeesDetailComponent.prototype, "isFormDirty", {
        get: function () {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.editing_Employee, this.employee);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_4__["AccountEmployeeModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_4__["AccountEmployeeModel"]])
    ], EmployeesDetailComponent.prototype, "employee", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeesDetailComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeesDetailComponent.prototype, "onCancel", void 0);
    EmployeesDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees-detail',
            template: __webpack_require__(/*! ./employees-detail.component.html */ "./src/app/components/md-admin/employees-detail/employees-detail.component.html"),
            styles: [__webpack_require__(/*! ./employees-detail.component.scss */ "./src/app/components/md-admin/employees-detail/employees-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], EmployeesDetailComponent);
    return EmployeesDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/employees/employees.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/md-admin/employees/employees.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 col-lg-10\">\n        <div class=\"row mb-3\">\n            <div class=\"col text-lg-right\">\n                <dx-button class=\"mr-1\" type=\"default\" (onClick)=\"onAddEmployee()\">\n                    <i class=\"fas fa-plus mr-2\"></i>Add new employee\n                </dx-button>\n            </div>\n        </div>\n        <app-loading-panel *ngIf=\"isLoading\"></app-loading-panel>\n        <div class=\"row\">\n            <div class=\"col\">\n                <dx-data-grid [dataSource]=\"dataSource\"\n                              [showBorders]=\"true\"\n                              [showColumnLines]=\"true\"\n                              [rowAlternationEnabled]=\"true\"\n                              [allowColumnReordering]=\"true\"\n                              [allowColumnResizing]=\"true\"\n                              [columnAutoWidth]=\"true\"\n                              [filterRow]=\"true\"\n                              [hoverStateEnabled]=\"true\">\n                    <dxo-selection [mode]=\"'row'\"></dxo-selection>\n                    <dxo-paging [pageSize]=\"10\"></dxo-paging>\n                    <dxi-column caption=\"#\" [allowFiltering]=\"false\" [fixed]=\"true\" alignment=\"center\" width=\"40\"\n                                cellTemplate=\"cellTemplateNumberOfRow\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateNumberOfRow'\">\n                            {{ cellData.row.rowIndex + 1 }}\n                        </div>\n                    </dxi-column>\n                    <dxo-column-fixing [enabled]=\"true\"></dxo-column-fixing>\n                    <dxi-column dataField=\"username\" caption=\"User name\" [width]=\"120\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"profile.name\" caption=\"Full name\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"profile.date_birth\" width=\"100\" caption=\"Birthday\"\n                                cellTemplate=\"cellTemplateStartTime\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateStartTime'\">\n                            {{ (cellData.value) | date: 'MM/dd/yyyy' }}\n                        </div>\n                    </dxi-column>\n                    <dxi-column dataField=\"profile.phone\" caption=\"Phone\" [width]=\"120\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"email\" caption=\"Email\" [width]=\"160\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"profile.address\" caption=\"Address\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\" width=\"160\">\n                    </dxi-column>\n                    <dxi-column dataField=\"is_active\" caption=\"Status\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\" width=\"60\">\n                    </dxi-column>\n                    <dxi-column dataField=\"id\" [width]=\"80\" caption=\"Action\" alignment=\"center\"\n                                cellTemplate=\"cellTemplateAction\"\n                                [allowSorting]=\"false\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateAction'\" class=\"d-flex\">\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onEditEmployeeTemplate(cellData.data)\">\n                                <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\" title=\"Edit employee\"></i>\n                            </div>\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onDeleteEmployeeTemplate(cellData.data)\">\n                                <i class=\"fa fa-times\" aria-hidden=\"true\" title=\"Delete\"></i>\n                            </div>\n                        </div>\n                    </dxi-column>\n                </dx-data-grid>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-2 col-lg-2 border-left\">\n\n    </div>\n</div>\n\n<!--Detail product-->\n<div class=\"popup-container\" *ngIf=\"isEmployeePopup\">\n    <dx-popup [title]=\"employeePopupTitle\" [width]=\"900\" height=\"auto\" [(visible)]=\"isEmployeePopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-employees-detail\n                    [(employee)]=\"selectedEmployee\"\n                    (onSuccess)=\"onSavedEmployee($event)\"\n                    (onCancel)=\"onCancelEmployee()\">\n            </app-employees-detail>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-admin/employees/employees.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/md-admin/employees/employees.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/employees/employees.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/employees/employees.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__);
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






var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isEmployeePopup = false;
        this.employeePopupTitle = 'New Insurance';
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"]();
        this.dataSource = [];
        this.isLoading = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadEmployee();
        // this.search_options.customer = true;
    };
    EmployeesComponent.prototype.loadEmployee = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.get(this.apiService.apiUrl + "/auth/employees").subscribe(function (data) {
            _this.dataSource = data;
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    EmployeesComponent.prototype.onAddEmployee = function () {
        this.employeePopupTitle = 'Add New Employee';
        this.selectedEmployee = new _models__WEBPACK_IMPORTED_MODULE_5__["UpdateAccountEmployeeModel"]();
        this.isEmployeePopup = true;
    };
    EmployeesComponent.prototype.onEditEmployeeTemplate = function (employee) {
        this.employeePopupTitle = 'Edit Employee';
        this.selectedEmployee = _models__WEBPACK_IMPORTED_MODULE_5__["UpdateAccountEmployeeModel"].fromDetailModel(employee);
        this.isEmployeePopup = true;
    };
    EmployeesComponent.prototype.onSavedEmployee = function () {
        this.isEmployeePopup = false;
        this.loadEmployee();
    };
    // onFilterGrid(searchFilter) {
    //   if (searchFilter) {
    //     if (searchFilter.customerName) {
    //       this.dataGrid.instance.filter([['name', '=', searchFilter.customerName],
    //           'OR', ['customer_code', '=', searchFilter.customerName],
    //           'OR', ['phone', '=', searchFilter.customerName]]);
    //       if (searchFilter.note) {
    //         this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
    //       }
    //     } else {
    //       if (searchFilter.note) {
    //         this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
    //       } else {
    //         this.dataGrid.instance.clearFilter();
    //       }
    //     }
    //   }
    // }
    EmployeesComponent.prototype.onDeleteEmployeeTemplate = function (employee) {
        var _this = this;
        var message = 'Are you sure you want to delete this employee ?';
        var title = 'Delete Template';
        debugger;
        Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__["confirm"])(message, title).then(function (result) {
            if (result) {
                _this.apiService.delete(_this.apiService.apiUrl + "/auth/employees/" + employee.id, employee)
                    .subscribe(function () {
                    _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifySuccess('Employee has been deleted successfully');
                    _this.loadEmployee();
                }, function (error) {
                    if (error.message) {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError(error.message);
                    }
                    else {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError('An error has occurred. Please try again.');
                    }
                });
            }
        });
    };
    EmployeesComponent.prototype.onCancelEmployee = function () {
        this.isEmployeePopup = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], EmployeesComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployeesComponent.prototype, "onFilter", void 0);
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/components/md-admin/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.scss */ "./src/app/components/md-admin/employees/employees.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/index.ts":
/*!**********************************************!*\
  !*** ./src/app/components/md-admin/index.ts ***!
  \**********************************************/
/*! exports provided: ShopDetailComponent, ProductComponent, SearchFormComponent, ProductDetailComponent, CategoryComponent, CustomerComponent, CustomerDetailComponent, InvoicesComponent, InvoiceDetailComponent, EmployeesComponent, EmployeesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-detail/shop-detail.component */ "./src/app/components/md-admin/shop-detail/shop-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopDetailComponent", function() { return _shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_0__["ShopDetailComponent"]; });

/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/product.component */ "./src/app/components/md-admin/product/product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return _product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]; });

/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/components/md-admin/search-form/search-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_2__["SearchFormComponent"]; });

/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/components/md-admin/product-detail/product-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"]; });

/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/components/md-admin/category/category.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"]; });

/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/components/md-admin/customer/customer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return _customer_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"]; });

/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ "./src/app/components/md-admin/customer-detail/customer-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomerDetailComponent"]; });

/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/components/md-admin/invoices/invoices.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_7__["InvoicesComponent"]; });

/* harmony import */ var _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice-detail/invoice-detail.component */ "./src/app/components/md-admin/invoice-detail/invoice-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailComponent", function() { return _invoice_detail_invoice_detail_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceDetailComponent"]; });

/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/components/md-admin/employees/employees.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"]; });

/* harmony import */ var _employees_detail_employees_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees-detail/employees-detail.component */ "./src/app/components/md-admin/employees-detail/employees-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeesDetailComponent", function() { return _employees_detail_employees_detail_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesDetailComponent"]; });

/**
 * Created by Thuan Le on 03/12/2019.
 */













/***/ }),

/***/ "./src/app/components/md-admin/invoice-detail/invoice-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/md-admin/invoice-detail/invoice-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invoice-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/md-admin/invoice-detail/invoice-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/md-admin/invoice-detail/invoice-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/invoice-detail/invoice-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/md-admin/invoice-detail/invoice-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: InvoiceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDetailComponent", function() { return InvoiceDetailComponent; });
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

var InvoiceDetailComponent = /** @class */ (function () {
    function InvoiceDetailComponent() {
    }
    InvoiceDetailComponent.prototype.ngOnInit = function () {
    };
    InvoiceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-detail',
            template: __webpack_require__(/*! ./invoice-detail.component.html */ "./src/app/components/md-admin/invoice-detail/invoice-detail.component.html"),
            styles: [__webpack_require__(/*! ./invoice-detail.component.scss */ "./src/app/components/md-admin/invoice-detail/invoice-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceDetailComponent);
    return InvoiceDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/invoices/invoices.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/invoices/invoices.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  invoices works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/md-admin/invoices/invoices.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-admin/invoices/invoices.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/invoices/invoices.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/md-admin/invoices/invoices.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
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

var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent() {
    }
    InvoicesComponent.prototype.ngOnInit = function () {
    };
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.component.html */ "./src/app/components/md-admin/invoices/invoices.component.html"),
            styles: [__webpack_require__(/*! ./invoices.component.scss */ "./src/app/components/md-admin/invoices/invoices.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/product-detail/product-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/md-admin/product-detail/product-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Product code</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Product.id\">\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Product name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Product.name\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Product name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Category</div>\n                    </div>\n                    <div class=\"col-lg-7\">\n                        <dx-drop-down-box\n                                [(value)]=\"treeBoxValue\"\n                                valueExpr=\"id\"\n                                displayExpr=\"name\"\n                                placeholder=\"Category\"\n                                [dataSource]=\"lookupCategories\"\n                                [showClearButton]=\"true\"\n                                (onValueChanged)=\"syncTreeViewSelection($event)\">\n                            <div *dxTemplate=\"let data of 'content'\">\n                                <dx-tree-view #serviceCategoryTree\n                                              [dataSource]=\"lookupCategories\"\n                                              dataStructure=\"plain\"\n                                              keyExpr=\"id\"\n                                              displayExpr=\"name\"\n                                              parentIdExpr=\"parentId\"\n                                              selectionMode=\"single\"\n                                              [selectByClick]=\"true\"\n                                              (onContentReady)=\"$event.component.selectItem(treeBoxValue)\"\n                                              (onItemSelectionChanged)=\"treeView_itemSelectionChanged($event)\">\n                                </dx-tree-view>\n                            </div>\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Category is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-drop-down-box>\n                    </div>\n                    <dx-button class=\"mr-1\" type=\"default\" (onClick)=\"onAddCategory()\">\n                        <i class=\"fas fa-plus\" ></i>\n                    </dx-button>\n                </div>\n                <div class=\"row mt-2\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Price cost</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-number-box [(value)]=\"editing_Product.price_cost\"\n                                       placeholder=\"Enter order number\"\n                                       format=\"$ #,##0.##\"\n                                       rtlEnabled=\"true\"\n                        ></dx-number-box>\n                    </div>\n                </div>\n                <div class=\"row mt-2\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Price sale</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-number-box [(value)]=\"editing_Product.price_sale\"\n                                       placeholder=\"Enter order number\"\n                                       format=\"$ #,##0.##\"\n                                       rtlEnabled=\"true\"\n                        ></dx-number-box>\n                    </div>\n                </div>\n                <div class=\"row mt-2\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">On hand</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-number-box [(value)]=\"editing_Product.on_hand\"\n                                       placeholder=\"Enter order number\"\n                                       format=\"#,##0.##\"\n                                       rtlEnabled=\"true\">\n                        </dx-number-box>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-5\">\n                <div class=\"row\">\n                    <div class=\"product-upload mt-2\">\n                        <div class=\"row\">\n                            <div class=\"img-upload\">\n                                <ul *ngFor='let url of imageUrls' class=\"same\">\n                                    <li style=\"width: 40%; height: 150px\">\n                                        <img [src]=\"url\" height=\"100\">\n                                    </li>\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"upload-btn-wrapper\">\n                                <button class=\"btn\">Select file</button>\n                                <input type='file' (change)=\"onSelectFile($event)\" multiple/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"field\">\n                        <dx-check-box text=\"Allows sale\" [(value)]=\"editing_Product.allows_sale\">\n                        </dx-check-box>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"panel panel-default mt-3\">\n                <div class=\"panel-heading\">Inventory norms</div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-2\">\n                            <div class=\"label mt-lg-2\">At least</div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <dx-number-box [(value)]=\"editing_Product.min_quantity\"\n                                         format=\"#,##0.##\"\n                                         rtlEnabled=\"true\">\n                            </dx-number-box>\n                        </div>\n                        <div class=\"col-lg-2\">\n                            <div class=\"label  mt-lg-2\">The most</div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <dx-number-box [(value)]=\"editing_Product.max_quantity\"\n                                         format=\"#,##0.##\"\n                                         rtlEnabled=\"true\">\n                            </dx-number-box>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"panel panel-default\">\n                <dx-html-editor [(value)]=\"editing_Product.describe\" height=\"300\">\n                    <dxo-toolbar>\n                        <dxi-item> Describe</dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"undo\"></dxi-item>\n                        <dxi-item formatName=\"redo\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"header\" [formatValues]=\"[false, 1, 2, 3, 4, 5]\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"bold\"></dxi-item>\n                        <dxi-item formatName=\"italic\"></dxi-item>\n                        <dxi-item formatName=\"strike\"></dxi-item>\n                        <dxi-item formatName=\"underline\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"alignLeft\"></dxi-item>\n                        <dxi-item formatName=\"alignCenter\"></dxi-item>\n                        <dxi-item formatName=\"alignRight\"></dxi-item>\n                        <dxi-item formatName=\"alignJustify\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                    </dxo-toolbar>\n                </dx-html-editor>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-2\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"!isFormDirty || isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelProduct()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n\n<!--Detail Category-->\n<div class=\"popup-container\" *ngIf=\"isCategoryPopup\">\n    <dx-popup [title]=\"insurancePopupTitle\" [width]=\"500\" [(visible)]=\"isCategoryPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-category [(category)]=\"selectedCategory\"\n                          (onSuccess)=\"onCategorySuccess($event)\"\n                          (onCancel)=\"onCancelCategory()\">\n            </app-category>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-admin/product-detail/product-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/md-admin/product-detail/product-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  width: 100%;\n  margin-left: 15px;\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .panel .panel-body {\n    padding: 15px; }\n  .panel .panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  .dx-htmleditor-toolbar-wrapper {\n  background-color: #ddd !important; }\n  .panel-default {\n  border-color: #ddd; }\n  .panel-default .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n  .panel-default .panel-body {\n    border-top-color: #ddd;\n    border-bottom-color: #ddd; }\n  .product-upload {\n  min-height: 200px; }\n  .product-upload .img-upload {\n    width: 345px;\n    height: 145px; }\n  .product-upload .img-upload > ul.same {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0; }\n  .product-upload .img-upload > ul.same li {\n        list-style: none;\n        border: 1px dashed #ccc;\n        border-radius: 5px;\n        float: left;\n        width: 27%;\n        margin: 0 1% 2%;\n        height: 66px; }\n  .product-upload .upload-btn-wrapper {\n    position: relative;\n    overflow: hidden;\n    display: inline-block; }\n  .product-upload .upload-btn-wrapper .btn {\n      border: 1px solid gray;\n      color: gray;\n      background-color: white;\n      padding: 4px 10px;\n      border-radius: 1px; }\n  .product-upload .upload-btn-wrapper input[type=file] {\n    font-size: 10px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0; }\n"

/***/ }),

/***/ "./src/app/components/md-admin/product-detail/product-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/md-admin/product-detail/product-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utilities */ "./src/app/utils/utilities.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
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






var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCategoryPopup = false;
        this.insurancePopupTitle = 'New Insurance';
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"]();
        this.isSubmitting = false;
        this.imageUrls = [];
    }
    Object.defineProperty(ProductDetailComponent.prototype, "product", {
        get: function () {
            return this._product;
        },
        set: function (value) {
            this._product = value;
        },
        enumerable: true,
        configurable: true
    });
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadCategory();
        this.editing_Product = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.product);
        if (!this.editing_Product.id) {
            this.editing_Product.price_sale = 0;
            this.editing_Product.price_cost = 0;
            this.editing_Product.on_hand = 0;
            this.editing_Product.min_quantity = 0;
            this.editing_Product.max_quantity = 9999999;
        }
        else {
            if (this.editing_Product.category) {
                var selected_categories = [];
                selected_categories.push(this.product.category.id);
                this.treeBoxValue = selected_categories;
                this.syncTreeViewSelection();
            }
        }
    };
    ProductDetailComponent.prototype.loadCategory = function () {
        var _this = this;
        this.apiService.get(this.apiService.apiUrl + "/product/lookup/categories").subscribe(function (data) {
            _this.lookupCategories = data;
        });
    };
    ProductDetailComponent.prototype.onAddCategory = function () {
        this.selectedCategory = new _models__WEBPACK_IMPORTED_MODULE_5__["CategoryLookupModel"]();
        this.insurancePopupTitle = 'Add New Category';
        this.isCategoryPopup = true;
    };
    ProductDetailComponent.prototype.onCancelCategory = function () {
        this.isCategoryPopup = false;
    };
    ProductDetailComponent.prototype.onCategorySuccess = function () {
        this.loadCategory();
        this.onCancelCategory();
    };
    ProductDetailComponent.prototype.onCancelProduct = function () {
        this.onCancel.emit();
    };
    ProductDetailComponent.prototype.onAddProduct = function () {
        var _this = this;
        this.isSubmitting = true;
        this.editing_Product.category = parseInt(this.treeBoxValue[0]);
        this.editing_Product.urls = this.imageUrls;
        this.apiService.post(this.apiService.apiUrl + "/product/product-detail/", this.editing_Product).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Category has been added successfully.');
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
    ProductDetailComponent.prototype.onUpdateProduct = function () {
        var _this = this;
        this.isSubmitting = true;
        this.editing_Product.category = parseInt(this.treeBoxValue[0]);
        this.editing_Product.urls = this.imageUrls;
        this.apiService.update(this.apiService.apiUrl + "/product/product-detail/" + this.editing_Product.id, this.editing_Product).subscribe(function (data) {
            _this.onSuccess.emit();
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Category has been added successfully.');
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
    ProductDetailComponent.prototype.onSaveClick = function (e) {
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        if (this.product.id) {
            this.onUpdateProduct();
        }
        else {
            this.onAddProduct();
        }
    };
    ProductDetailComponent.prototype.syncTreeViewSelection = function () {
        if (!this.treeView)
            return;
        if (!this.treeBoxValue) {
            this.treeView.instance.unselectAll();
        }
        else {
            this.treeView.instance.selectItem(this.treeBoxValue);
        }
    };
    ProductDetailComponent.prototype.getSelectedItemsKeys = function (items) {
        var result = [], that = this;
        items.forEach(function (item) {
            if (item.selected) {
                result.push(item.key);
            }
            if (item.items.length) {
                result = result.concat(that.getSelectedItemsKeys(item.items));
            }
        });
        return result;
    };
    ProductDetailComponent.prototype.treeView_itemSelectionChanged = function (e) {
        this.editing_Product.category = e.itemData;
        var nodes = e.component.getNodes();
        this.treeBoxValue = this.getSelectedItemsKeys(nodes);
    };
    ProductDetailComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var filesAmount = event.target.files.length;
            for (var i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    console.log(event.target.result);
                    _this.imageUrls.push(event.target.result);
                };
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.productSubscription.unsubscribe();
    };
    Object.defineProperty(ProductDetailComponent.prototype, "isFormDirty", {
        get: function () {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(this.editing_Product, this.product);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["ProductDetailModel"]),
        __metadata("design:paramtypes", [_models__WEBPACK_IMPORTED_MODULE_5__["ProductDetailModel"]])
    ], ProductDetailComponent.prototype, "product", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"]),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "treeView", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/components/md-admin/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/components/md-admin/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/product/product.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/md-admin/product/product.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 col-lg-10\">\n        <div class=\"row mb-3\">\n            <div class=\"col text-lg-right\">\n                <dx-button class=\"mr-1\" type=\"default\" (onClick)=\"onAddProduct()\">\n                    <i class=\"fas fa-plus mr-2\"></i>Add new product\n                </dx-button>\n            </div>\n        </div>\n        <app-loading-panel *ngIf=\"isLoading\"></app-loading-panel>\n        <div class=\"row\">\n            <div class=\"col\">\n                <dx-data-grid [dataSource]=\"dataSource\"\n                              [filterRow]=\"true\"\n                              [showBorders]=\"true\"\n                              [showColumnLines]=\"true\"\n                              [hoverStateEnabled]=\"true\"\n                              [rowAlternationEnabled]=\"true\"\n                              [allowColumnReordering]=\"true\"\n                              [allowColumnResizing]=\"true\"\n                              [masterDetail]=\"{ enabled: false, template: 'masterTemplate' }\">\n                    <dxo-selection [mode]=\"'row'\"></dxo-selection>\n                    <dxo-paging [pageSize]=\"10\"></dxo-paging>\n                    <dxi-column caption=\"#\" [allowFiltering]=\"false\" alignment=\"center\" width=\"40\"\n                                cellTemplate=\"cellTemplateNumberOfRow\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateNumberOfRow'\">\n                            {{ cellData.row.rowIndex + 1 }}\n                        </div>\n                    </dxi-column>\n\n                    <dxi-column dataField=\"product_code\" caption=\"Product code\" [width]=\"100\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"name\" caption=\"Name\" [width]=\"150\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"category.name\" caption=\"Category\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"price_cost\" caption=\"Price cost\" format=\"$ #,##0.##\" [width]=\"100\"\n                                [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"price_sale\" caption=\"Price sale\" format=\"$ #,##0.##\" [width]=\"100\"\n                                [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"on_hand\" caption=\"On hand\" [width]=\"100\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"allows_sale\" caption=\"Allows sale\" [width]=\"80\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"describe\" caption=\"Describe\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"id\" [width]=\"80\" caption=\"Action\" alignment=\"center\"\n                                cellTemplate=\"cellTemplateAction\"\n                                [allowSorting]=\"false\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateAction'\" class=\"d-flex\">\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onEditProductTemplate(cellData.data)\">\n                                <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\" title=\"Edit product\"></i>\n                            </div>\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onDeleteProductTemplate(cellData.data)\">\n                                <i class=\"fa fa-times\" aria-hidden=\"true\" title=\"Delete\"></i>\n                            </div>\n                        </div>\n                    </dxi-column>\n                </dx-data-grid>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-2 col-lg-2 border-left\">\n        <app-search-form (onFilter)=\"onFilterGrid($event)\"\n                         [search_options]=\"search_options\"\n        ></app-search-form>\n    </div>\n</div>\n\n<!--Detail product-->\n<div class=\"popup-container\" *ngIf=\"isProductPopup\">\n    <dx-popup [title]=\"productPopupTitle\" [width]=\"900\" height=\"auto\" [(visible)]=\"isProductPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-product-detail\n                    [(product)]=\"selectedProduct\"\n                    (onSuccess)=\"onSavedProduct($event)\"\n                    (onCancel)=\"onCancelProduct()\">\n            </app-product-detail>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-admin/product/product.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/md-admin/product/product.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dx-datagrid-rowsview .dx-row > .dx-master-detail-cell {\n  padding: 0px; }\n"

/***/ }),

/***/ "./src/app/components/md-admin/product/product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/md-admin/product/product.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/dialog */ "./node_modules/devextreme/ui/dialog.js");
/* harmony import */ var devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__);
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







var ProductComponent = /** @class */ (function () {
    function ProductComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search_options = new _models__WEBPACK_IMPORTED_MODULE_5__["SearchOptions"]();
        this.isProductPopup = false;
        this.productPopupTitle = 'New Insurance';
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_5__["LoggedUser"]();
        this.dataSource = [];
        this.isLoading = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadProducts();
        this.search_options.product = true;
    };
    ProductComponent.prototype.loadProducts = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.get(this.apiService.apiUrl + "/product/products").subscribe(function (data) {
            _this.dataSource = data;
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    ProductComponent.prototype.onFilterGrid = function (searchFilter) {
        if (searchFilter) {
            if (searchFilter.categoryName) {
                if (searchFilter.categoryName == 'All') {
                    this.dataGrid.instance.clearFilter();
                }
                else {
                    this.dataGrid.instance.filter(['category.name', '=', searchFilter.categoryName]);
                }
                if (searchFilter.productName) {
                    this.dataGrid.instance.filter([['name', '=', searchFilter.productName],
                        'OR',
                        ['id', '=', searchFilter.productName]]);
                }
                else {
                    if (searchFilter.productDescribe) {
                        this.dataGrid.instance.filter(['describe', '=', searchFilter.productDescribe]);
                    }
                }
            }
            else {
                if (searchFilter.productName) {
                    this.dataGrid.instance.filter([['name', '=', searchFilter.productName],
                        'OR',
                        ['id', '=', searchFilter.productName]]);
                }
                else {
                    if (searchFilter.productDescribe) {
                        this.dataGrid.instance.filter(['describe', '=', searchFilter.productDescribe]);
                    }
                    else {
                        this.dataGrid.instance.clearFilter();
                    }
                }
            }
        }
    };
    ProductComponent.prototype.onAddProduct = function () {
        this.productPopupTitle = 'Add New Product';
        this.selectedProduct = new _models__WEBPACK_IMPORTED_MODULE_5__["ProductDetailModel"]();
        this.isProductPopup = true;
    };
    ProductComponent.prototype.onEditProductTemplate = function (product) {
        this.productPopupTitle = 'Edit Product';
        this.selectedProduct = product;
        this.isProductPopup = true;
    };
    ProductComponent.prototype.onSavedProduct = function () {
        this.isProductPopup = false;
        this.loadProducts();
    };
    ProductComponent.prototype.onDeleteProductTemplate = function (product) {
        var _this = this;
        var message = 'Are you sure you want to delete this product ?';
        var title = 'Delete Template';
        Object(devextreme_ui_dialog__WEBPACK_IMPORTED_MODULE_2__["confirm"])(message, title).then(function (result) {
            if (result) {
                _this.apiService.delete(_this.apiService.apiUrl + "/product/product-detail/" + product.id, product)
                    .subscribe(function () {
                    _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifySuccess('Product has been deleted successfully');
                    _this.loadProducts();
                }, function (error) {
                    if (error.message) {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError(error.message);
                    }
                    else {
                        _utils_utilities__WEBPACK_IMPORTED_MODULE_3__["Utils"].notifyError('An error has occurred. Please try again.');
                    }
                });
            }
        });
    };
    ProductComponent.prototype.onCancelProduct = function () {
        this.isProductPopup = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"]),
        __metadata("design:type", devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxDataGridComponent"])
    ], ProductComponent.prototype, "dataGrid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_5__["SearchOptions"])
    ], ProductComponent.prototype, "search_options", void 0);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/md-admin/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/components/md-admin/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/search-form/search-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/md-admin/search-form/search-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <nav class=\"search col-12\">\n        <div class=\"row\">\n            <div class=\"col-12 search-content\">\n                <h5 class=\"lb-Search\">Search</h5>\n                <div class=\"mt-2\" *ngIf=\"search_options.product\">\n                    <dx-text-box\n                            [(value)]=\"searchFilter.productName\"\n                            (onEnterKey)=\"onEnterKey($event)\"\n                            placeholder=\"By code, product name\">\n                    </dx-text-box>\n                </div>\n                <div class=\"mt-2\" *ngIf=\"search_options.product\">\n                    <dx-text-box\n                            (onEnterKey)=\"onEnterKey($event)\"\n                            [(value)]=\"searchFilter.productDescribe\"\n                            placeholder=\"According to notes\">\n                    </dx-text-box>\n                </div>\n                <div class=\"mt-2\" *ngIf=\"search_options.customer\">\n                    <dx-text-box\n                            [(value)]=\"searchFilter.customerName\"\n                            (onEnterKey)=\"onEnterKey($event)\"\n                            placeholder=\"By code, customer name, phone\">\n                    </dx-text-box>\n                </div>\n                <div class=\"mt-2\" *ngIf=\"search_options.customer\">\n                    <dx-text-box\n                            (onEnterKey)=\"onEnterKey($event)\"\n                            [(value)]=\"searchFilter.note\"\n                            placeholder=\"According to notes\">\n                    </dx-text-box>\n                </div>\n            </div>\n        </div>\n        <app-loading-panel *ngIf=\"isLoading\"></app-loading-panel>\n        <div class=\"row mt-3\" *ngIf=\"search_options.product\">\n            <div class=\"col-12 search-content\">\n                <h5 class=\"lb-Search\" type=\"default\" (click)=\"showProductCategory()\">Category\n                    <a class=\"showhideicon\">\n                        <i *ngIf=\"!isProductCategory\" class=\"fas fa-chevron-circle-down\"></i>\n                        <i *ngIf=\"isProductCategory\" class=\"fas fa-chevron-circle-up\"></i>\n                    </a>\n                </h5>\n                <a (click)=\"onAddCategory()\" class=\"showhideicon addGroupProduct\" title=\"Add product group\">\n                    <i class=\"fas fa-plus-circle\"></i>\n                </a>\n                <div style=\"overflow-y: scroll; overflow-x: auto; max-height: 400px;\">\n                    <div *ngIf=\"isProductCategory\">\n                        <dx-tree-view\n                                #treeview\n                                id=\"simple-treeview\"\n                                [dataSource]=\"categorys\"\n                                [width]=\"250\"\n                                dataStructure=\"plain\"\n                                keyExpr=\"id\"\n                                ([value])=\"categorys[0]\"\n                                displayExpr=\"name\"\n                                selectAllText=\"Select All\"\n                                parentIdExpr=\"parentId\"\n                                selectionMode=\"multiple\"\n                                [searchEnabled]=\"true\"\n                                [searchExpr]=\"'name'\"\n                                itemTemplate=\"itemTemplate\">\n                            <div *dxTemplate=\"let category of 'itemTemplate'\">\n                                <div class=\"itemTemplate\">\n                            <span class=\"itemName\"\n                                  (click)=\"emitFilterChangesProductCategory(category)\">{{ category.name }}</span>\n                                    <a *ngIf=\"category.name!='All'\" class=\"edittreeview\" title=\"Edit product group\">\n                                        <i class=\"fas fa-pencil-alt\" (click)=\"onEditCategory(category)\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </dx-tree-view>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </nav>\n\n    <div class=\"popup-container\" *ngIf=\"isCategoryPopup\">\n        <dx-popup [title]=\"insurancePopupTitle\" [width]=\"500\" height=\"auto\" [(visible)]=\"isCategoryPopup\"\n                  [dragEnabled]=\"false\" class=\"center-popup\">\n            <div *dxTemplate=\"let data of 'content'\">\n                <app-category [(category)]=\"selectedCategory\"\n                              (onSuccess)=\"onCategorySuccess($event)\"\n                              (onCancel)=\"onCancelCategory()\">\n                </app-category>\n            </div>\n        </dx-popup>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-admin/search-form/search-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/md-admin/search-form/search-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search .lb-Search {\n  background-color: #0094da;\n  width: 100%;\n  padding: 7px;\n  margin: 0 0 10px;\n  color: #fff; }\n\n.search .showhideicon {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  color: #fff;\n  outline: 0 !important;\n  right: 0px;\n  text-align: center; }\n\n.search .addGroupProduct {\n  font-size: 1.25rem;\n  position: absolute;\n  right: 25px;\n  top: 4.1px; }\n\n.search .itemTemplate {\n  margin: 0;\n  color: #000; }\n\n.search .itemTemplate .itemName {\n    width: 100%;\n    padding-right: 50px;\n    padding-top: 8px;\n    padding-bottom: 8px; }\n\n.search .itemTemplate .edittreeview {\n    color: #056bd3;\n    position: absolute;\n    right: 80px;\n    cursor: pointer;\n    display: none; }\n\n.search .itemTemplate:hover .edittreeview {\n  display: inline-block; }\n\n.search .search-content {\n  padding-right: 0;\n  padding-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/components/md-admin/search-form/search-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/md-admin/search-form/search-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
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




var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(apiService) {
        this.apiService = apiService;
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search_options = new _models__WEBPACK_IMPORTED_MODULE_3__["SearchOptions"]();
        this.searchFilter = new _models__WEBPACK_IMPORTED_MODULE_3__["SearchFilterModel"]();
        this.isProductCategory = false;
        this.insurancePopupTitle = '';
        this.isCategoryPopup = false;
        this.isLoading = false;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        this.loadCategory();
    };
    SearchFormComponent.prototype.loadCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.get(this.apiService.apiUrl + "/product/lookup/categories").subscribe(function (data) {
            data.push({ id: 0, name: 'All', parentId: null });
            _this.categorys = data;
            _this.isLoading = false;
        });
    };
    SearchFormComponent.prototype.onAddCategory = function () {
        this.selectedCategory = new _models__WEBPACK_IMPORTED_MODULE_3__["CategoryLookupModel"]();
        this.insurancePopupTitle = 'Add New Category';
        this.isCategoryPopup = true;
    };
    SearchFormComponent.prototype.onEditCategory = function (category) {
        if (!category) {
            return;
        }
        this.selectedCategory = category;
        this.insurancePopupTitle = 'Edit New Category';
        this.isCategoryPopup = true;
    };
    SearchFormComponent.prototype.onCategorySuccess = function () {
        this.loadCategory();
        this.onCancelCategory();
    };
    SearchFormComponent.prototype.onCancelCategory = function () {
        this.isCategoryPopup = false;
        this.loadCategory();
    };
    // onCancelClick() {
    //   this.onCancel.emit();
    // }
    SearchFormComponent.prototype.showProductCategory = function () {
        this.isProductCategory = !this.isProductCategory;
    };
    SearchFormComponent.prototype.onEnterKey = function (e) {
        this.onFilter.emit(this.searchFilter);
    };
    SearchFormComponent.prototype.emitFilterChangesProductCategory = function (data) {
        this.searchFilter.categoryName = data.name;
        this.onFilter.emit(this.searchFilter);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "onSuccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "onCancel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__["DxTreeViewComponent"]),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "treeView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "onFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_3__["SearchOptions"])
    ], SearchFormComponent.prototype, "search_options", void 0);
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/components/md-admin/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.scss */ "./src/app/components/md-admin/search-form/search-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/components/md-admin/shop-detail/shop-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/md-admin/shop-detail/shop-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 col-lg-10\">\n                <div class=\"mb-5\">\n                    <div class=\"form-wrap\">\n                        <dx-validation-group>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Name</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_shop.name\">\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Phone</div>\n                                <dx-text-box valueChangeEvent=\"keyup\" [(value)]=\"editing_shop.phone\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\"\n                                                             message=\"Phone is required\"></dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Email</div>\n                                <dx-text-box [(value)]=\"editing_shop.email\" valueChangeEvent=\"keyup\">\n                                    <dx-validator>\n                                        <dxi-validation-rule type=\"required\" message=\"Email is required\">\n                                        </dxi-validation-rule>\n                                        <dxi-validation-rule type=\"email\" message=\"Invalid email\">\n                                        </dxi-validation-rule>\n                                    </dx-validator>\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Website</div>\n                                <dx-text-box [(value)]=\"editing_shop.website\">\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Address</div>\n                                <dx-text-box [(value)]=\"editing_shop.address\">\n                                </dx-text-box>\n                            </div>\n                            <div class=\"field mt-3\">\n                                <div class=\"label\">Description</div>\n                                <dx-text-area height=\"100\" [(value)]=\"editing_shop.description\" maxLength=\"255\">\n                                </dx-text-area>\n                            </div>\n                            <div class=\"row d-flex align-items-center mt-3\">\n                                <div class=\"col text-lg-left mt-2\">\n                                    <dx-button width=\"150\" text=\"Save\" type=\"danger\"\n                                               [(disabled)]=\"!isFormDirty || isSubmitting\"\n                                               (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                                    <dx-button text=\"Cancel\" (onClick)=\"onCancelClick()\"></dx-button>\n                                </div>\n                            </div>\n                        </dx-validation-group>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-admin/shop-detail/shop-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/md-admin/shop-detail/shop-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-admin/shop-detail/shop-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/md-admin/shop-detail/shop-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShopDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailComponent", function() { return ShopDetailComponent; });
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





var ShopDetailComponent = /** @class */ (function () {
    function ShopDetailComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_4__["LoggedUser"]();
        this.editing_shop = new _models__WEBPACK_IMPORTED_MODULE_4__["ShopDetailModel"]();
        this.isSubmitting = false;
    }
    ShopDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shopSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.apiService.get(this.apiService.apiUrl + "/shop").subscribe(function (data) {
            _this.editing_shop = data;
            _this.selectedShop = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(data);
        }, function (error) {
            console.error(error);
        });
    };
    Object.defineProperty(ShopDetailComponent.prototype, "isFormDirty", {
        get: function () {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isEqual"])(this.selectedShop, this.editing_shop);
        },
        enumerable: true,
        configurable: true
    });
    ShopDetailComponent.prototype.onCancelClick = function () {
        this.userService.redirectToPanel();
    };
    ShopDetailComponent.prototype.onSaveClick = function (e) {
        var _this = this;
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
        debugger;
        this.isSubmitting = true;
        this.apiService.post(this.apiService.apiUrl + "/shop", this.editing_shop).subscribe(function (data) {
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifySuccess('Shop has been updated successfully.');
            _this.isSubmitting = false;
        }, function (error) {
            _this.isSubmitting = false;
            _utils_utilities__WEBPACK_IMPORTED_MODULE_2__["Utils"].notifyError('An error has occurred.');
        });
    };
    ShopDetailComponent.prototype.ngOnDestroy = function () {
        this.shopSubscription.unsubscribe();
    };
    ShopDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop-detail',
            template: __webpack_require__(/*! ./shop-detail.component.html */ "./src/app/components/md-admin/shop-detail/shop-detail.component.html"),
            styles: [__webpack_require__(/*! ./shop-detail.component.scss */ "./src/app/components/md-admin/shop-detail/shop-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ShopDetailComponent);
    return ShopDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/client.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/client/client.component.ts ***!
  \****************************************************/
/*! exports provided: ClientModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModuleComponent", function() { return ClientModuleComponent; });
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

var ClientModuleComponent = /** @class */ (function () {
    function ClientModuleComponent() {
    }
    ClientModuleComponent.prototype.ngOnInit = function () {
    };
    ClientModuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-client',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [])
    ], ClientModuleComponent);
    return ClientModuleComponent;
}());



/***/ }),

/***/ "./src/app/modules/client/client.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/client/client.module.ts ***!
  \*************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.module */ "./src/app/modules/shared.module.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "./src/app/modules/client/client.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/client/dashboard/dashboard.component.ts");
/* harmony import */ var _components_md_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/md-admin */ "./src/app/components/md-admin/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientModuleComponent"],
                        children: [
                            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                            {
                                path: 'dashboard',
                                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                                data: { title: 'Dashboard' }
                            }
                        ]
                    },
                    {
                        path: 'shop',
                        component: _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["ShopDetailComponent"],
                        data: { title: 'Shop setting' }
                    },
                    {
                        path: 'employees',
                        component: _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"],
                        data: { title: 'Employees' }
                    },
                    {
                        path: 'product',
                        component: _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                        data: { title: 'Products' }
                    },
                    {
                        path: 'customers',
                        component: _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
                        data: { title: 'Customers' }
                    },
                    {
                        path: 'invoices',
                        component: _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["InvoicesComponent"],
                        data: { title: 'invoices' }
                    },
                ])
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientModuleComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["ShopDetailComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["EmployeesDetailComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["InvoicesComponent"],
                _components_md_admin__WEBPACK_IMPORTED_MODULE_5__["InvoiceDetailComponent"]
            ]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/modules/client/dashboard/dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/client/dashboard/dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Dashboard is working.\n"

/***/ }),

/***/ "./src/app/modules/client/dashboard/dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/client/dashboard/dashboard.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/client/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/client/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-page-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/client/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/client/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-client-client-module.js.map