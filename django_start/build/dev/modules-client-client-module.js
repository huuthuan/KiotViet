(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-client-client-module"],{

/***/ "./src/app/components/md-product/category/category.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/md-product/category/category.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row mt-2\">\n            <div class=\"col-lg-4\">\n                <div class=\"label mt-lg-2\">Category name</div>\n            </div>\n            <div class=\"col-lg-8\">\n                <dx-text-box [(value)]=\"editing_Category.name\">\n                    <dx-validator>\n                        <dxi-validation-rule type=\"required\"\n                                             message=\"Category name is required\"></dxi-validation-rule>\n                    </dx-validator>\n                </dx-text-box>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-lg-4\">\n                <div class=\"label mt-lg-2\">Parent</div>\n            </div>\n            <div class=\"col-lg-8\">\n                <dx-drop-down-box\n                        [(value)]=\"treeBoxValue\"\n                        valueExpr=\"id\"\n                        displayExpr=\"name\"\n                        placeholder=\"Category\"\n                        [dataSource]=\"lookupCategories\"\n                        [showClearButton]=\"true\"\n                        (onValueChanged)=\"syncTreeViewSelection($event)\">\n                    <div *dxTemplate=\"let data of 'content'\">\n                        <dx-tree-view #serviceCategoryTree\n                                      [dataSource]=\"lookupCategories\"\n                                      dataStructure=\"plain\"\n                                      keyExpr=\"id\"\n                                      displayExpr=\"name\"\n                                      parentIdExpr=\"parentId\"\n                                      selectionMode=\"single\"\n                                      [selectByClick]=\"true\"\n                                      (onContentReady)=\"$event.component.selectItem(treeBoxValue)\"\n                                      (onItemSelectionChanged)=\"treeView_itemSelectionChanged($event)\">\n                        </dx-tree-view>\n                    </div>\n                </dx-drop-down-box>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-2\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button *ngIf=\"isShowBtnDelete\" width=\"85\" text=\"Delete\" type=\"danger\"\n                           [(disabled)]=\"isSubmitting\"\n                           (onClick)=\"onDeleteCategory($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelClick()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n"

/***/ }),

/***/ "./src/app/components/md-product/category/category.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/md-product/category/category.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/md-product/category/category.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-product/category/category.component.ts ***!
  \**********************************************************************/
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
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/components/md-product/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/components/md-product/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/components/md-product/index.ts":
/*!************************************************!*\
  !*** ./src/app/components/md-product/index.ts ***!
  \************************************************/
/*! exports provided: ProductComponent, SearchFormComponent, ProductDetailComponent, CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/product.component */ "./src/app/components/md-product/product/product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return _product_product_component__WEBPACK_IMPORTED_MODULE_0__["ProductComponent"]; });

/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/components/md-product/search-form/search-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_1__["SearchFormComponent"]; });

/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/components/md-product/product-detail/product-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailComponent"]; });

/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.component */ "./src/app/components/md-product/category/category.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]; });

/**
 * Created by Thuan Le on 03/12/2019.
 */






/***/ }),

/***/ "./src/app/components/md-product/product-detail/product-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/md-product/product-detail/product-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-validation-group>\n    <div class=\"form-wrap\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <div class=\"row mt-4\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Product code</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Product.id\">\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Product name</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-text-box [(value)]=\"editing_Product.name\">\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Product name is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-text-box>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Category</div>\n                    </div>\n                    <div class=\"col-lg-7\">\n                        <dx-drop-down-box\n                                [(value)]=\"treeBoxValue\"\n                                valueExpr=\"id\"\n                                displayExpr=\"name\"\n                                placeholder=\"Category\"\n                                [dataSource]=\"lookupCategories\"\n                                [showClearButton]=\"true\"\n                                (onValueChanged)=\"syncTreeViewSelection($event)\">\n                            <div *dxTemplate=\"let data of 'content'\">\n                                <dx-tree-view #serviceCategoryTree\n                                              [dataSource]=\"lookupCategories\"\n                                              dataStructure=\"plain\"\n                                              keyExpr=\"id\"\n                                              displayExpr=\"name\"\n                                              parentIdExpr=\"parentId\"\n                                              selectionMode=\"single\"\n                                              [selectByClick]=\"true\"\n                                              (onContentReady)=\"$event.component.selectItem(treeBoxValue)\"\n                                              (onItemSelectionChanged)=\"treeView_itemSelectionChanged($event)\">\n                                </dx-tree-view>\n                            </div>\n                            <dx-validator>\n                                <dxi-validation-rule type=\"required\"\n                                                     message=\"Category is required\"></dxi-validation-rule>\n                            </dx-validator>\n                        </dx-drop-down-box>\n                    </div>\n                    <dx-button class=\"mr-1\" type=\"default\" (onClick)=\"onAddCategory()\">\n                        <i class=\"fas fa-plus\"></i>\n                    </dx-button>\n                </div>\n                <div class=\"row mt-2\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Price cost</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-number-box [(value)]=\"editing_Product.price_cost\"\n                                       placeholder=\"Enter order number\"\n                                       format=\"$ #,##0.##\"\n                                       rtlEnabled=\"true\"\n                        ></dx-number-box>\n                    </div>\n                </div>\n                <div class=\"row mt-2\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">Price sale</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-number-box [(value)]=\"editing_Product.price_sale\"\n                                       placeholder=\"Enter order number\"\n                                       format=\"$ #,##0.##\"\n                                       rtlEnabled=\"true\"\n                        ></dx-number-box>\n                    </div>\n                </div>\n                <div class=\"row mt-2\">\n                    <div class=\"col-lg-3\">\n                        <div class=\"label mt-lg-2\">On hand</div>\n                    </div>\n                    <div class=\"col-lg-8\">\n                        <dx-number-box [(value)]=\"editing_Product.on_hand\"\n                                       placeholder=\"Enter order number\"\n                                       format=\"#,##0.##\"\n                                       rtlEnabled=\"true\">\n                        </dx-number-box>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-5\">\n                <div class=\"row\">\n                    <div class=\"product-upload mt-2\">\n                        <div class=\"row\">\n                            <div class=\"img-upload\">\n                                <ul *ngFor='let url of imageUrls' class=\"same\">\n                                    <li style=\"width: 40%; height: 150px\">\n                                        <img [src]=\"url\" height=\"100\">\n                                    </li>\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"upload-btn-wrapper\">\n                                <button class=\"btn\">Select file</button>\n                                <input type='file' (change)=\"onSelectFile($event)\" multiple/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"field\">\n                        <dx-check-box text=\"Allows sale\" [(value)]=\"editing_Product.allows_sale\">\n                        </dx-check-box>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"panel panel-default mt-3\">\n                <div class=\"panel-heading\">Inventory norms</div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-2\">\n                            <div class=\"label mt-lg-2\">At least</div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <dx-number-box [(value)]=\"editing_Product.min_quantity\"\n                                         format=\"#,##0.##\"\n                                         rtlEnabled=\"true\">\n                            </dx-number-box>\n                        </div>\n                        <div class=\"col-lg-2\">\n                            <div class=\"label  mt-lg-2\">The most</div>\n                        </div>\n                        <div class=\"col-lg-4\">\n                            <dx-number-box [(value)]=\"editing_Product.max_quantity\"\n                                         format=\"#,##0.##\"\n                                         rtlEnabled=\"true\">\n                            </dx-number-box>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"panel panel-default\">\n                <dx-html-editor [(value)]=\"editing_Product.describe\">\n                    <dxo-toolbar>\n                        <dxi-item> Describe</dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"undo\"></dxi-item>\n                        <dxi-item formatName=\"redo\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"header\" [formatValues]=\"[false, 1, 2, 3, 4, 5]\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"bold\"></dxi-item>\n                        <dxi-item formatName=\"italic\"></dxi-item>\n                        <dxi-item formatName=\"strike\"></dxi-item>\n                        <dxi-item formatName=\"underline\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                        <dxi-item formatName=\"alignLeft\"></dxi-item>\n                        <dxi-item formatName=\"alignCenter\"></dxi-item>\n                        <dxi-item formatName=\"alignRight\"></dxi-item>\n                        <dxi-item formatName=\"alignJustify\"></dxi-item>\n                        <dxi-item formatName=\"separator\"></dxi-item>\n                    </dxo-toolbar>\n                </dx-html-editor>\n            </div>\n        </div>\n        <div class=\"row d-flex align-items-center mt-3\">\n            <div class=\"col text-lg-right mt-2\">\n                <dx-button width=\"85\" text=\"Save\" type=\"danger\"\n                           [(disabled)]=\"isSubmitting\"\n                           (onClick)=\"onSaveClick($event)\" class=\"mr-3\"></dx-button>\n                <dx-button text=\"Cancel\" (onClick)=\"onCancelClick()\"></dx-button>\n            </div>\n        </div>\n    </div>\n</dx-validation-group>\n\n<!--Detail Category-->\n<div class=\"popup-container\" *ngIf=\"isCategoryPopup\">\n    <dx-popup [title]=\"insurancePopupTitle\" [width]=\"500\" height=\"auto\" [(visible)]=\"isCategoryPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-category [(category)]=\"selectedCategory\"\n                          (onSuccess)=\"onCategorySuccess($event)\"\n                          (onCancel)=\"onCancelCategory()\">\n            </app-category>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-product/product-detail/product-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/md-product/product-detail/product-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  width: 100%;\n  margin-left: 15px;\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .panel .panel-body {\n    padding: 15px; }\n  .panel .panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n  .dx-htmleditor-toolbar-wrapper {\n  background-color: #ddd !important; }\n  .panel-default {\n  border-color: #ddd; }\n  .panel-default .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n  .panel-default .panel-body {\n    border-top-color: #ddd;\n    border-bottom-color: #ddd; }\n  .product-upload {\n  min-height: 200px; }\n  .product-upload .img-upload {\n    width: 345px;\n    height: 145px; }\n  .product-upload .img-upload > ul.same {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0; }\n  .product-upload .img-upload > ul.same li {\n        list-style: none;\n        border: 1px dashed #ccc;\n        border-radius: 5px;\n        float: left;\n        width: 27%;\n        margin: 0 1% 2%;\n        height: 66px; }\n  .product-upload .upload-btn-wrapper {\n    position: relative;\n    overflow: hidden;\n    display: inline-block; }\n  .product-upload .upload-btn-wrapper .btn {\n      border: 1px solid gray;\n      color: gray;\n      background-color: white;\n      padding: 4px 10px;\n      border-radius: 1px; }\n  .product-upload .upload-btn-wrapper input[type=file] {\n    font-size: 10px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0; }\n"

/***/ }),

/***/ "./src/app/components/md-product/product-detail/product-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/md-product/product-detail/product-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_1__);
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





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.onSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCategoryPopup = false;
        this.insurancePopupTitle = 'New Insurance';
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_4__["LoggedUser"]();
        this.editing_Product = new _models__WEBPACK_IMPORTED_MODULE_4__["UpdateProductModel"]();
        this.isSubmitting = false;
        this.imageUrls = [];
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadCategory();
        this.editing_Product.on_hand = 0;
        this.editing_Product.price_cost = 0;
        this.editing_Product.price_sale = 0;
        this.editing_Product.min_quantity = 0;
        this.editing_Product.max_quantity = 999999999;
    };
    ProductDetailComponent.prototype.loadCategory = function () {
        var _this = this;
        this.apiService.get(this.apiService.apiUrl + "/product/lookup/categories").subscribe(function (data) {
            _this.lookupCategories = data;
        });
    };
    ProductDetailComponent.prototype.onAddCategory = function () {
        this.selectedCategory = new _models__WEBPACK_IMPORTED_MODULE_4__["CategoryLookupModel"]();
        this.insurancePopupTitle = 'Add New Category';
        this.isCategoryPopup = true;
    };
    ProductDetailComponent.prototype.onCancelCategory = function () {
        this.isCategoryPopup = false;
    };
    ProductDetailComponent.prototype.onCancelClick = function () {
        this.onCancel.emit();
    };
    ProductDetailComponent.prototype.onCategorySuccess = function () {
        this.loadCategory();
        this.onCancelCategory();
    };
    ProductDetailComponent.prototype.onSaveClick = function (e) {
        var _this = this;
        if (!e.validationGroup.validate().isValid) {
            return false;
        }
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
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/components/md-product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/components/md-product/product-detail/product-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/md-product/product/product.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-product/product/product.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 col-lg-10\">\n        <div class=\"row mb-3\">\n            <div class=\"col text-lg-right\">\n                <dx-button class=\"mr-1\" type=\"default\" (onClick)=\"onAddProduct()\">\n                    <i class=\"fas fa-plus mr-2\"></i>Add new product\n                </dx-button>\n            </div>\n        </div>\n        <app-loading-panel *ngIf=\"isLoading\"></app-loading-panel>\n        <div class=\"row\">\n            <div class=\"col\">\n                <dx-data-grid [dataSource]=\"dataSource\"\n                              [filterRow]=\"true\"\n                              [showBorders]=\"true\"\n                              [showColumnLines]=\"true\"\n                              [hoverStateEnabled]=\"true\"\n                              [rowAlternationEnabled]=\"true\"\n                              [allowColumnReordering]=\"true\"\n                              [allowColumnResizing]=\"true\"\n                              [columnAutoWidth]=\"true\">\n                    <dxo-selection mode=\"single\"></dxo-selection>\n\n                    <dxi-column caption=\"#\" [allowFiltering]=\"false\" alignment=\"center\" width=\"40\"\n                                cellTemplate=\"cellTemplateNumberOfRow\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateNumberOfRow'\">\n                            {{ cellData.row.rowIndex + 1}}\n                        </div>\n                    </dxi-column>\n                    <dxi-column dataField=\"name\" caption=\"Name\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"category.name\" caption=\"Category\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"price_cost\" caption=\"Price cost\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"price_sale\" caption=\"Price sale\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"on_hand\" caption=\"On hand\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"describe\" caption=\"Describe\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"allows_sale\" caption=\"Allows sale\" [allowFiltering]=\"true\"\n                                [allowHeaderFiltering]=\"true\">\n                    </dxi-column>\n                    <dxi-column dataField=\"id\" [width]=\"80\" caption=\"Action\" alignment=\"center\"\n                                cellTemplate=\"cellTemplateAction\" [allowFiltering]=\"false\" [allowSorting]=\"false\">\n                        <div *dxTemplate=\"let cellData of 'cellTemplateAction'\" class=\"d-flex\">\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onEditCategory(cellData.data)\">\n                                <i class=\"material-icons\">create</i>\n                            </div>\n                            <div class=\"btn-action btn-trash pointer\" (click)=\"onDeleteCategory(cellData.data)\">\n                                <i class=\"material-icons\">delete</i>\n                            </div>\n                        </div>\n                    </dxi-column>\n                </dx-data-grid>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-2 col-lg-2 border-left\">\n        <app-search-form (onFilter)=\"onFilterCategory($event)\"></app-search-form>\n    </div>\n</div>\n\n<!--Detail product-->\n<div class=\"popup-container\" *ngIf=\"isProductPopup\">\n    <dx-popup [title]=\"insurancePopupTitle\" [width]=\"900\" height=\"auto\" [(visible)]=\"isProductPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-product-detail\n                    (onCancel)=\"onCancelProduct()\">\n            </app-product-detail>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-product/product/product.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/md-product/product/product.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail dx-tab-panel {\n  padding: 0px; }\n\n.dx-datagrid-rowsview .dx-row > .dx-master-detail-cell {\n  padding: 0px; }\n\n.product-detail {\n  border: none;\n  padding: 25px 30px 30px;\n  box-sizing: border-box;\n  background: #fff;\n  margin: 0;\n  position: relative;\n  overflow: visible; }\n\n.product-detail .title {\n    font-size: 18px;\n    font-weight: 700;\n    color: #006fa9;\n    margin-bottom: 12px;\n    padding: 0; }\n\n.product-detail ul {\n    padding: 0;\n    margin: 0 0 15px;\n    list-style: none; }\n\n.product-detail ul li {\n      box-sizing: border-box;\n      position: relative;\n      display: inline-block;\n      font-weight: 700;\n      line-height: 1.8; }\n\n.product-detail ul li .txtGreen {\n        color: #4bac4d; }\n\n.product-detail .form-group {\n    border-top: 1px solid #eee;\n    margin: 0; }\n\n.product-detail .form-group .form-label {\n      float: left;\n      width: 110px;\n      padding: 8px 10px 0;\n      margin: 0;\n      line-height: 17px; }\n\n.product-detail .form-group .form-wrap {\n      margin-bottom: 0;\n      padding: 9px 0 5px;\n      min-height: 32px;\n      word-break: break-word;\n      line-height: 17px;\n      margin-left: 110px; }\n"

/***/ }),

/***/ "./src/app/components/md-product/product/product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/md-product/product/product.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
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




var ProductComponent = /** @class */ (function () {
    function ProductComponent(userService, apiService) {
        this.userService = userService;
        this.apiService = apiService;
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isProductPopup = false;
        this.insurancePopupTitle = 'New Insurance';
        this.loggedUser = new _models__WEBPACK_IMPORTED_MODULE_3__["LoggedUser"]();
        this.dataSource = [];
        this.isLoading = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productSubscription = this.userService.currentUser.subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loadProducts();
    };
    ProductComponent.prototype.loadProducts = function () {
        var _this = this;
        this.isLoading = true;
        this.apiService.get(this.apiService.apiUrl + "/products/").subscribe(function (data) {
            _this.dataSource = data.results;
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    ProductComponent.prototype.onFilterCategory = function (searchFilter) {
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
    ProductComponent.prototype.rowClickEvent = function (e) {
        debugger;
        var expanded = e.component.isRowExpanded(e.key);
        if (expanded) {
            e.component.collapseRow(e.key);
        }
        else {
            e.component.expandRow(e.key);
        }
    };
    // onEditProduct(product) {
    //   selectedProduct
    // }
    ProductComponent.prototype.onAddProduct = function () {
        this.insurancePopupTitle = 'Add New Product';
        this.isProductPopup = true;
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
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/md-product/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/components/md-product/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/md-product/search-form/search-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/md-product/search-form/search-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"search\">\n    <div class=\"row\">\n        <h5 class=\"lb-Search\">Search</h5>\n        <div class=\"col-12 search-content\">\n            <div class=\"mt-2\">\n                <dx-text-box\n                        [(value)]=\"searchFilter.productName\"\n                        (onEnterKey)=\"onEnterKey($event)\"\n                        placeholder=\"By code, product name\">\n                </dx-text-box>\n            </div>\n            <div class=\"mt-2\">\n                <dx-text-box\n                        (onEnterKey)=\"onEnterKey($event)\"\n                        [(value)]=\"searchFilter.productDescribe\"\n                        placeholder=\"According to notes\">\n                </dx-text-box>\n            </div>\n        </div>\n    </div>\n    <app-loading-panel *ngIf=\"isLoading\"></app-loading-panel>\n    <div class=\"row search\">\n        <h5 class=\"lb-Search\" type=\"default\" (click)=\"showProductCategory()\">Product category\n            <a class=\"showhideicon\">\n                <i *ngIf=\"!isProductCategory\" class=\"fas fa-chevron-circle-down\"></i>\n                <i *ngIf=\"isProductCategory\" class=\"fas fa-chevron-circle-up\"></i>\n            </a>\n        </h5>\n        <a (click)=\"onAddCategory()\" class=\"showhideicon addGroupProduct\" title=\"Add product group\">\n            <i class=\"fas fa-plus-circle\"></i>\n        </a>\n        <div style=\"overflow-y: scroll; overflow-x: auto;\">\n            <div class=\"col-12\" *ngIf=\"isProductCategory\">\n                <dx-tree-view\n                        #treeview\n                        id=\"simple-treeview\"\n                        [dataSource]=\"categorys\"\n                        [width]=\"194\"\n                        dataStructure=\"plain\"\n                        keyExpr=\"id\"\n                        ([value])=\"categorys[0]\"\n                        displayExpr=\"name\"\n                        selectAllText=\"Select All\"\n                        parentIdExpr=\"parentId\"\n                        selectionMode=\"multiple\"\n                        [searchEnabled]=\"true\"\n                        [searchExpr]=\"'name'\"\n                        itemTemplate=\"itemTemplate\">\n                    <div *dxTemplate=\"let category of 'itemTemplate'\">\n                        <div class=\"itemTemplate\">\n                            <span class=\"itemName\"\n                                  (click)=\"emitFilterChangesProductCategory(category)\">{{ category.name }}</span>\n                            <a *ngIf=\"category.name!='All'\" class=\"edittreeview\" title=\"Edit product group\">\n                                <i class=\"fas fa-pencil-alt\" (click)=\"onEditCategory(category)\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </dx-tree-view>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<div class=\"popup-container\" *ngIf=\"isCategoryPopup\">\n    <dx-popup [title]=\"insurancePopupTitle\" [width]=\"500\" height=\"auto\" [(visible)]=\"isCategoryPopup\"\n              [dragEnabled]=\"false\" class=\"center-popup\">\n        <div *dxTemplate=\"let data of 'content'\">\n            <app-category [(category)]=\"selectedCategory\"\n                          (onSuccess)=\"onCategorySuccess($event)\"\n                          (onCancel)=\"onCancelCategory()\">\n            </app-category>\n        </div>\n    </dx-popup>\n</div>\n"

/***/ }),

/***/ "./src/app/components/md-product/search-form/search-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/md-product/search-form/search-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search .lb-Search {\n  background-color: #0094da;\n  width: 100%;\n  padding: 7px; }\n\n.search .showhideicon {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  color: #fff;\n  outline: 0 !important;\n  right: 0px;\n  text-align: center; }\n\n.search .addGroupProduct {\n  font-size: 1.25rem;\n  position: absolute;\n  right: 25px;\n  margin-top: 4.55px; }\n\n.search .itemTemplate {\n  margin: 0;\n  color: #000; }\n\n.search .itemTemplate .itemName {\n    width: 100%; }\n\n.search .itemTemplate .edittreeview {\n    color: #056bd3;\n    position: absolute;\n    right: 7px;\n    cursor: pointer;\n    display: none; }\n\n.search .itemTemplate:hover .edittreeview {\n  display: inline-block; }\n\n.search .search-content {\n  padding-right: 0;\n  padding-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/components/md-product/search-form/search-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/md-product/search-form/search-form.component.ts ***!
  \****************************************************************************/
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
    SearchFormComponent.prototype.onCancelClick = function () {
        this.onCancel.emit();
    };
    SearchFormComponent.prototype.showProductCategory = function () {
        this.isProductCategory = !this.isProductCategory;
    };
    SearchFormComponent.prototype.onEnterKey = function (e) {
        debugger;
        this.onFilter.emit(this.searchFilter);
        // this.emitFilterChangesProduct(e.component.option('value'));
    };
    // emitFilterChangesProduct() {
    //   this.onFilter.emit(this.searchFilter);
    // }
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
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/components/md-product/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.scss */ "./src/app/components/md-product/search-form/search-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
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
/* harmony import */ var _components_md_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/md-product */ "./src/app/components/md-product/index.ts");
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
                        path: 'product',
                        component: _components_md_product__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                        data: { title: 'Product' }
                    },
                ])
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientModuleComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_md_product__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"],
                _components_md_product__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
                _components_md_product__WEBPACK_IMPORTED_MODULE_5__["SearchFormComponent"],
                _components_md_product__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"]
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