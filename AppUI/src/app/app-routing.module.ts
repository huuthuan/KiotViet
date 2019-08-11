import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AuthGuard} from './services/gaurds';
import {ErrorComponent, LayoutComponent} from './components';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LayoutComponent,
        loadChildren: './modules/client/client.module#ClientModule'
      },
      {
        path: 'sell-goods',
        loadChildren: './modules/sell-goods/sell-goods.module#SellGoodsModule'
      },
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
