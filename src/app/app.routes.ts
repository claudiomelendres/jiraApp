
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
