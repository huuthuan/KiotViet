import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {cloneDeep, isEqual} from 'lodash';

import {Utils} from '../../../utils/utilities';
import {ApiService, UserService} from '../../../services';
import {LoggedUser, LoginTokenModel} from '../../../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileSubscription: Subscription;
  profile = new LoggedUser();
  editing_profile = new LoggedUser();
  isSubmitting: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.profileSubscription = this.userService.currentUser.subscribe((user) => {
      this.profile = user;
    });
    this.apiService.get(`${this.apiService.apiUrl}/auth/profile`).subscribe((data) => {
      this.profile = data;
      this.editing_profile = cloneDeep(data);
    }, (error) => {
      console.error(error);
    });
  }

  get isFormDirty() {
    return !isEqual(this.editing_profile, this.profile);
  }

  onCancelClick() {
    this.userService.redirectToPanel();
  }

  onSaveClick(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    this.isSubmitting = true;
    this.apiService.post(`${this.apiService.apiUrl}/auth/profile`, this.editing_profile).subscribe((data: LoginTokenModel) => {
      this.userService.setAccessToken(data.token);
      Utils.notifySuccess('Profile has been updated successfully.');
      this.profile = cloneDeep(this.editing_profile);
      this.isSubmitting = false;
    }, (error) => {
      this.isSubmitting = false;
      Utils.notifyError('An error has occurred.');
    });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
