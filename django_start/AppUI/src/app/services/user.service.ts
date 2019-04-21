import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService} from 'ngx-permissions';

import {
  LoggedUser
} from '../models';

export const TOKEN_KEY = '_id_';

@Injectable()
export class UserService {
  private _loginUser: BehaviorSubject<LoggedUser> = new BehaviorSubject(null);

  constructor(private router: Router,
              private permissionsService: NgxPermissionsService,
              private jwtHelper: JwtHelperService) {
  }

  get currentUser(): Observable<LoggedUser> {
    return this._loginUser.asObservable();
  }

  get accessToken(): string {
    return localStorage.getItem(TOKEN_KEY) || null;
  }

  setAccessToken(token: string) {
    const user = new LoggedUser(this.jwtHelper.decodeToken(token));
    user.token = token;
    this.setLoggedUser(user);
  }

  setCurrentUser(value: LoggedUser) {
    this._loginUser.next(value);
  }

  get loggedUser(): LoggedUser {
    if (!this.accessToken) {
      return null;
    }
    const user = new LoggedUser(this.jwtHelper.decodeToken(this.accessToken));
    user.token = this.accessToken;
    return user;
  }

  setLoggedUser(user: LoggedUser) {
    if (!!user) {
      localStorage.setItem(TOKEN_KEY, user.token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
    this.initAccountInfo();
  }

  isLoggedIn(): boolean {
    return this.accessToken && !this.jwtHelper.isTokenExpired(this.accessToken);
  }

  initAccountInfo() {
    const user = this.loggedUser;
    this.setCurrentUser(user);
    if (!user) {
      this.permissionsService.flushPermissions();
    } else {
      this.permissionsService.loadPermissions([user.type, user.role]);
    }
  }

  setAccountPanel() {
  }

  redirectToPanel() {
    if (this.loggedUser) {
      this.router.navigate(['/']);
    } else {
      // TODO: Check this for other cases
      // this.logout();
    }
  }

  redirectToSalesPage() {
    if (this.loggedUser) {
      this.router.navigate(['/sell-goods']);
    } else {
      // TODO: Check this for other cases
      // this.logout();
    }
  }

  logout() {
    this.setLoggedUser(null);
    this.router.navigate(['/login']);
  }
}
