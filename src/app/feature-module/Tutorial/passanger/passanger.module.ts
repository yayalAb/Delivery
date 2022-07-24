import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassangerDetailComponent } from './passanger-detail/passanger-detail.component';
import { PassangerCountComponent } from './passanger-count/passanger-count.component';



@NgModule({
  declarations: [
    PassangerCountComponent,
    PassangerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PassangerCountComponent,
    PassangerDetailComponent
  ]
})
export class PassangerModule { }
