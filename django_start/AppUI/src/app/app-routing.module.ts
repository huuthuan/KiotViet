import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AuthGuard} from './services/gaurds';
import {ErrorComponent, LayoutComponent} from './components';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './modules/client/client.module#ClientModule'
      }
    ]
  },
  {path: '', loadChildren: './modules/auth/auth.module#AuthModule'},
  {path: '**', component: ErrorComponent}
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
