import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared.module';
import {AuthGuard, GuestGuard} from '../../services/gaurds';
import {LayoutComponent} from '../../components';
import {
  LoginComponent,
  ProfileComponent,
  RegisterComponent,
  ChangePasswordComponent,
} from '../../components/md-auth';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'profile',
            component: ProfileComponent,
            data: {title: 'Profile'}
          },
          {
            path: 'change-password',
            component: ChangePasswordComponent,
            data: {title: 'Change Password'}
          }
        ]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [GuestGuard],
        data: {title: 'Login'}
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [GuestGuard],
        data: {title: 'Register'}
      },
    ])
  ],
  declarations: [
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ChangePasswordComponent,
  ]
})
export class AuthModule {
}
