import {Injectable} from '@angular/core';
import {
  Router, Route, CanLoad,
  CanActivate, CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {UserService} from '../user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private userService: UserService) {
  }

  public isLoggedIn(): boolean {
    if (this.userService.isLoggedIn()) {
      return true;
    }
    this.userService.logout();
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLoggedIn();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLoggedIn();
  }

  canLoad(route: Route): boolean {
    return this.isLoggedIn();
  }
}
