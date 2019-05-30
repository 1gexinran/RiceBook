import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MainComponent } from './main/main.component';
import { RouteModule } from './route/route.module';
import {ValidationService} from './validation.service'

import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { DateService } from './date.service';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterationComponent,
    MainComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidationService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
