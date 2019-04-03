/**
 * Created by Thuan Le on 03/13/2019.
 */

export class UpdateProductModel {
  id: number;
  name: string;
  category: number;
  price_cost: number;
  price_sale: number;
  on_hand: number;
  min_quantity: number;
  max_quantity: number;
  describe: string;
  comment: string;
  allows_sale: string;
  urls: any[];

  public constructor(init?: Partial<UpdateProductModel>) {
    Object.assign(this, init);
  }
}
