import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {ValidationService} from '../validation.service';
import {DateService} from '../date.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  registerForm = new FormGroup({
    userName: new FormControl(''),
    displayName: new FormControl(''),
    password: new FormControl(''),
    passwordConf: new FormControl(''),
    email: new FormControl(''),
    birth: new FormControl(''),
    zipcode: new FormControl(''),
    phoneNum: new FormControl('')
  })

  dateStatus: boolean;
  messages: string[];

  validation(): void {
    this.validationService.clear();

    this.validationService.userName(this.registerForm.get('userName').value);

    this.validationService.displayName(this.registerForm.get('displayName').value);

    this.validationService.email(this.registerForm.get('email').value);

    this.validationService.birth(this.registerForm.get('birth').value);

    this.validationService.zipcode(this.registerForm.get('zipcode').value);

    this.validationService.phoneNum(this.registerForm.get('phoneNum').value);

    this.validationService.password(this.registerForm.get('password').value,
  this.registerForm.get('passwordConf').value);


    this.dateStatus = this.validationService.status;
    this.messages = this.validationService.warnMessage;

    //use localStorage to store log in status
    if (this.dateStatus) {
      this.dateService.loadUser(
        this.registerForm.get('userName').value,
        this.registerForm.get('password').value,
        this.registerForm.get('displayName').value,
        this.registerForm.get('email').value,
        this.registerForm.get('birth').value,
        this.registerForm.get('zipcode').value,
        this.registerForm.get('phoneNum').value
      );
      localStorage.user = JSON.stringify(
        this.dateService.getUser()
      );
      this.router.navigate(['/main']);
    }

  }

  constructor(
    private validationService: ValidationService,
    private dateService: DateService,
    private router: Router) { 
  }

  ngOnInit() {
  }

}
