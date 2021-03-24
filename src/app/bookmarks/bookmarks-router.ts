import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookmarksComponent } from "./bookmarks.component";
import { UserBookmarksComponent } from "./user-bookmarks/user-bookmarks.component";


export const bookmarksRoutes: Routes = [
    { path: '', component: UserBookmarksComponent },
    { path: 'all', component: BookmarksComponent }
]

@NgModule({
    imports: [RouterModule.forChild(bookmarksRoutes)],
    exports: [RouterModule],
})
export class BookmarkRoutingModule {
    static components = [BookmarksComponent,UserBookmarksComponent]

}