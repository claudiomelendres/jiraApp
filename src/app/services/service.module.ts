import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService,
         JiraService,
         LoginGuardGuard} from './service.index';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LoginGuardGuard
  ],
  providers: [
    JiraService,
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
