import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryListModule } from './delivery-list/delivery-list.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';
import { DeliveredOrdersComponent } from './delivered-orders/delivered-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

export const ROUTES:Routes=[
  {path:'delivery',
  children:[
    {path:'list', loadChildren:()=>import('./delivery-list/delivery-list.module').then(x=>x.DeliveryListModule)},
    {path:'detail', loadChildren:()=>import('./delivery-detail/delivery-detail.module').then(x=>x.DeliveryDetailModule)},
    {path:'pending',component:PendingOrdersComponent},
    {path:'delivered',component:DeliveredOrdersComponent}
  ]}
]

@NgModule({
  declarations: [
    DeliveredOrdersComponent,
    PendingOrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DeliveryModuleModule { }
