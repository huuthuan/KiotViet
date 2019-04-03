import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {DxDataGridComponent} from 'devextreme-angular';

import {UserService, ApiService} from '../../../services';
import {LoggedUser} from '../../../models';

import {ProductDetailModel} from '../../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @Output() onFilter = new EventEmitter();
  productSubscription: Subscription;
  isProductPopup: boolean = false;
  insurancePopupTitle = 'New Insurance';
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
  }

  loadProducts() {
    this.isLoading = true;
    this.apiService.get(`${this.apiService.apiUrl}/products/`).subscribe((data) => {
      this.dataSource = data.results;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  onFilterCategory(searchFilter) {
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

  rowClickEvent(e) {
    debugger

    const expanded = e.component.isRowExpanded(e.key);
    if (expanded) {
      e.component.collapseRow(e.key);
    } else {
      e.component.expandRow(e.key);
    }
  }

  // onEditProduct(product) {
  //   selectedProduct
  // }

  onAddProduct() {
    this.insurancePopupTitle = 'Add New Product';
    this.isProductPopup = true;
  }

  onCancelProduct() {
    this.isProductPopup = false;
  }

}
