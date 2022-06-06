import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleDetailModule } from './vehicle-detail/vehicle-detail.module';
import { VehicleListModule } from './vehicle-list/vehicle-list.module';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES:Routes=[
  {
    path:'vehicle',
    children:[
      {path:'list', loadChildren:()=>import('./vehicle-list/vehicle-list.module').then(x=>x.VehicleListModule)},
      {path:'detail', loadChildren:()=>import('./vehicle-detail/vehicle-detail.module').then(x=>x.VehicleDetailModule)} 
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
export class VehicleModuleModule { }
