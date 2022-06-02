import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES:Routes=[
  {path:'driver',
  children:[
    {path:'list', loadChildren:()=>import('./driver-list/driver-list.module').then(x=>x.DriverListModule)},
    {path:'detail', loadChildren:()=>import('./driver-detail/deriver-detail.module').then(x=>x.DeriverDetailModule)}
  ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class DriverModuleModule { }
