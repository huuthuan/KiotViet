/**
 * Created by Thuan Le on 04/10/2019.
 */
import {LoggedUser} from './account.model';

export class CustomerDetailModel {
  id: number;
  customer_code: string;
  name: string;
  birthday: Date;
  gender: string;
  email: string;
  phone: string;
  tax_code: string;
  address: string;
  created_by: number;
  created_date: string;
  modified_date: string;
  total_quantity: number;
  total: number;
  note: string;

  public constructor(init?: Partial<CustomerDetailModel>) {
    Object.assign(this, init);
  }
}
