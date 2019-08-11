import {Component, OnInit} from '@angular/core';

import {Utils} from '../../../utils/utilities';
import {ChangePasswordModel} from '../../../models';
import {ApiService, UserService} from '../../../services';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePassword: ChangePasswordModel = new ChangePasswordModel();
  isSubmitting: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.userService.redirectToPanel();
  }

  passwordComparison = () => this.changePassword.new_password1;

  onSaveClick(e) {
    debugger
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    this.isSubmitting = true;
    this.apiService.post(`${this.apiService.apiUrl}/auth/password/change`, this.changePassword).subscribe((data) => {
      this.changePassword = new ChangePasswordModel();
      e.validationGroup.reset();
      if (data.token) {
        Utils.notifySuccess('Your password has been changed successfully.');
        this.userService.setAccessToken(data.token);
        this.userService.redirectToPanel();
      } else {
        this.isSubmitting = false;
        Utils.notifyError('An error has occurred. Please try again.');
      }
    }, (error) => {
      this.isSubmitting = false;
      if (error.message) {
        Utils.notifyError(error.message);
      } else {
        Utils.notifyError('An error has occurred. Please try again.');
      }
    }, () => {
      this.isSubmitting = false;
    });
  }

  // TODO: refactor
  get isFormDirty() {
    return Object.values(this.changePassword).some(p => p != null);
  }
}
