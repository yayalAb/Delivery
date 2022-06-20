import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { HttpClientModule } from '@angular/common/http';
import { EditService, GridAllModule, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
export const ROUTES:Routes=[
  {path:'', component:ProductListComponent}
]
@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
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
  ]

})
export class ProductListModule { }
