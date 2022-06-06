import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DeliveryListModule } from './delivery-list/delivery-list.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';

export const ROUTES:Routes=[
  {path:'delivery',
  children:[
    {path:'list', loadChildren:()=>import('./delivery-list/delivery-list.module').then(x=>x.DeliveryListModule)},
    {path:'detail', loadChildren:()=>import('./delivery-detail/delivery-detail.module').then(x=>x.DeliveryDetailModule)}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DeliveryModuleModule { }
