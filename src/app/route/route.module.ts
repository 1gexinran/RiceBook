import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {RegisterationComponent} from '../registeration/registeration.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { ProfileComponent } from '../profile/profile.component';


const route: Route[] = [{path:'', redirectTo:'/login',pathMatch:'full'},
                        {path:'login',component: LoginComponent},
                        {path:'registeration', component:RegisterationComponent},
                        {path:'main',component:MainComponent},
                        {path:'profile',component:ProfileComponent}];
@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
 export class RouteModule { }
