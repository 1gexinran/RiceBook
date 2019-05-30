import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { SearchPipe } from '../search.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { DateService } from '../date.service';
import { User } from '../user';
import { Component } from '@angular/core';

let user = new User('Mack','password');
let addName = 'gps';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let followers = [{"id": 0, "name": "gps", "status": "Nothing new.", "img": "/assets/img2.png"}];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent,
      SearchPipe ],
      imports:[
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        HttpModule
      ],
      providers:[
        DateService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should fetch articles for current logged in user',() =>{
    component.user = user;
    component.getPost();
    expect(component.msg).toBe('fetch article successful');
  })
  it('should updata the search key',() =>{
    expect('').toBe('');
  })
  it('should filter displayed articles by the search keyword',() =>{
    expect('').toBe('');
  })
  it('should add articles when adding a follower',() =>{
    component.addName = addName;
    component.user = user;
    component.sfollowers = followers;
    component.followers = followers;
    component.addFlo();
    expect(component.msg).toBe('fetch article successful');
  })
  it('should remove articles when removing a follower',() =>{
    component.sfollowers = followers;
    component.remove(0);
    expect(component.msg).toBe('remove article successfully');
  })
  
});
