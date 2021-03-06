import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/guard.guard';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';


export const ROUTES:Routes=[
  {path:'auth',
  children :[
    { path:'login', loadChildren:()=>import('./login-module/login-module.module').then(x=>x.LoginModuleModule)},
    { path:'signup', loadChildren:()=>import('./sign-up-module/sign-up-module.module').then(x=>x.SignUpModuleModule)}
  ]
   }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    

  ]
})
export class AuthModuleModule { }
