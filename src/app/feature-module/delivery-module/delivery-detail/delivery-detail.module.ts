import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {NumericTextBoxModule, TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


export const ROUTES:Routes=[
  {path:'', component:DeliveryDetailComponent},
  {path:':id', component:DeliveryDetailComponent}

]

@NgModule({
  declarations: [
    DeliveryDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropDownListModule,
    TextBoxModule,
    NumericTextBoxModule,
    ButtonModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
    RouterModule.forChild(ROUTES),

    DropDownListModule
  ]
})
export class DeliveryDetailModule { }
