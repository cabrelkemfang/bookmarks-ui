import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ShareModule } from '../shared/sharemodule.module';
import { MainRouterModule } from './main-router.module';

@NgModule({
  imports: [
    ShareModule,
    MainRouterModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }