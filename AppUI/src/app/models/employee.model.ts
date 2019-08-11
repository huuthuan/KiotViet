import {ShopDetailModel} from './shop.model';

export class AccountEmployeeModel {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  password: string;
  confirm_password: string;
  profile: EmployeeUserProfileModel;

  public constructor(init?: Partial<AccountEmployeeModel>) {
    Object.assign(this, init);
  }
}

export class UpdateAccountEmployeeModel {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_active: boolean;
  password: string;
  confirm_password: string;
  shop: ShopDetailModel;
  profile: EmployeeUserProfileModel = new EmployeeUserProfileModel();

  public constructor(init?: Partial<UpdateAccountEmployeeModel>) {
    Object.assign(this, init);
  }

  static fromDetailModel(detail: AccountEmployeeModel): UpdateAccountEmployeeModel {
    const data = new UpdateAccountEmployeeModel({
      id: detail.id,
      username: detail.username,
      first_name: detail.first_name,
      last_name: detail.last_name,
      email: detail.email,
      is_active: detail.is_active
    });
    if (!!detail.profile) {
      data.profile = new EmployeeUserProfileModel(detail.profile);
    } else {
      data.profile = new EmployeeUserProfileModel();
    }
    return data;
  }
}

export class EmployeeUserProfileModel {
  id: number;
  name: string;
  gender: string;
  phone: string;
  date_birth: string;
  address: string;
  role: RoleDetailModel;
  note: string;

  public constructor(init?: Partial<EmployeeUserProfileModel>) {
    Object.assign(this, init);
  }
}

export class RoleDetailModel {
  id: number;
  name: string;

  public constructor(init?: Partial<RoleDetailModel>) {
    Object.assign(this, init);
  }
}
