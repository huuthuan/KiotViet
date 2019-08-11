import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import {JwtModule} from '@auth0/angular-jwt';
import {MalihuScrollbarModule, MalihuScrollbarService} from 'ngx-malihu-scrollbar';
import {NgxPermissionsModule} from 'ngx-permissions';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './modules/shared.module';

import {AppComponent} from './app.component';
import {
  TOKEN_KEY,
  ApiService,
  AuthenticationService,
  UserService,
  SharedService,
  RouterService
} from './services';
import {AuthGuard, GuestGuard} from './services/gaurds';

export function tokenGetter() {
  return localStorage.getItem(TOKEN_KEY);
}

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'JWT '
      }
    }),
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    SharedModule.forRoot(),
    SwiperModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    ApiService,
    UserService,
    AuthenticationService,
    SharedService,
    RouterService,
    AuthGuard,
    GuestGuard,
    MalihuScrollbarService,
    {provide: [APP_BASE_HREF, SWIPER_CONFIG ], useValue: ['/', DEFAULT_SWIPER_CONFIG]}
  ],
})
export class AppModule {
}
