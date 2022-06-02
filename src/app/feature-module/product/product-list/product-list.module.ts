import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES:Routes=[
  {path:'', component:ProductListComponent}
]
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
  ]
})
export class ProductListModule { }
