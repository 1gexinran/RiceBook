import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  status: boolean;
  warnMessage: string[];
  infoMessage: string[];

  clear(): void {
    this.warnMessage = [];
    this.infoMessage = [];
    this.status = true;
  }

  userName(userName: string): boolean {
    if ((userName.match(/^[a-zA-Z]\w*/)) === null) {
      this.status = false;
      this.warnMessage.push("User name must start with a letter.");
      return false;
    }
    return true;
  }

  password(password: string, passwordConf: string): boolean {
    if (!password) {
      this.status = false;
      this.warnMessage.push("Please enter your password.");
      return false;
    }
    if (!(password == passwordConf)) {
      this.status = false;
      this.warnMessage.push("Password is not correct.");
      return false;
    }
    return true;
  }

  birth(birthday: string): boolean {
    let bd = birthday.split('-');
    let year = parseInt(bd[0]);
    let month = parseInt(bd[1])-1;
    let date = parseInt(bd[2]);
    let date18 = new Date(year+18, month, date);
    if (date18.getTime()>Date.now()) {
      this.status = false;
      this.warnMessage.push("You have to be at least 18 years old to register.");
      return false;
    }
    return true;
  }

  displayName(dispnme: string): boolean {
    if (!dispnme) {
      this.status = false;
      this.warnMessage.push("You need to create a display name.");
      return false;
    }
    return true;
  }

  email(eml: string): boolean {
    if ((eml.match(/^[^@]+@[A-z0-9]+\.[A-z]+$/)) === null) {
      this.status = false;
      this.warnMessage.push("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  zipcode(zc: string): boolean {
    if ((zc.match(/^\d\d\d\d\d$/)) === null ) {
      this.status = false;
      this.warnMessage.push("Please enter a valid 5-digits zipcode.");
      return false;
    }
    return true;
  }

  phoneNum(num: string): boolean {
    if((num.match(/^\d\d\d-\d\d\d-\d\d\d\d/)) === null) {
      this.status = false;
      this.warnMessage.push("Please enter a valid phone number! eg:123-123-1234")
      return false;
    }
    return true;
  }

  constructor() {
    this.status = true;
    this.warnMessage = [];
    this.infoMessage = [];
   }
}
