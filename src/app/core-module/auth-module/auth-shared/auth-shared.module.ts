import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';



@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    TextBoxModule,
    ReactiveFormsModule,
    DropDownListModule
  ],
  exports :[
    AuthFormComponent
  ]

})
export class AuthSharedModule { }
