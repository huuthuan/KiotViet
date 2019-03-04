import {Component, OnInit} from '@angular/core';

import {Utils} from '../../../utils/utilities';
import {ApiService, UserService} from '../../../services';
import {RegisterInput, LoginTokenModel} from '../../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: RegisterInput = new RegisterInput();
  isSubmitting: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
  }

  onSaveClick(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    this.isSubmitting = true;
    this.apiService.post(`${this.apiService.apiUrl}/auth/register`, this.register).subscribe(
      (data) => {
      // this.userService.setAccessToken(data.token);
      Utils.notifySuccess('You have successfully registered.');
      this.isSubmitting = false;
    }, (error) => {
      this.isSubmitting = false;
      Utils.notifyError('An error has occurred.');
    });
  }
}
