import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list.component";


export const userRoutes: Routes = [
    { path: '', component: UsersListComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {
    static components = [UsersListComponent]

}