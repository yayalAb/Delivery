import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverListComponent } from './driver-list/driver-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

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
    RouterModule.forChild(ROUTES),
    SharedModuleModule
  ]
})
export class DriverListModule { }
