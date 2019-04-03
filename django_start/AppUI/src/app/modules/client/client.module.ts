import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared.module';
import {ClientModuleComponent} from './client.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {
  ProductComponent,
  ProductDetailComponent,
  SearchFormComponent,
  CategoryComponent
} from '../../components/md-product';

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
        path: 'product',
        component: ProductComponent,
        data: {title: 'Product'}
      },
    ])
  ],
  declarations: [
    ClientModuleComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    SearchFormComponent,
    CategoryComponent
  ]
})
export class ClientModule {
}
