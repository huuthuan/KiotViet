import {Component, OnInit, Input} from '@angular/core';
import {cloneDeep} from 'lodash';

import {InvoiceReportModel} from '../../../models';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() invoice: InvoiceReportModel;
  isNoteProductPopover: boolean = false;
  isChangePriceProductPopover: boolean = false;
  isOpenPopover_id: number;
  max: number;

  constructor() {
  }

  ngOnInit() {
  }

  onAddNoteProduct(product_code) {
    this.isOpenPopover_id = product_code;
    this.isNoteProductPopover = !this.isNoteProductPopover;
  }

  onUpQuantityProduct(indexProduct) {
    const product = this.invoice.products[indexProduct];
    product.quantity += 1;
    this.invoice.total_quantity += 1;
    this.invoice.total += product.price;
    product.paid_amount = product.quantity * product.price;
  }

  onDownQuantityProduct(indexProduct) {
    const product = this.invoice.products[indexProduct];
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.invoice.total_quantity -= 1;
      this.invoice.total -= product.price;
    }
    product.paid_amount = product.quantity * product.price;
  }

  onKeyUpChangeQuantity(e, index) {
    const event = e.event, str = event.key || String.fromCharCode(event.which);
    if (!/[0-9]/.test(str)) {
      event.preventDefault();
    }
    const product = this.invoice.products[index];
    const previousQuantity = product.paid_amount / product.price;
    const previousPaidAmount = product.paid_amount;
    product.paid_amount = product.quantity * product.price;
    this.invoice.total_quantity += (product.quantity - previousQuantity);
    this.invoice.total += (product.paid_amount - previousPaidAmount);
  }

  onChangePriceProduct(product_code) {
    this.isOpenPopover_id = product_code;
    this.isChangePriceProductPopover = !this.isChangePriceProductPopover;
  }

  onChangeDiscount(e, index) {
    const event = e.event, str = event.key || String.fromCharCode(event.which);
    if (!/[0-9]/.test(str)) {
      event.preventDefault();
    }
    const product = this.invoice.products[index];
    const paid_amount = product.paid_amount;
    const discount = e.component._options.value;
    const price = product.discount.price;
    if (!discount || discount === 0) {
      product.price = price;
    } else {
      if (discount > price) {
        product.discount.discount = price;
        e.component._options.text = price;
        product.price = 0;
        this.max = price;
      } else {
        if (product.discount.conversion_form === '$') {
          product.price = price - discount;
        }
        if (product.discount.conversion_form === '%') {
          product.price = price - (price * product.discount.discount) / 100;
        }
      }
    }
    product.paid_amount = product.quantity * product.price;
    this.invoice.total -= paid_amount - product.paid_amount;

  }

  onChangePrice(e, index) {
    const event = e.event, str = event.key || String.fromCharCode(event.which);
    if (!/[0-9]/.test(str)) {
      event.preventDefault();
    } else {
      const priceNew = e.component._options.value;
      const product = this.invoice.products[index];
      const price = product.discount.price;
      const paid_amount = product.paid_amount;
      if (!priceNew || priceNew === 0) {
        product.discount.discount = price;
        product.price = 0;
      } else {
        if (priceNew > price) {
          product.discount.discount = null;
        } else {
          if (product.discount.conversion_form === '$') {
            product.discount.discount = price - priceNew;
          }
          if (product.discount.conversion_form === '%') {
            product.discount.discount = ((price - priceNew) / price) * 100;
          }
        }
      }
      product.paid_amount = product.quantity * product.price;
      this.invoice.total -= paid_amount - product.paid_amount;
    }
  }

  onDeleteProduct(indexProduct) {
    this.invoice.products.splice(indexProduct, 1);
  }

  setDiscountForm(e, product) {
    if (e.currentTarget.text === '$') {
      product.discount.conversion_form = '$';
      this.max = null;
      product.discount.discount = (product.discount.price * product.discount.discount) / 100;
    }
    if (e.currentTarget.text === '%') {
      product.discount.conversion_form = '%';
      this.max = 100;
      product.discount.discount = parseFloat(((product.discount.discount / product.discount.price) * 100).toFixed(2));
    }
  }
}
