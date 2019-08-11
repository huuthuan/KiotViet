import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {NgxPermissionsModule} from 'ngx-permissions';
import {DevExtremeModule} from 'devextreme-angular';
import {ClickOutsideModule} from 'ng-click-outside';

import {
  JoinPipe
} from '../pipies';
import {
  ErrorComponent,
  HeaderComponent,
  SidebarComponent,
  LayoutComponent,
  LoadingPanelComponent,
} from '../components';


const BASE_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  NgxPermissionsModule,
  ClickOutsideModule,
  //
  // Dev Extreme
  DevExtremeModule
];

const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  SidebarComponent,
  ErrorComponent,
  LoadingPanelComponent,
];

const DIRECTIVES = [];

const PIPES = [
  JoinPipe
];

const NB_THEME_PROVIDERS = [];

@NgModule({
  imports: [
    ...BASE_MODULES,
  ],
  exports: [...BASE_MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
