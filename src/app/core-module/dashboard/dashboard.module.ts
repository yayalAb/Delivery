import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
export const ROUTES:Routes=[
  {path:'', component:DashboardComponent}
]


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardLayoutModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DashboardModule { }
