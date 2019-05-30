import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { DateService } from '../date.service';
import { ValidationService } from '../validation.service';
import{images} from '../images'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  headshot: string;
  warnMsg: string[];
  updaForm = new FormGroup({
    userName: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    phoneNum: new FormControl(''),
    zipcode: new FormControl(''),
    password: new FormControl('')
  });
  naviToM(): void{
    this.router.navigate(['/main']);
  }
  update(): void {
    this.validationService.clear();

    let userName = this.updaForm.get('userName').value;
    let displayName = this.updaForm.get('displayName').value;
    let email = this.updaForm.get('email').value;
    let phoneNum = this.updaForm.get('phoneNum').value;
    let zipcode = this.updaForm.get('zipcode').value;
    let password = this.updaForm.get('password').value;

    if ( userName ) {
      if ( this.validationService.userName(userName) ) {
        this.user.userName = userName;
        this.dataService.user.userName = userName;
      }
    }

    if ( displayName ) {
      this.user.displayName = displayName;
      this.dataService.user.displayName = displayName;

    }

    if ( email ) {
      if ( this.validationService.email(email) ) {
        this.user.email = email;
        this.dataService.user.email = email;
      }
    }

    if ( phoneNum ) {
      if ( this.validationService.phoneNum(phoneNum) ) {
        this.user.phoneNum = phoneNum;
        this.dataService.user.phoneNum = phoneNum;
      }
    }

    if ( zipcode ) {
      if ( this.validationService.zipcode(zipcode) ) {
        this.user.zipcode = zipcode;
        this.dataService.user.zipcode = zipcode;
      }
    }

    if ( password ) {
      this.user.password = password;
      this.dataService.user.password = password;
    }

    this.warnMsg = this.validationService.warnMessage;
  }

  

  constructor(
    private router: Router,
    private dataService: DateService,
    private validationService: ValidationService
  ) {this.user = new User('xz60','password') }

  ngOnInit() {
    this.user = this.dataService.getUser();
    this.headshot = images[0];
  }

}
