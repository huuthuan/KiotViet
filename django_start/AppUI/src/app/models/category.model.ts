/**
 * Created by Thuan Le on 03/14/2019.
 */

export class CategoryLookupModel {
  id: number;
  name: string;
  parentId: number;

  public constructor(init?: Partial<CategoryLookupModel>) {
    Object.assign(this, init);
  }
}

export class UpdateCategoryModel {
  id: number;
  name: string;
  categories: CategoryLookupModel[];

  public constructor(init?: Partial<UpdateCategoryModel>) {
    Object.assign(this, init);
  }
}


export class ProductDetailModel {
  id: number;
  name: string;
  category: CategoryLookupModel;
  price_cost: number;
  price_sale: number;
  on_hand: number;
  min_quantity: number;
  max_quantity: number;
  describe: string;
  comment: string;
  allows_sale: string;
  urls: any[];

  public constructor(init?: Partial<ProductDetailModel>) {
		Object.assign(this, init);
	}
}
