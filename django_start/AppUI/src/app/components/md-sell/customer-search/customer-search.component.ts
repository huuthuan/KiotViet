import {Component, OnInit, Input} from '@angular/core';
import {Subscription} from 'rxjs';
import {cloneDeep} from 'lodash';

import {UserService, ApiService} from '../../../services';
import {
  LoggedUser,
  CustomerDetailModel,
  InvoiceReportModel
} from '../../../models';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {
  private _invoice: InvoiceReportModel;
  @Input()
  get invoice(): InvoiceReportModel {
    return this._invoice;
  }

  set invoice(value: InvoiceReportModel) {
    this._invoice = value;
  }
  userSubscription: Subscription;
  selectedCustomer: CustomerDetailModel;
  loggedUser: LoggedUser = new LoggedUser();
  dataSource: CustomerDetailModel[] = [];
  isCustomerPopup: boolean = false;
  customerPopupTitle = 'New Customer';
  // customerName: string = this.invoice.customer.name;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadCustomer();
  }

  loadCustomer() {
    this.apiService.get(`${this.apiService.apiUrl}/sell-goods/customers`).subscribe((data) => {
      this.dataSource = data;
    });
  }

  onChangeCustomer(data) {
    this.invoice.customer = data.itemData;
  }

  onAddCustomer() {
    this.customerPopupTitle = 'Add New Customer';
    this.selectedCustomer = new CustomerDetailModel();
    this.isCustomerPopup = true;
  }

  onSavedCustomer(customer) {
    this.isCustomerPopup = false;
    this.invoice.customer = cloneDeep(customer);
    // this.customerName = this.invoice.customer.name;
  }

  onCancelCustomer() {
    this.isCustomerPopup = false;
  }
}
