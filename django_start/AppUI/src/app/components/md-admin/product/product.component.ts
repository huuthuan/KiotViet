import {Component, OnInit, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {DxDataGridComponent} from 'devextreme-angular';
import {confirm} from 'devextreme/ui/dialog';
import {Utils} from '../../../utils/utilities';

import {UserService, ApiService} from '../../../services';
import {LoggedUser} from '../../../models';

import {ProductDetailModel, SearchOptions} from '../../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @Output() onFilter = new EventEmitter<any>();
  @Input() search_options: SearchOptions = new SearchOptions();
  productSubscription: Subscription;
  isProductPopup: boolean = false;
  productPopupTitle = 'New Insurance';
  loggedUser: LoggedUser = new LoggedUser();
  dataSource: ProductDetailModel[] = [];
  selectedProduct: ProductDetailModel;
  isLoading: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.productSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadProducts();
    this.search_options.product = true;
  }

  loadProducts() {
    this.isLoading = true;
    this.apiService.get(`${this.apiService.apiUrl}/product/products`).subscribe((data) => {
      this.dataSource = data;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  onFilterGrid(searchFilter) {
    if (searchFilter) {
      if (searchFilter.categoryName) {
        if (searchFilter.categoryName == 'All') {
          this.dataGrid.instance.clearFilter();
        } else {
          this.dataGrid.instance.filter(['category.name', '=', searchFilter.categoryName]);
        }

        if (searchFilter.productName) {
          this.dataGrid.instance.filter([['name', '=', searchFilter.productName],
            'OR',
            ['id', '=', searchFilter.productName]]);
        } else {
          if (searchFilter.productDescribe) {
            this.dataGrid.instance.filter(['describe', '=', searchFilter.productDescribe]);
          }
        }
      } else {
        if (searchFilter.productName) {
          this.dataGrid.instance.filter([['name', '=', searchFilter.productName],
            'OR',
            ['id', '=', searchFilter.productName]]);
        } else {
          if (searchFilter.productDescribe) {
            this.dataGrid.instance.filter(['describe', '=', searchFilter.productDescribe]);
          } else {
            this.dataGrid.instance.clearFilter();
          }
        }
      }
    }
  }


  onAddProduct() {
    this.productPopupTitle = 'Add New Product';
    this.selectedProduct = new ProductDetailModel();
    this.isProductPopup = true;
  }

  onEditProductTemplate(product) {
    this.productPopupTitle = 'Edit Product';
    this.selectedProduct = product;
    this.isProductPopup = true;
  }

  onSavedProduct() {
    this.isProductPopup = false;
		this.loadProducts();
  }

  onDeleteProductTemplate(product: ProductDetailModel) {
    const message = 'Are you sure you want to delete this product ?';
    const title = 'Delete Template';
    confirm(message, title).then((result) => {
      if (result) {
        this.apiService.delete(`${this.apiService.apiUrl}/product/product-detail/${product.id}`, product)
          .subscribe(() => {
            Utils.notifySuccess('Product has been deleted successfully');
            this.loadProducts();
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

  onCancelProduct() {
    this.isProductPopup = false;
  }
}
