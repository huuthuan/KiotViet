import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {AuthenticationService, UserService} from '../../../services';
import {
  LoggedUser,
  CustomerDetailModel,
  InvoiceReportModel,
  InvoiceDetailModel
} from '../../../models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  userSubscription: Subscription;
  selectedCustomer: CustomerDetailModel;
  loggedUser: LoggedUser = new LoggedUser();
  isCustomerPopup: boolean = false;
  customerPopupTitle = 'New Customer';

  constructor(private userService: UserService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
  }

  onAddCustomer() {
    this.customerPopupTitle = 'Add New Customer';
    this.selectedCustomer = new CustomerDetailModel();
    this.isCustomerPopup = true;
  }

  onSavedCustomer() {
    this.isCustomerPopup = false;
  }

  onCancelCustomer() {
    this.isCustomerPopup = false;
  }
}
