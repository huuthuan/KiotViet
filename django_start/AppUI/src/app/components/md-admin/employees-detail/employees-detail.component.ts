import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import {cloneDeep} from 'lodash';
import {formatDate} from '@angular/common';

import {Utils} from '../../../utils/utilities';
import {UserService, ApiService} from '../../../services';
import {LoggedUser, EmployeeDetailModel} from '../../../models';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.scss']
})
export class EmployeesDetailComponent implements OnInit {
  private _employee: EmployeeDetailModel;
  @Input()
  get employee(): EmployeeDetailModel {
    return this._employee;
  }

  set employee(value: EmployeeDetailModel) {
    this._employee = value;
  }

  employeeSubscription: Subscription;
  loggedUser: LoggedUser = new LoggedUser();
  editing_Employee: EmployeeDetailModel;
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
    this.employeeSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.editing_Employee = cloneDeep(this.employee);
  }

  onCancelEmployee() {
    this.onCancel.emit();
  }

  genderMaleChanged() {
    if (this.genderFemale)
      this.genderFemale = !this.genderMale;
  }

  genderFemaleChanged() {
    if (this.genderMale)
      this.genderMale = !this.genderFemale;
  }

  onAddEmployee() {
    this.isSubmitting = true;
    this.editing_Employee.manage = this.loggedUser.user_id;
    this.apiService.post(`${this.apiService.apiUrl}/sell-goods/customers/`, this.editing_Employee).subscribe((data) => {
      this.onSuccess.emit();
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

  onUpdateEmployee() {
    this.isSubmitting = true;
    this.apiService.update(`${this.apiService.apiUrl}/sell-goods/customers/${this.editing_Employee.id}`, this.editing_Employee).subscribe((data) => {
      this.onSuccess.emit();
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

    if (this.employee.id) {
      this.onUpdateEmployee();
    } else {
      this.onAddEmployee();
    }
  }
}
