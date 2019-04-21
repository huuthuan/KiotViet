/**
 * Created by Thuan Le on 03/30/2019.
 */
export class SearchOptions {
  customer: boolean = false;
  product: boolean = false;

  constructor(init?: Partial<SearchOptions>) {
    Object.assign(this, init);
  }
}


export class SearchFilterModel {
  categoryName: string;
  productName: string;
  productDescribe: string;
  customerName: string;
  productCode: string;
  note: string;

  public constructor(init?: Partial<SearchFilterModel>) {
    Object.assign(this, init);
  }
}
