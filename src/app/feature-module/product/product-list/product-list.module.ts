import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';
import { EditService, GridAllModule, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ExpProductListComponent } from './exp-product-list/exp-product-list.component';
import { FinshedProductComponent } from './finshed-product/finshed-product.component';
import { NearToFinshedProductComponent } from './near-to-finshed-product/near-to-finshed-product.component';
import { NearToExpireProductComponent } from './near-to-expire-product/near-to-expire-product.component';


export const ROUTES:Routes=[
  {path:'', component:ProductListComponent},
  {path:'expire',component:ExpProductListComponent},
  {path:'finshed', component:FinshedProductComponent},
  {path:'NearFinsh', component:NearToFinshedProductComponent},
  {path:'NearExpire', component:NearToExpireProductComponent},
]
@NgModule({
  declarations: [
    ProductListComponent,
    ExpProductListComponent,
    FinshedProductComponent,
    NearToFinshedProductComponent,
    NearToExpireProductComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModuleModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    GridModule,
    ToolbarModule,
    GridAllModule, 
    HttpClientModule,
    CoreModuleModule.forRoot(),
  ],
  providers:[
        EditService,
        ToolbarService, 
        PageService,
        SortService, 
        FilterService,
        GroupService 
      ]})
      
export class ProductListModule { 

}
