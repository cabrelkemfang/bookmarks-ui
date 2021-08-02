import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookmarkCategoryComponent } from "./bookmark-category/bookmark-category.component";
import { CategoriesComponent } from "./categories.component";



export const categoryRoutes: Routes = [
    { path: '', component: CategoriesComponent },
    { path: ':categary_id/bookmars', component: BookmarkCategoryComponent }

    
]

@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {

}