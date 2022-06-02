import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list/driver-list.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES:Routes=[
  {path:'', component:DriverListComponent }
]

@NgModule({
  declarations: [
    DriverListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DriverListModule { }
