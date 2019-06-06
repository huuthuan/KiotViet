import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import {cloneDeep} from 'lodash';
import {formatDate} from '@angular/common';

import {Utils} from '../../../utils/utilities';
import {UserService, ApiService} from '../../../services';
import {LoggedUser, CustomerDetailModel} from '../../../models';

@Component({
  selector: 'app-sell-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class SellCustomerDetailComponent implements OnInit {
  private _customer: CustomerDetailModel;
  @Input()
  get customer(): CustomerDetailModel {
    return this._customer;
  }

  set customer(value: CustomerDetailModel) {
    this._customer = value;
  }

  customerSubscription: Subscription;
  loggedUser: LoggedUser = new LoggedUser();
  editing_Customer: CustomerDetailModel;
  isSubmitting: boolean = false;
  genderMale: boolean;
  genderFemale: boolean;
  phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{3}$/;
  phoneRules: any = {
    X: /[02-9]/
  };
  customerDateStart = new Date();

  @Output() onSuccess = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.customerSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.editing_Customer = cloneDeep(this.customer);
  }

  onCancelCustomer() {
    this.onCancel.emit();
  }

  genderMaleChanged() {
    if (this.genderFemale) {
      this.genderFemale = !this.genderMale;
    }
  }

  genderFemaleChanged() {
    if (this.genderMale) {
      this.genderMale = ! this.genderFemale;
    }
  }

  onAddCustomer() {
    this.isSubmitting = true;
    this.editing_Customer.created_by = this.loggedUser.user_id;
    this.editing_Customer.created_date = formatDate(this.customerDateStart, 'yyyy-MM-dd', 'en-US', '+0530');
    if (this.genderMale)
      this.editing_Customer.gender = 'Male'
    else if (this.genderFemale)
      this.editing_Customer.gender = 'Female'
    this.apiService.post(`${this.apiService.apiUrl}/sell-goods/customers/`, this.editing_Customer).subscribe((data) => {
      this.onSuccess.emit(data);
      Utils.notifySuccess('Customer has been added successfully.');
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

  onSaveClick(e) {
    if (!e.validationGroup.validate().isValid) {
      return false;
    }
    this.onAddCustomer();
  }
}
