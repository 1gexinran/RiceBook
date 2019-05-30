import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService } from '../date.service';
import { Http } from '@angular/http';
import { User } from '../user';
import {images} from '../images';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
user: User;
headshot: string;
followers: Object[];
sfollowers: Object[];
posts: Object[];
sposts: Object[];
addName: string;
currStatus: string;
newStatus: string;
inputText: string;
searchKey: string;
textonly: boolean;
showTxt: string;
comments: boolean[];
msg:string;

clearTxt(): void {
  this.inputText = '';
}

naviToP(): void{
  this.router.navigate(['/profile']);
}
naviToL(): void{
  this.router.navigate(['/login']);
}

getFollowers(): void {
  this.http.get('/assets/data/follower.json').map(res => res.json())
  .subscribe(f => this.followers = f.followers);
  //console.log(this.followers);
}


getPost(): void {
  this.http.get('/assets/data/posts.json').map(res => res.json())
  .subscribe(f => {
    this.posts = f.posts
    this.sposts = this.sposts.concat(f.posts.filter(p => {return p["author"] == this.user.userName}));
    this.comments = new Array<boolean>(this.sposts.length)
    this.msg = 'get article successfully';

  })

}

remove(id: number): void {
  this.rmPost(this.sfollowers[id]["name"])
  this.sfollowers.splice(id, 1);
}

addFlo(): void {
  if (this.addName) {
    let newfollower = this.followers.find(f => {return f["name"] == this.addName})
    if (newfollower && newfollower["name"]!=this.user.userName) {
      if (!this.sfollowers.find(f => {return f["name"] == newfollower["name"]})){
        this.sfollowers.push(newfollower)
        this.addPost(this.addName)
      }
      this.addName = ''
    }
    else this.addName = "Try to add: gps, fl, wpg and zhz"
  }
}

addPost(name: string): void {
  let ssposts = this.posts.filter(p => {return p["author"] == name})
  this.sposts = ssposts.concat(this.sposts)
  this.comments = new Array<boolean>(this.sposts.length)
  this.msg = 'fetch article successful';
}

rmPost(name: string): void {
  this.msg = 'remove article successfully'
  this.sposts = this.sposts.filter(p => {return p["author"] != name})
  this.comments = new Array<boolean>(this.sposts.length)
}

updateStatus(): void {
  if (this.newStatus){
    this.currStatus = this.newStatus;
    localStorage.userStatus = this.currStatus;
  }
  this.newStatus = '';
}

newPost(): void {
  if ( this.inputText ) {
    let newP = {
      content: this.inputText,
      author: this.user.displayName,
      img: images[Math.floor(Math.random()*4)]
    }
    if ( this.textonly ) newP.img = ''
    if ( !localStorage.newP ) {
      localStorage.newP = JSON.stringify({newp:[newP]})
    }
    else {
      let newPs = JSON.parse(localStorage.newP).newp
      newPs = [newP].concat(newPs)
      localStorage.newP = JSON.stringify({newp:newPs})
    }
    this.sposts.unshift (newP)
    this.comments.unshift(false)
  }
}

hideAndShow(index: number): void {
  this.comments[index] = !this.comments[index]
}


constructor(
  private dataService: DateService,
  private router: Router,
  private http: Http
) { }

ngOnInit() {
  this.user = {
    userName: "xz60",
    displayName: "xinran",
    password: "password",
    email: "xz60@rice.edu",
    birth: "1994-11-09",
    zipcode: "77054",
    phoneNum: "281250-5948"
  }
  this.msg = 'fetch article successful';
  this.user = this.dataService.getUser();
  this.sposts = (localStorage.newP)?JSON.parse(localStorage.newP).newp:[];
  this.sfollowers = [];
  this.showTxt = "Hide Comments";
  this.getFollowers();
  this.getPost();
  this.headshot = images[0];
  if ( localStorage.userStatus ) this.currStatus = localStorage.userStatus;
  else this.currStatus = 'peace';  }

}