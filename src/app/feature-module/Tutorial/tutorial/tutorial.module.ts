import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RouterModule, Routes } from '@angular/router';
import { PassangerModule } from '../passanger/passanger.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';

export const ROUTE:Routes=[
  {path:'',component:TutorialComponent}

]
@NgModule({
  declarations: [
    TutorialComponent
  ],
  imports: [
    CommonModule,
    PassangerModule,
    HttpClientModule,
    RouterModule.forChild(ROUTE)
  ],
  providers:[
       ServiceService
  ]

})
export class TutorialModule { }
