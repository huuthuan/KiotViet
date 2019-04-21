import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import { AuthenticationService, UserService} from '../../../services';
import {
  LoggedUser,
  CustomerDetailModel,
  InvoiceReportModel,
  InvoiceDetailModel
} from '../../../models';

@Component({
  selector: 'app-sell-goods',
  templateUrl: './sell-goods.component.html',
  styleUrls: ['./sell-goods.component.scss']
})
export class SellGoodsComponent implements OnInit {
  userSubscription: Subscription;
  selectedCustomer: CustomerDetailModel;
  loggedUser: LoggedUser = new LoggedUser();
  isCustomerPopup: boolean = false;
  customerPopupTitle = 'New Customer';
  selectedTab = 'Hoa don 1';

  invoiceReports: InvoiceReportModel[] = [
    new InvoiceReportModel({
      invoice_code: 'Hoa don 1'
    })
  ];

  constructor(private userService: UserService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
  }

  onAddReport(e) {
    const report = new InvoiceReportModel({
      invoice_code: 'Hoa don ' + (this.invoiceReports.length + 1)
    });
    this.invoiceReports.push(report);
  }

  onAddCustomer() {
    this.customerPopupTitle = 'Add New Customer';
    this.selectedCustomer = new CustomerDetailModel();
    this.isCustomerPopup = true;
  }

  onSelectTab(report) {
    debugger;
    this.selectedTab = report.invoice_code;
  }

  addProductInvoiceReport(product, report) {
    report.products.push(new InvoiceDetailModel({
      product: product
    }));
  }

  onSavedCustomer() {
    this.isCustomerPopup = false;
  }

  onCancelCustomer() {
    this.isCustomerPopup = false;
  }

}
