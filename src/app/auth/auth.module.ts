import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
  ],
})
export class AuthModule { }
