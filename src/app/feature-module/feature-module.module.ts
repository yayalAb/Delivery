import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryModuleModule } from './delivery-module/delivery-module.module';
import { AuthGuard } from '../core-module/auth-module/guard/guard.guard';




export const ROUTES:Routes=[
  {path:'feature',
    children:[
     {path:'product', loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)},
     {path:'driver', loadChildren:()=>import('./driver-module/driver-module.module').then(x=>x.DriverModuleModule),canActivate : [AuthGuard]},
     {path:'vehicle', loadChildren:()=>import('./vehicle-module/vehicle-module.module').then(x=>x.VehicleModuleModule)},
     {path:'delivery', loadChildren:()=>import('./delivery-module/delivery-module.module').then(x=>x.DeliveryModuleModule)}
    ]

  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class FeatureModuleModule { }
