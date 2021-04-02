import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', loadChildren: './main/main.module#MainModule' }

    // { path: 'user', loadChildren: './users/user-module#UserModule' },
    // { path: 'bookmarks', loadChildren: './bookmarks/bookmarks.module#BookmarksModule' }
]