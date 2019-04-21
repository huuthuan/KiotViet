import {Component, OnInit, Output, Input, EventEmitter, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {DxDataGridComponent} from 'devextreme-angular';
import {confirm} from 'devextreme/ui/dialog';
import {Utils} from '../../../utils/utilities';

import {UserService, ApiService} from '../../../services';
import {LoggedUser, EmployeeDetailModel, SearchOptions} from '../../../models';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
@ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @Output() onFilter = new EventEmitter();
  // @Input() search_options: SearchOptions = new SearchOptions();
  employeeSubscription: Subscription;
  isEmployeePopup: boolean = false;
  employeePopupTitle = 'New Insurance';
  loggedUser: LoggedUser = new LoggedUser();
  dataSource: EmployeeDetailModel[] = [];
  selectedEmployee: EmployeeDetailModel;
  isLoading: boolean = false;

  constructor(private userService: UserService,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.employeeSubscription = this.userService.currentUser.subscribe((user) => {
      this.loggedUser = user;
    });
    this.loadEmployee();
    // this.search_options.customer = true;
  }

  loadEmployee() {
    this.isLoading = true;
    this.apiService.get(`${this.apiService.apiUrl}/employees`).subscribe((data) => {
      this.dataSource = data;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  onAddEmployee() {
    this.employeePopupTitle = 'Add New Employee';
    this.selectedEmployee = new EmployeeDetailModel();
    this.isEmployeePopup = true;
  }

  onEditEmployeeTemplate(employee) {
    this.employeePopupTitle = 'Edit Employee';
    this.selectedEmployee = employee;
    this.isEmployeePopup = true;
  }

  onSavedEmployee() {
    this.isEmployeePopup = false;
    this.loadEmployee();
  }

  // onFilterGrid(searchFilter) {
  //   if (searchFilter) {
  //     if (searchFilter.customerName) {
  //       this.dataGrid.instance.filter([['name', '=', searchFilter.customerName],
  //           'OR', ['customer_code', '=', searchFilter.customerName],
  //           'OR', ['phone', '=', searchFilter.customerName]]);
  //       if (searchFilter.note) {
  //         this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
  //       }
  //     } else {
  //       if (searchFilter.note) {
  //         this.dataGrid.instance.filter(['note', '=', searchFilter.note]);
  //       } else {
  //         this.dataGrid.instance.clearFilter();
  //       }
  //     }
  //   }
  // }

  onDeleteEmployeeTemplate(employee: EmployeeDetailModel) {
    const message = 'Are you sure you want to delete this product ?';
    const title = 'Delete Template';
    confirm(message, title).then((result) => {
      if (result) {
        this.apiService.delete(`${this.apiService.apiUrl}/employees]/${employee}`, employee)
          .subscribe(() => {
            Utils.notifySuccess('Customer has been deleted successfully');
            this.loadEmployee();
          }, (error) => {
            if (error.message) {
              Utils.notifyError(error.message);
            } else {
              Utils.notifyError('An error has occurred. Please try again.');
            }
          });
      }
    });
  }

  onCancelEmployee() {
    this.isEmployeePopup = false;
  }
}
