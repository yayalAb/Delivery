import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';




export const ROUTES:Routes=[
  {path:'feature',
    children:[
     {path:'product', loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)},
     {path:'driver', loadChildren:()=>import('./driver-module/driver-module.module').then(x=>x.DriverModuleModule)},
     {path:'vehicle', loadChildren:()=>import('./vehicle-module/vehicle-module.module').then(x=>x.VehicleModuleModule)}
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
