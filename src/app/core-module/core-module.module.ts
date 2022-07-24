import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModuleModule } from './header-module/header-module.module';
import { RouterModule, Routes } from '@angular/router';
import { ServiceService } from './Service/service.service';
import { AuthGuard } from './auth-module/guard/guard.guard';
import { MainModule } from './main-module/main/main.module';



export const ROUTES:Routes=[
  {path:'core',
  children :[
    { path:'login', loadChildren:()=>import('./auth-module/auth-module.module').then(x=>x.AuthModuleModule)},
     {path:'dash', loadChildren:()=>import('./dashboard/dashboard.module').then(x=>x.DashboardModule)},
    //  {path:'main', loadChildren:()=>import('./main-module/main/main.module').then(x=>x.MainModule)}
  ]
   }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModuleModule,
    MainModule,
    RouterModule.forChild(ROUTES)
  ],
  exports:[
    HeaderModuleModule,
    MainModule
  ]
})
export class CoreModuleModule {
  static forRoot(): ModuleWithProviders<CoreModuleModule> {
    return {
      ngModule: CoreModuleModule,
      providers: [
        ServiceService,
        AuthGuard

      ]
    };
  }

 }
