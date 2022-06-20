import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModuleModule } from './core-module/core-module.module';
import { FeatureModuleModule } from './feature-module/feature-module.module';
import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { LoginModuleModule } from './core-module/auth-module/login-module/login-module.module';
import { LoginComponent } from './core-module/auth-module/login-module/login/login.component';



export const ROUTES:Routes=[
  {path:'',
  children:[
    {path:'', loadChildren:()=>import('./core-module/core-module.module').then(x=>x.CoreModuleModule)},
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
    TreeViewModule,
    LoginModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
