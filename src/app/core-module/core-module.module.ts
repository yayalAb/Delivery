import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModuleModule } from './header-module/header-module.module';
import { RouterModule, Routes } from '@angular/router';
import { ServiceService } from './Service/service.service';


export const ROUTES:Routes=[
  {path:'core',
  children :[
    { path:'', loadChildren:()=>import('./auth-module/auth-module.module').then(x=>x.AuthModuleModule)}

  ]
   }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModuleModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[
    HeaderModuleModule
  ]
})
export class CoreModuleModule {
  static forRoot(): ModuleWithProviders<CoreModuleModule> {
    return {
      ngModule: CoreModuleModule,
      providers: [
        ServiceService
      ]
    };
  }

 }
