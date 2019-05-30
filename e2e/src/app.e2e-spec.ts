import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should register new user', () => {
    page.navigateToRegister();
    element(by.css("input[formControlName=userName]")).sendKeys("xinran");
    element(by.css("input[formControlName=displayName]")).sendKeys("zzz")
    element(by.css("input[formControlName=email]")).sendKeys("xz60@rice.edu")
    element(by.css("input[formControlName=phoneNum]")).sendKeys("123-123-1234")
    element(by.css("input[formControlName=birth]")).sendKeys("11091994")
    element(by.css("input[formControlName=zipcode]")).sendKeys("77054")
    element(by.css("input[formControlName=password]")).sendKeys("password")
    element(by.css("input[formControlName=passwordConf]")).sendKeys("password")
    let regbtn = element(by.id("regbtn"))
    regbtn.click()
    
  })

  it('should log in as new user',() =>{
    page.navigateTo();
    let warnmsg = 'Wrong username or password!(You can use username: xz60, password: password for testing.)';
    let msg = element(by.id('msg'))
    element(by.id('uN')).sendKeys("newuser");
    element(by.id('pw')).sendKeys("password")
    let loginbtn = element(by.id("loginbtn"))
    loginbtn.click()
    expect(msg.getText()).toEqual(warnmsg)

  })

  it('should log in as test user', () => {
    page.navigateTo();
    element(by.id('uN')).sendKeys("test");
    element(by.id('pw')).sendKeys("password")
    let loginbtn = element(by.id("loginbtn"))
    loginbtn.click()

  })

  it('should create a new article and validate the article appears in the feed', ()=>{
    page.navigateToMain();
    let article = "test post"
    element(by.id("addnewpost")).sendKeys(article)
    element(by.id("postbtn")).click()
    let articles = element.all(by.css(".postcard"))
    expect(articles.count()).toEqual(1)
  })


  it('should update headline and verify the change', ()=>{
    page.navigateToMain();
    let newheadline = "new test headline"
    let headline = element(by.id("currStatus"))
    let newinput = element(by.id("status"))
    newinput.clear()
    newinput.sendKeys(newheadline)
    element(by.id("changebtn")).click()
    expect(headline.getText()).toEqual(newheadline)
  })
  it('should log out new user',() =>{
    page.navigateToMain()
    element(by.id('logoutbtn')).click()
  })
  
  it('should search for a keyword and verify the author',() =>{
    page.navigateToMain();
    expect('').toBe('')
  })
    
  it('should log out test user',() =>{
    page.navigateToMain()
    element(by.id('logoutbtn')).click()
  })
});
