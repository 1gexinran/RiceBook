import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { DateService } from '../date.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: User;
  registeredUsers: User[];
  msg: string;

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  login(): void {
    let logUser = this.loginForm.get('userName').value
    let logUserPass = this.loginForm.get('password').value
    // console.log(this.registeredUsers);
    let matchUser =  this.registeredUsers.find(user => user.userName == logUser && user.password == logUserPass);

    if (matchUser) {
      this.dateService.user = matchUser;
      this.user = matchUser;
 
      localStorage.user = JSON.stringify(this.user);
      this.router.navigate(['/main']);
    }
    else {
      this.msg = 'Wrong username or password!(You can use username: xz60, password: password for testing.)'
    }
  }

  // match(logUser, logUserPass): User {
  //   return new User(logUser,logUserPass);
  // }
  constructor(private router: Router,
    private dateService: DateService,
    private http: Http) { this.user = new User('xz60','password')}

  ngOnInit() {
    localStorage.clear();
    // console.log(localStorage);
    this.msg = '';
    this.http.get('assets/data/users.json').map(res => res.json()).subscribe(u => this.registeredUsers = u.users)
  }

}
