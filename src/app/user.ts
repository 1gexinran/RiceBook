export class User {
    userName: string;
    displayName: string;
    password: string;
    email: string;
    birth: string;
    zipcode: string;
    phoneNum: string;
  
    constructor(
      userName: string,
      password: string,
      displayName = 'zxrooo',
      email = "xz60@rice.edu",
      birth = "1994-11-09",
      zipcode = "77054",
      phoneNum = "281-250-5948"){
        this.userName = userName;
        this.password = password;
        this.displayName = displayName;
        this.email = email;
        this.birth = birth;
        this.zipcode = zipcode;
        this.phoneNum = phoneNum;
      }
  }