import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list/driver-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES:Routes=[
  {path:'', component:DriverListComponent }
]

@NgModule({
  declarations: [
    DriverListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
    RouterModule.forChild(ROUTES)
  ]
})
export class DriverListModule { }
