import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBabComponent } from './nav-bar/nav-bab.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBabComponent
  ],
  imports: [
    CommonModule, 
    ButtonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    NavBabComponent 
  ]
})
export class HeaderModuleModule { }
