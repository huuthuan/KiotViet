import {Component, OnDestroy, EventEmitter, OnInit, Output, Input, ViewChild} from '@angular/core';
import {DxTreeViewComponent} from 'devextreme-angular';
import {confirm} from 'devextreme/ui/dialog';
import {Subscription} from 'rxjs';
import {cloneDeep} from 'lodash';


import {UserService, ApiService} from '../../../services';
import {LoggedUser, CategoryLookupModel} from '../../../models';
import {Utils} from '../../../utils/utilities';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  @ViewChild(DxTreeViewComponent) treeView;
  categorySubscription: Subscription;
  loggedUser: LoggedUser = new LoggedUser();
  lookupCategories: CategoryLookupModel[];
  editing_Category: CategoryLookupModel = new CategoryLookupModel();
  isSubmitting: boolean = false;
  isShowBtnDelete: boolean = false;
  treeBoxValue: string[];

  private _category: CategoryLookupModel;
  @Input()
  get category(): CategoryLookupModel {
    return this._category;
  }

  set category(value: CategoryLookupModel) {
    this._category = value;
  }

  @Output() onSuccess = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.categorySubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadParent();
    this.editing_Category = cloneDeep(this.category);

    if (this.editing_Category.id) {
      this.isShowBtnDelete = true;
    }

    if (this.editing_Category.parentId) {
      const selected_categories = [];
      selected_categories.push(this.editing_Category.parentId);
      this.treeBoxValue = selected_categories;
      this.syncTreeViewSelection();
    }
  }

  loadParent() {
    this.apiService.get(`${this.apiService.apiUrl}/product/lookup/categories`).subscribe((data) => {
      this.lookupCategories = data;
    });
  }

  onCancelClick() {
    this.onCancel.emit();
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
  }

  treeView_itemSelectionChanged(e) {
    const nodes = e.component.getNodes();
    this.treeBoxValue = this.getSelectedItemsKeys(nodes);
  }

  onAddCategory() {
    this.isSubmitting = true;
    if (this.treeBoxValue) {
      this.editing_Category.parentId = parseInt(this.treeBoxValue[0]);
    }
    this.apiService.post(`${this.apiService.apiUrl}/product/categories/`, this.editing_Category).subscribe((data) => {
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

  onUpdateCategory() {
    this.isSubmitting = true;
    if (this.treeBoxValue) {
      this.editing_Category.parentId = parseInt(this.treeBoxValue[0]);
    } else {
      this.editing_Category.parentId = null;
    }
    this.apiService.update(`${this.apiService.apiUrl}/product/categories/${this.editing_Category.id}`, this.editing_Category).subscribe((data) => {
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

  onDeleteCategory() {
    const message = 'Are you sure you want to delete this category?';
    const title = 'Delete Category';
    confirm(message, title).then((result) => {
      if (result) {
        this.apiService.delete(`${this.apiService.apiUrl}/product/categories/${this.editing_Category.id}`, this._category)
          .subscribe(() => {
            this.onSuccess.emit();
            Utils.notifySuccess('Category has been deleted successfully');
          }, (error) => {
            if (error.message) {
              Utils.notifyError(error.message);
            } else {
              Utils.notifyError('An error has occurred. Please try again.');
            }
          });
      }
    });
  }

  onSaveClick(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    if (this.category.id) {
      this.onUpdateCategory();
    } else {
      this.onAddCategory();
    }

  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }
}
