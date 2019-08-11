import {Component, OnInit, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {DxDataGridComponent} from 'devextreme-angular';
import {confirm} from 'devextreme/ui/dialog';
import {Utils} from '../../../utils/utilities';

import {UserService, ApiService} from '../../../services';
import {LoggedUser, CustomerDetailModel, SearchOptions} from '../../../models';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @Output() onFilter = new EventEmitter();
  @Input() search_options: SearchOptions = new SearchOptions();
  customerSubscription: Subscription;
  isCustomerPopup: boolean = false;
  customerPopupTitle = 'New Insurance';
  loggedUser: LoggedUser = new LoggedUser();
  dataSource: CustomerDetailModel[] = [];
  selectedCustomer: CustomerDetailModel;
  isLoading: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.customerSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadCustomer();
    this.search_options.customer = true;
  }

  loadCustomer() {
    this.isLoading = true;
    this.apiService.get(`${this.apiService.apiUrl}/customers`).subscribe((data) => {
      this.dataSource = data;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }


  onAddCustomer() {
    this.customerPopupTitle = 'Add New Customer';
    this.selectedCustomer = new CustomerDetailModel();
    this.isCustomerPopup = true;
  }

  onEditCustomerTemplate(customer) {
    this.customerPopupTitle = 'Edit Customer';
    this.selectedCustomer = customer;
    this.isCustomerPopup = true;
  }

  onSavedCustomer() {
    this.isCustomerPopup = false;
    this.loadCustomer();
  }

  onFilterGrid(searchFilter) {
    if (searchFilter) {
      if (searchFilter.customerName) {
        this.dataGrid.instance.filter([['name', '=', searchFilter.customerName],
            'OR', ['customer_code', '=', searchFilter.customerName],
            'OR', ['phone', '=', searchFilter.customerName]]);
        if (searchFilter.note) {
          this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
        }
      } else {
        if (searchFilter.note) {
          this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
        } else {
          this.dataGrid.instance.clearFilter();
        }
      }
    }
  }

  onDeleteCustomerTemplate(customer: CustomerDetailModel) {
    const message = 'Are you sure you want to delete this product ?';
    const title = 'Delete Template';
    confirm(message, title).then((result) => {
      if (result) {
        this.apiService.delete(`${this.apiService.apiUrl}/customers/${customer.id}`, customer)
          .subscribe(() => {
            Utils.notifySuccess('Customer has been deleted successfully');
            this.loadCustomer();
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

  onCancelCustomer() {
    this.isCustomerPopup = false;
  }

}
