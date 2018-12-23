import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public _userService: UserService) { }

  ngOnInit() {
  }

  logoutForm() {
    this._userService.logout();
  }

}
