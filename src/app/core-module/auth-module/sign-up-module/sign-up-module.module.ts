import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AuthSharedModule } from '../auth-shared/auth-shared.module';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES:Routes=[
    {path:'', component:SignupComponent}
]


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthSharedModule,
    RouterModule.forChild(ROUTES),
    
  ]
})
export class SignUpModuleModule { }
