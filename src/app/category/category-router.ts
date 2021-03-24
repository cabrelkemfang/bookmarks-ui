import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";



export const categoryRoutes: Routes = [
    { path: '', component: CategoriesComponent }
]

@NgModule({
    imports: [RouterModule.forChild(categoryRoutes)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {

}