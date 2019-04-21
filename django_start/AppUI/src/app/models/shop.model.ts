/**
 * Created by Thuan Le on 04/18/2019.
 */

export class ShopDetailModel {
  name: string;
  email: string;
  phone: number;
  website: string;
  address: string;
  description: string;

  public constructor(init?: Partial<ShopDetailModel>) {
    Object.assign(this, init);
  }
}
