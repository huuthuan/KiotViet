import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {cloneDeep} from 'lodash';

import {Utils} from '../../../utils/utilities';
import {AuthenticationService, UserService} from '../../../services';
import {AccountLoginInput, LoginTokenModel} from '../../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: AccountLoginInput = new AccountLoginInput();
  isSubmitting: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService, private authService: AuthenticationService) {
  }

  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.userService.redirectToPanel();
    }
  }

  onLogin(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    this.isSubmitting = true;
    const edited_user = cloneDeep(this.user);
    edited_user.username = edited_user.username.toLowerCase();
    this.authService.login(edited_user).subscribe(
      (data: LoginTokenModel) => {
        if (data.token) {
          this.userService.setAccessToken(data.token);
          if (e.element.innerText === 'Manage') {
            this.userService.redirectToPanel();
          }
          if (e.element.innerText === 'Sell goods') {
            this.userService.redirectToSalesPage();
          }
        } else {
          this.isSubmitting = false;
          Utils.notifyError('Unable to log in with provided credentials.');
        }
      }, (error) => {
        this.isSubmitting = false;
        if (error.message) {
          Utils.notifyError(error.message);
        } else {
          Utils.notifyError('Unable to login with provided credentials.');
        }
      }, () => {
        this.isSubmitting = false;
      });
  }
}
