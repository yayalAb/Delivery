import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthSharedModule } from '../auth-shared/auth-shared.module';
import { CoreModuleModule } from '../../core-module.module';
import { HttpClientModule } from '@angular/common/http';
export const ROUTES:Routes=[
  {path:'', component:LoginComponent}

]


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AuthSharedModule,
    HttpClientModule,
    CoreModuleModule.forRoot()
  ]
})
export class LoginModuleModule { }
