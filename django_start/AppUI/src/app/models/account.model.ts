export class AccountLoginInput {
  username: string;
  password: string;
  email: string;

  public constructor(init?: Partial<AccountLoginInput>) {
    Object.assign(this, init);
  }
}

export class LoginTokenModel {
  token: string;
  ephemeral_token: string;
  method: string;
  other_methods: string[];

  public constructor(init?: Partial<LoginTokenModel>) {
    Object.assign(this, init);
  }
}

export class LoggedUser {
  user_id: number;
  token: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  name: string;
  address: string;
  title: string;
  type: string;
  role: string;
  exp: number;

  public constructor(init?: Partial<LoggedUser>) {
    Object.assign(this, init);
  }
}

export class UserConfirmPassword {
  userId: number;
  password: string;

  public constructor(init?: Partial<UserConfirmPassword>) {
    Object.assign(this, init);
  }
}

export class ChangePasswordModel {
  new_password1: string;
  new_password2: string;
  old_password: string;
}

export class ForgotPasswordModel {
  email: string;
}

export class ResetPasswordModel {
  uid: string;
  token: string;
  new_password1: string;
  new_password2: string;
}

export class RegisterInput {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: number;
  shop_name: string;
  confirm_password: string;
  address: string;

  public constructor(init?: Partial<RegisterInput>) {
    Object.assign(this, init);
  }
}

