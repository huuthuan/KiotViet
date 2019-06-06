import {Component, OnInit, Input, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {cloneDeep} from 'lodash';


import {UserService} from '../../../services';
import {
  LoggedUser,
  DiscountDetailModel,
  InvoiceReportModel
} from '../../../models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  private _invoice: InvoiceReportModel;
  @Input()
  get invoice(): InvoiceReportModel {
    return this._invoice;
  }

  set invoice(value: InvoiceReportModel) {
    this._invoice = value;
  }

  userSubscription: Subscription;
  loggedUser: LoggedUser = new LoggedUser();
  isChangeDiscountPopover: boolean = false;
  maxDiscount: number = null;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
  }

  onOpenChangeDiscountPopover() {
    this.isChangeDiscountPopover = !this.isChangeDiscountPopover;
  }

  onChangeDiscount(e) {
    const event = e.event, str = event.key || String.fromCharCode(event.which);
    if (!/[0-9]/.test(str)) {
      event.preventDefault();
    }
    const discount = e.component._options.value;
    if (discount >= this.invoice.total) {
      this.invoice.discount.discount = this.invoice.total;
      if (this.invoice.discount.conversion_form === '$') {
        this.invoice.discount.discount_convert = this.invoice.total;
        this.maxDiscount = this.invoice.total;
      } else {
        if (this.invoice.discount.conversion_form === '%') {
          this.invoice.discount.discount_convert = 100;
          this.maxDiscount = 100;
        }
      }
    } else {
      if (this.invoice.discount.conversion_form === '$') {
        this.invoice.discount.discount = this.invoice.discount.discount_convert;
      } else {
        if (this.invoice.discount.conversion_form === '%') {
          this.invoice.discount.discount = (this.invoice.total * ( this.invoice.discount.discount_convert / 100));
        }
      }
    }
  }

  setDiscountForm(e) {
    if (e.currentTarget.text === '$') {
      this.invoice.discount.conversion_form = '$';
      if (this.invoice.discount.discount) {
        this.invoice.discount.discount_convert = this.invoice.discount.discount;
      } else {
        this.invoice.discount.discount_convert = 0;
      }
    }
    if (e.currentTarget.text === '%') {
      this.invoice.discount.conversion_form = '%';
      this.maxDiscount = 100;
      if (this.invoice.discount.discount) {
        this.invoice.discount.discount_convert = parseFloat(((this.invoice.discount.discount / this.invoice.total) * 100).toFixed(2));
      } else {
        this.invoice.discount.discount_convert = 0;
      }
    }
  }
}
