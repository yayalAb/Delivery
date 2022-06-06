import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core-module/auth-module/guard/guard.guard';
import { HttpClientModule } from '@angular/common/http';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

export const ROUTES:Routes=[
  {path:'', component:DeliveryListComponent, canActivate : [AuthGuard]}

]


@NgModule({
  declarations: [
    DeliveryListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
    RouterModule.forChild(ROUTES),
    SharedModuleModule
  ]
})
export class DeliveryListModule { }
