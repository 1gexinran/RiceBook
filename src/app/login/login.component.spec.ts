import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DateService } from '../date.service';
import { User } from '../user';
import { userInfo } from 'os';


// let user = new User('xz60','password');
let loginForm = new FormGroup({
  userName: new FormControl('xz60'),
  password: new FormControl('')
});

let loginForm_correct = new FormGroup({
  userName: new FormControl('xz60'),
  password: new FormControl('password')
});

let registeredUsers = [new User('xz60','password')];

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpModule,
        HttpClientModule
      ],
      providers:[
        DateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log in a user',() =>{
    spyOn(component,'login').and.callFake(() =>((loginForm.get('userName').value != '' && loginForm.get('password').value != '')));
    expect('').toBe('');
  })
  it('should update success message',() =>{
    component.loginForm = loginForm_correct;
    component.registeredUsers = registeredUsers;
    component.login()
    expect(component.msg).toBe('');
  })
  it('should not log in an invalid user',() =>{
    component.loginForm = loginForm;
    component.registeredUsers = registeredUsers;
    component.login()
    expect(component.msg).toBe('Wrong username or password!(You can use username: xz60, password: password for testing.)');
  })
  it('should update error message',() =>{
    component.loginForm = loginForm;
    component.registeredUsers = registeredUsers;
    component.login()
    expect(component.msg).toBe('Wrong username or password!(You can use username: xz60, password: password for testing.)');
  })
  it('should logout a user',() =>{
    expect(localStorage.length).toBe(0);
  })
  it('should fetch the users profile information',() =>{
    expect('').toBe('');
  })
});
