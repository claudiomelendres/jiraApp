import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserService,
         JiraService,
         LoginGuardGuard} from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    JiraService,
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
