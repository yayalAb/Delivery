import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES:Routes=[
  {path:'', component:VehicleListComponent}
  
]


@NgModule({
  declarations: [
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class VehicleListModule { }
