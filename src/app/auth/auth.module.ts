import {NgModule} from '@angular/core';

import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
