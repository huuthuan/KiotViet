import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {RouterService, AuthenticationService, UserService} from '../../services';
import {LoggedUser} from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  titleSubscription: Subscription;
  loggedUser: LoggedUser = new LoggedUser();
  isOpenMenu: boolean = false;
  title = '';

  constructor(private routerService: RouterService,
              private userService: UserService,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.titleSubscription = this.routerService.currentPageTitle.subscribe((title) => {
      this.title = title;
    });
  }

  onToggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  onCloseMenu() {
    if (this.isOpenMenu) {
      this.isOpenMenu = false;
    }
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
    this.titleSubscription.unsubscribe();
  }
}
