import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usuario: any;
  token: string;

  constructor() { }

  isLogged() {
    return false;
  }
}
