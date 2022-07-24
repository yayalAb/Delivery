import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { RouterModule, Routes } from '@angular/router';
export const ROUTES:Routes=[
  {path:'', component:AccountListComponent}
  
]


@NgModule({
  declarations: [
    AccountListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModuleModule
  ]
})
export class UserAccountModule { }
