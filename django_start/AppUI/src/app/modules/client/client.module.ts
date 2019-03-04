import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared.module';
import {ClientModuleComponent} from './client.component';
import {DashboardComponent} from './dashboard/dashboard.component';

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
      }
    ])
  ],
  declarations: [
    ClientModuleComponent,
    DashboardComponent
  ]
})
export class ClientModule {
}
