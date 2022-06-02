import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBabComponent } from './nav-bar/nav-bab.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBabComponent
  ],
  imports: [
    CommonModule, 
  ],
  exports:[
    HeaderComponent,
    NavBabComponent 
  ]
})
export class HeaderModuleModule { }
