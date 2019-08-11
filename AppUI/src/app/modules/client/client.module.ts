import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared.module';
import {ClientModuleComponent} from './client.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {
  ShopDetailComponent,
  EmployeesComponent,
  EmployeesDetailComponent,
  CategoryComponent,
  ProductComponent,
  ProductDetailComponent,
  SearchFormComponent,
  CustomerComponent,
  CustomerDetailComponent,
  InvoicesComponent,
  InvoiceDetailComponent
} from '../../components/md-admin';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientModuleComponent,
        children: [
          {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
          {
            path: 'dashboard',
            component: DashboardComponent,
            data: {title: 'Dashboard'}
          }
        ]
      },
      {
        path: 'shop',
        component: ShopDetailComponent,
        data: {title: 'Shop setting'}
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        data: {title: 'Employees'}
      },
      {
        path: 'product',
        component: ProductComponent,
        data: {title: 'Products'}
      },
      {
        path: 'customers',
        component: CustomerComponent,
        data: {title: 'Customers'}
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
        data: {title: 'invoices'}
      },
    ])
  ],
  declarations: [
    ClientModuleComponent,
    DashboardComponent,
    ShopDetailComponent,
    EmployeesComponent,
    EmployeesDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    SearchFormComponent,
    CategoryComponent,
    CustomerComponent,
    CustomerDetailComponent,
    InvoicesComponent,
    InvoiceDetailComponent
  ]
})
export class ClientModule {
}
