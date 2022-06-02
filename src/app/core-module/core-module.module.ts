import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModuleModule } from './header-module/header-module.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleModule } from './auth-module/auth-module.module';


export const ROUTES:Routes=[
  {path:'core',
  children :[
    { path:'', loadChildren:()=>import('./auth-module/auth-module.module').then(x=>x.AuthModuleModule)}
  ]
   }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModuleModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[
    HeaderModuleModule
  ]
})
export class CoreModuleModule {

 }
