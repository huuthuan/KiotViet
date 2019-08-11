import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UUID} from 'angular2-uuid';

import {AuthenticationService, UserService, ApiService} from '../../../services';
import {
  LoggedUser,
  AccountEmployeeModel,
  CustomerDetailModel,
  InvoiceReportModel,
  ProductInvoiceDetailModel,
  DiscountDetailModel
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
  dataSource: AccountEmployeeModel[] = [];
  invoice: InvoiceReportModel;
  isOpenMenu: boolean = false;
  isCustomerPopup: boolean = false;
  customerPopupTitle = 'New Customer';
  selectedTab: string;
  createdByEmployee: number;

  invoiceReports: InvoiceReportModel[] = [
    new InvoiceReportModel({
      invoice_code: UUID.UUID(),
      invoice_name: 'Hoa don 1',
      customer: new CustomerDetailModel(),
      total_quantity: 0,
      total: 0,
      discount: new DiscountDetailModel({
        discount: 0,
        conversion_form: '$'
      }),
      note: null
    })
  ];

  constructor(private userService: UserService,
              private apiService: ApiService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadEmployee();
    this.selectedTab = this.invoiceReports[0].invoice_code;
    this.invoice = this.invoiceReports[0];
    this.createdByEmployee = this.invoice.created_by = this.loggedUser.user_id;
  }

  loadEmployee() {
    this.apiService.get(`${this.apiService.apiUrl}/sell-goods/employees`).subscribe((data) => {
      this.dataSource = data;
    });
  }

  onAddReport(e) {
    debugger;
    const report = new InvoiceReportModel({
      invoice_code: UUID.UUID(),
      invoice_name: 'Hoa don ' + (this.invoiceReports.length + 1),
      created_by: this.loggedUser.user_id,
      customer: new CustomerDetailModel(),
      total_quantity: 0,
      total: 0,
      discount: new DiscountDetailModel({
        discount: 0,
        conversion_form: '$'
      }),
      note: null
    });
    for (let i = 0; i < this.invoiceReports.length; i++) {
      if (this.invoiceReports[i].invoice_name === report.invoice_name) {
        report.invoice_name = 'Hoa don ' + (this.invoiceReports.length + 3);
      }
    }
    this.invoiceReports.push(report);
    this.selectedTab = report.invoice_code;
    this.createdByEmployee = report.created_by;
    this.invoice = report;
  }

  onSelectTab(report) {
    this.selectedTab = report.invoice_code;
    this.createdByEmployee = report.created_by;
    this.invoice = report;
  }

  onDeleteReport(invoice_code) {
    const index = this.invoiceReports.findIndex(invoice => invoice.invoice_code === invoice_code);
    this.invoiceReports.splice(index, 1);
    if (this.selectedTab === invoice_code) {
      const indexActive = this.invoiceReports.length - 1;
      this.invoice = this.invoiceReports[indexActive]
      this.selectedTab = this.invoice.invoice_code;
    }
  }

  checkInvoiceExistProduct(product) {
    for (let i = 0; i < this.invoice.products.length; i++) {
      if (this.invoice.products[i].product.id === product.id) {
        return i;
      }
    }
  }

  addProductsToCart(product) {
    this.invoice.products.push(new ProductInvoiceDetailModel({
      product: product,
      quantity: 1,
      price: product.price_sale,
      paid_amount: product.price_sale,
      discount: new DiscountDetailModel({
        price: product.price_sale,
        discount: null,
        conversion_form: '$'
      })
    }));
    this.invoice.total_quantity += 1;
    this.invoice.total += product.price_sale;
  }

  addProductInvoiceReport(productNew) {
    const products = this.invoice.products;
    if (products.length !== 0) {
      const index = this.checkInvoiceExistProduct(productNew);
      if (!index && index !== 0) {
        this.addProductsToCart(productNew);
      } else {
        const quantity = this.invoice.products[index].quantity + 1;
        const paid_amount = quantity * this.invoice.products[index].price;
        this.invoice.products[index].quantity = quantity;
        this.invoice.products[index].paid_amount = paid_amount;
        this.invoice.total_quantity += 1;
        this.invoice.total += this.invoice.products[index].price;
      }
    } else {
      this.addProductsToCart(productNew);
    }
  }

  setCreatedByEmployee(e) {
    this.invoice.created_by = e.itemData.id;
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

  onToggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  onCloseMenu() {
    if (this.isOpenMenu) {
      this.isOpenMenu = false;
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
