import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListViewComponent } from './list-view/list-view.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';



@NgModule({
  declarations: [
    ListViewComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    ReactiveFormsModule
  ],
  exports:[
    ListViewComponent
  ]
  
  
})
export class SharedModuleModule { }
