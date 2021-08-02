import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/sharemodule.module';

import { CategoriesRoutingModule } from './category-router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';
import { BookmarkCategoryComponent } from './bookmark-category/bookmark-category.component';


@NgModule({
  imports: [
    ShareModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CreateCategoryComponent,
        CategoriesComponent,
    CategoryComponent,
    BookmarkCategoryComponent,
  ],
  entryComponents: [CreateCategoryComponent]
})
export class CategoryModule { }
