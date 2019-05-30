import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/login');
  }

  navigateToMain(){
    return browser.get('/main');
  }
  navigateToProfile(){
    return browser.get('/profile');
  }
  navigateToRegister(){
    return browser.get('/registeration')
  }
}
