import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBabComponent } from './nav-bar/nav-bab.component';
import { RouterModule } from '@angular/router';
import { ButtonModule, RadioButtonModule  } from '@syncfusion/ej2-angular-buttons';
import { SidebarModule,TreeViewModule  } from '@syncfusion/ej2-angular-navigations';



@NgModule({
  declarations: [
    HeaderComponent,
    NavBabComponent
  ],
  imports: [
    CommonModule, 
    RadioButtonModule,
    SidebarModule,
    ButtonModule,
    RadioButtonModule,
    TreeViewModule ,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    NavBabComponent 
  ]
})
export class HeaderModuleModule { }
