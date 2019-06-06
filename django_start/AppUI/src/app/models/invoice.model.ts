/**
 * Created by Thuan Le on 04/12/2019.
 */

import {CustomerDetailModel} from './customer.model';
import {ProductDetailModel} from './category.model';
import {LoggedUser} from './account.model';

export class InvoiceReportModel {
  id: number;
  invoice_code: string;
  invoice_name: string;
  created_by: number;
  customer: CustomerDetailModel;
  created_date: string;
  products: ProductInvoiceDetailModel[] = [];
  total_quantity: number;
  total: number;
  discount: DiscountDetailModel;
  note: string;

  public constructor(init?: Partial<InvoiceReportModel>) {
    Object.assign(this, init);
  }
}

export class ProductInvoiceDetailModel {
  product: ProductDetailModel;
  quantity: number;
  price: number;
  discount: DiscountDetailModel;
  paid_amount: number;
  note: string;

  public constructor(init?: Partial<ProductInvoiceDetailModel>) {
    Object.assign(this, init);
  }
}

export class DiscountDetailModel {
  price: number;
  discount: number;
  discount_convert: number;
  conversion_form: string;

  public constructor(init?: Partial<DiscountDetailModel>) {
    Object.assign(this, init);
  }
}


export class UpdateInvoiceReportModel {
  id: number;
  invoice_code: string;
  created_by: number;
  customer: CustomerDetailModel = new CustomerDetailModel();
  created_date: string;
  products: ProductInvoiceDetailModel[] = [];
  total_quantity: number;
  total: number;
  discount: DiscountDetailModel;
  note: string;

  public constructor(init?: Partial<UpdateInvoiceReportModel>) {
    Object.assign(this, init);
  }

  static fromDetailModel(detail: InvoiceReportModel): UpdateInvoiceReportModel {
    const data = new UpdateInvoiceReportModel({
      id: detail.id,
      invoice_code: detail.invoice_code,
      created_by: detail.created_by,
      created_date: detail.created_date,
      total_quantity: detail.total_quantity,
      total: detail.total,
      note: detail.note
    });
    if (!!detail.customer) {
      data.customer = new CustomerDetailModel(detail.customer);
    } else {
      data.customer = new CustomerDetailModel();
    }
    return data;
  }
}
