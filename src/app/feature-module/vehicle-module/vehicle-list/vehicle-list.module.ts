import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';

export const ROUTES:Routes=[
  {path:'', component:VehicleListComponent}
  
]


@NgModule({
  declarations: [
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
    RouterModule.forChild(ROUTES)
  ]
})
export class VehicleListModule { }
