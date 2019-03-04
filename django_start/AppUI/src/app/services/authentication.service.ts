import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from './api.service';
import {UserService} from './user.service';
import {
  LoginTokenModel,
  AccountLoginInput
} from '../models';

@Injectable()
export class AuthenticationService {
  constructor(private apiService: ApiService, private userService: UserService) {
  }

  login(loginData: AccountLoginInput): Observable<LoginTokenModel> {
    return this.apiService.post(`${this.apiService.apiUrl}/auth/login/`, loginData);
  }

  logout() {
    this.userService.logout();
  }
}
