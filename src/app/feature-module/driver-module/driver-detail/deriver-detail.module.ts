import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES:Routes=[
  {path:'', component:DriverComponent}
]

@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DeriverDetailModule { }
