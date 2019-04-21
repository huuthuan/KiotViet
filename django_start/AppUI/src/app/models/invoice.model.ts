/**
 * Created by Thuan Le on 04/12/2019.
 */

import {CustomerDetailModel} from './customer.model';
import {LoggedUser} from './account.model';
import {ProductDetailModel} from './category.model';

export class InvoiceReportModel {
  id: number;
  invoice_code: string;
  created_by: LoggedUser;
  customer: CustomerDetailModel;
  created_date: string;
  products: InvoiceDetailModel[] = [];
  total_quantity: number;
  total: number;
  discount: number;
  note: string;

  public constructor(init?: Partial<InvoiceReportModel>) {
    Object.assign(this, init);
  }
}

export class InvoiceDetailModel {
  product: ProductDetailModel;
  quantity: number;
  tax: number;
  price: number;
  discount: number;
  sub_total: number;
  paid_amount: number;
  note: string;

  public constructor(init?: Partial<InvoiceDetailModel>) {
    Object.assign(this, init);
  }
}
