import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES:Routes=[
  { path:'product',
  children:[
    {path:'list', loadChildren:()=>import('./product-list/product-list.module').then(x=>x.ProductListModule) },
    {path:'detail', loadChildren:()=>import('./product-detail/produt-detail.module').then(x=>x.ProdutDetailModule) }

  ]}
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ProductModule { }
