import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';

import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ReactiveFormsModule } from '@angular/forms';

export const ROUTES:Routes=[
  {path:'', component:VehicleDetailComponent},
  {path:':id', component:VehicleDetailComponent}
  
]

@NgModule({
  declarations: [
    VehicleDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModuleModule.forRoot(),
    RouterModule.forChild(ROUTES),
    NumericTextBoxModule,
    MaskedTextBoxModule,
    TextBoxModule,
    ReactiveFormsModule
  ]
})
export class VehicleDetailModule { }
