import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class DateService {
  user: User;

  loadUser(
    userName: string,
    password: string,
    displayName = 'zxrooo',
    email = "xz60@rice.edu",
    birth = "1994-11-09",
    zipcode = "77054",
    phoneNum = "281-250-5948"
  ): void {
    this.user = new User(userName, password, displayName, email, birth, zipcode, phoneNum);
  }

  getUser(): User {
    if ( localStorage.user ) {
      this.user = JSON.parse(localStorage.user);
    }
    return this.user;
  }

  constructor() { }
}
