import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { ExcelExportService, FilterService, GridAllModule, GridModule, GroupService, PageService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ButtonComponent } from './button/button.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { GridList2Component } from './grid-list2/grid-list2.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListViewComponent,
    ButtonComponent,
    GridListComponent,
    GridList2Component
  ],
  imports: [
    CommonModule,
    GridModule,
    
    DropDownListModule,
    ToolbarModule,
    GridAllModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ListViewComponent,
    ButtonComponent,
    GridListComponent,
    GridList2Component
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService,
    ExcelExportService]
})
export class SharedModuleModule {}
