import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InvalidLoginPassword: boolean = false;
  constructor(
    public router: Router,
    public _userService: UserService) {

  }

  ngOnInit() {

    // this._userService.login('claudiomelendres@gmail.com', 'Informatica3210.')
    // .subscribe( resp => {
    //       console.log( resp );
    //     }, err => {
    //       console.log( err );
    //     });
  }

  loginForm(forma: NgForm ) {
    if ( forma.invalid ) {
      return;
    }

    const user = new User(null, forma.value.email, forma.value.password );

    this._userService.login( user.email, user.password )
                  .subscribe( correct => {
                    this.router.navigate(['/home']);
                  }, incorrect => {
                    console.log('incorrect');
                    this.InvalidLoginPassword = true;
                  });

  }

}
