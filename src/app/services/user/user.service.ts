import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICE, CONTENT_TYPE } from '../../config/config';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Injectable()
export class UserService {

  public userName: string;
  token: string = '';
  CONTENT_TYPE = 'application/json';


  constructor(
    public http: HttpClient,
    public router: Router
    ) {
    console.log('User Service Listo para utilizar.');
  }

  isLogged() {
    console.log(this.token.length);
    return this.token.length > 0 ? true : false ;
  }

  login(username: string, password: string) {
    const url = URL_SERVICE + '/rest/auth/1/session';
    const body = JSON.stringify({
      username: username,
      password: password
    });
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        'Content-Type': CONTENT_TYPE
      })}).map( (resp: any) => {
        // console.log(resp.session.value);
        this.token = resp.session.value;
        this.userName = username;
        return true;
      });
  }

  logout() {
    console.log('go out!!');
    this.userName = '';
    this.token = '';
    this.router.navigate(['/login']);
  }

}
