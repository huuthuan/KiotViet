import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Utils} from '../../../utils/utilities';
import {ApiService, UserService} from '../../../services';
import {RegisterInput} from '../../../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: RegisterInput = new RegisterInput();
  isSubmitting: boolean = false;

  constructor(private router: Router,
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
        Utils.notifySuccess('Caregory product has been added successfully.');
        this.router.navigate(['/login']);
        this.isSubmitting = false;
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
}
