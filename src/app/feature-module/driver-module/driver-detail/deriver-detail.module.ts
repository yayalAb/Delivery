import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverComponent } from './driver/driver.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import { MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { HttpClientModule } from '@angular/common/http';
import { CoreModuleModule } from 'src/app/core-module/core-module.module';



export const ROUTES:Routes=[
  {path:'', component:DriverComponent},
  {path:':id', component:DriverComponent}
]

@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    TextBoxModule,
    MaskedTextBoxModule,
    ReactiveFormsModule,
    NumericTextBoxModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    CoreModuleModule.forRoot()
  ]
})
export class DeriverDetailModule { }
