import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {cloneDeep, isEqual} from 'lodash';

import {Utils} from '../../../utils/utilities';
import {ApiService, UserService} from '../../../services';
import {LoggedUser, ShopDetailModel} from '../../../models';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss']
})
export class ShopDetailComponent implements OnInit, OnDestroy {
  shopSubscription: Subscription;
  loggedUser = new LoggedUser();
  editing_shop = new ShopDetailModel();
  selectedShop: ShopDetailModel;
  isSubmitting: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.shopSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.apiService.get(`${this.apiService.apiUrl}/shop`).subscribe((data) => {
      this.editing_shop = data;
      this.selectedShop = cloneDeep(data);
    }, (error) => {
      console.error(error);
    });
  }

  get isFormDirty() {
    return !isEqual(this.selectedShop, this.editing_shop);
  }

  onCancelClick() {
    this.userService.redirectToPanel();
  }

  onSaveClick(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    debugger;
    this.isSubmitting = true;
    this.apiService.post(`${this.apiService.apiUrl}/shop`, this.editing_shop).subscribe((data) => {
      Utils.notifySuccess('Shop has been updated successfully.');
      this.isSubmitting = false;
    }, (error) => {
      this.isSubmitting = false;
      Utils.notifyError('An error has occurred.');
    });
  }

  ngOnDestroy() {
    this.shopSubscription.unsubscribe();
  }
}
