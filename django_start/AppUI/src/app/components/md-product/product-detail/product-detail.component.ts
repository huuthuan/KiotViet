import {Component, OnDestroy, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {DxTreeViewComponent} from 'devextreme-angular';
import {Utils} from '../../../utils/utilities';

import {ApiService, UserService} from '../../../services';
import {LoggedUser, UpdateProductModel, CategoryLookupModel} from '../../../models';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  @Output() onSuccess = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild(DxTreeViewComponent) treeView;
  productSubscription: Subscription;
  isCategoryPopup: boolean = false;
  insurancePopupTitle = 'New Insurance';
  lookupCategories: CategoryLookupModel[];
  selectedCategory: CategoryLookupModel;
  loggedUser: LoggedUser = new LoggedUser();
  editing_Product: UpdateProductModel = new UpdateProductModel();
  isSubmitting: boolean = false;
  treeBoxValue: string[];
  imageUrls = [];

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.productSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadCategory();
    this.editing_Product.on_hand = 0;
    this.editing_Product.price_cost = 0;
    this.editing_Product.price_sale = 0;
    this.editing_Product.min_quantity = 0;
    this.editing_Product.max_quantity =  999999999;
  }

  loadCategory() {
    this.apiService.get(`${this.apiService.apiUrl}/product/lookup/categories`).subscribe((data) => {
      this.lookupCategories = data;
    });
  }

  onAddCategory() {
    this.selectedCategory = new CategoryLookupModel();
    this.insurancePopupTitle = 'Add New Category';
    this.isCategoryPopup = true;
  }

  onCancelCategory() {
    this.isCategoryPopup = false;
  }

  onCancelClick() {
    this.onCancel.emit();
  }

  onCategorySuccess() {
    this.loadCategory();
    this.onCancelCategory();
  }

  onSaveClick(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    this.isSubmitting = true;
    this.editing_Product.category = parseInt(this.treeBoxValue[0]);
    this.editing_Product.urls = this.imageUrls;
    this.apiService.post(`${this.apiService.apiUrl}/product/product-detail/`, this.editing_Product).subscribe((data) => {
      this.onSuccess.emit();
      Utils.notifySuccess('Category has been added successfully.');
      this.isSubmitting = false;
    }, (error) => {
      this.isSubmitting = false;
      if (error.message) {
        Utils.notifyError(error.message);
      } else {
        Utils.notifyError('An error has occurred. Please try again.');
      }
    }, () => {
      this.isSubmitting = false;
    });
  }

  syncTreeViewSelection() {
    if (!this.treeView) return;

    if (!this.treeBoxValue) {
      this.treeView.instance.unselectAll();
    } else {
      this.treeView.instance.selectItem(this.treeBoxValue);
    }
  }

  getSelectedItemsKeys(items) {
    var result = [],
      that = this;

    items.forEach(function (item) {
      if (item.selected) {
        result.push(item.key);
      }
      if (item.items.length) {
        result = result.concat(that.getSelectedItemsKeys(item.items));
      }
    });
    return result;
  }

  treeView_itemSelectionChanged(e) {
    const nodes = e.component.getNodes();
    this.treeBoxValue = this.getSelectedItemsKeys(nodes);
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.imageUrls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
  }

}
