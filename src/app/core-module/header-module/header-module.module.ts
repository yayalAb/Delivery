import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    SharedModuleModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class HeaderModuleModule { }
