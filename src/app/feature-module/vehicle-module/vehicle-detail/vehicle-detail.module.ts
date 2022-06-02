import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES:Routes=[
  {path:'', component:VehicleDetailComponent}
  
]

@NgModule({
  declarations: [
    VehicleDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class VehicleDetailModule { }
