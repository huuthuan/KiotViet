import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared.module';
import {
  SellGoodsComponent, ProductsComponent, PaymentComponent, SellCustomerDetailComponent
} from '../../components/md-sell';

import {SwiperModule} from 'ngx-swiper-wrapper';


@NgModule({
  imports: [
    SharedModule,
    SwiperModule,
    RouterModule.forChild([
      {
        path: '',
        component: SellGoodsComponent,
        data: {title: 'Sell goods'}
      }
    ])
  ],
  declarations: [
    SellGoodsComponent,
    ProductsComponent,
    PaymentComponent,
    SellCustomerDetailComponent,
  ]
})
export class SellGoodsModule {
}
