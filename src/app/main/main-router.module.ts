import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: '/bookmarks', pathMatch: 'full' },
      { path: 'bookmarks', loadChildren: '../bookmarks/bookmarks.module#BookmarksModule' },
      { path: 'users', loadChildren: '../users/user-module#UserModule' },
      { path: 'category', loadChildren: '../category/category.module#CategoryModule' },
      { path: 'profile', loadChildren: '' }
    ] 
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
  ],
  exports: [RouterModule],
})
export class MainRouterModule {

}
