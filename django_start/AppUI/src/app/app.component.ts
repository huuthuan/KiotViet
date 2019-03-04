import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

import {RouterService, SharedService, UserService} from './services';
import {Utils} from './utils/utilities';


@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private routerService: RouterService,
              private userService: UserService) {
  }

  ngOnInit() {
    // Init router
    this.routerService.initRouterData();
    // Init the global account info
    this.userService.initAccountInfo();
    // Set the correct panel for User
    this.userService.setAccountPanel();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (!Utils.isNoneRedirectionPage(window.location.pathname) && this.router.url === '/') {
          // Redirect user to correct Panel
          this.userService.redirectToPanel();
        }
      }
    });
    this.sharedService.hasPopupOpened.subscribe((isOpen) => {
      const hasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight;
      if (isOpen && hasScroll) {
        document.body.classList.add('popup-opened');
      } else {
        document.body.classList.remove('popup-opened');
      }
    });
  }
}
