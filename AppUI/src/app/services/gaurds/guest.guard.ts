import {Injectable} from '@angular/core';
import {
  Router, CanActivate, Route,
  CanActivateChild, CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import {UserService} from '../user.service';

@Injectable()
export class GuestGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private router: Router, private userService: UserService) {
  }

  public get isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Return before URL if is logged.
    if (this.isLoggedIn) {
      const beforeURL = route.queryParams['returnUrl'] || '/';
      // Navigate to before URL.
      this.router.navigate([beforeURL]);
      return false;
    }

    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !this.isLoggedIn;
  }

  canLoad(route: Route): boolean {
    return !this.isLoggedIn;
  }
}
