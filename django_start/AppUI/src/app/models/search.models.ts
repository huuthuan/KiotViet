/**
 * Created by Thuan Le on 03/30/2019.
 */

export class SearchFilterModel {
  categoryName: string;
  productName: string;
  productDescribe: string;

  public constructor(init?: Partial<SearchFilterModel>) {
    Object.assign(this, init);
  }
}
