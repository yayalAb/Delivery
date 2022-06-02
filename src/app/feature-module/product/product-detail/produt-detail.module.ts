import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES:Routes=[
  {path:'', component:ProductDetailComponent}
]


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
    RouterModule.forChild(ROUTES)
  ]
})
export class ProdutDetailModule { }
