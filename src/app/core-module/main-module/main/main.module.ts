import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule } from '@angular/router';
import { CoreModuleModule } from '../../core-module.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
    TreeViewModule,
  ],
  exports:[
    MainComponent
  ]
})
export class MainModule { }
