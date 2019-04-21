/**
 * Created by Thuan Le on 04/18/2019.
 */

export class RoleDetailModel {
  id: number;
  name: string;

  public constructor(init?: Partial<RoleDetailModel>) {
    Object.assign(this, init);
  }
}


export class EmployeeDetailModel {
  id: number;
  name: string;
  phone: number;
  email: string;
  date_birth: string;
  address: string;
  role: number;
  manage: number;
  username: string;
  password: string;
  confirm_password: string;
  status: boolean
  note: string;

  public constructor(init?: Partial<EmployeeDetailModel>) {
    Object.assign(this, init);
  }
}
