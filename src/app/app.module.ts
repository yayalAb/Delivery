import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModuleModule } from './core-module/core-module.module';
import { FeatureModuleModule } from './feature-module/feature-module.module';
import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
export const ROUTES:Routes=[
  {path:'',
  children:[
    {path:'', loadChildren:()=>import('./feature-module/product/product.module').then(x=>x.ProductModule)},
  ]
 }
  
] 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModuleModule,
    FeatureModuleModule,
    RouterModule.forChild(ROUTES),
    SidebarModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
