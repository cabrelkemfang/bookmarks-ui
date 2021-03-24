import { NgModule } from '@angular/core';
import { SafePipe } from '../shared/pipe/safe.pipe';
import { BookmarksVueComponent } from './bookmarks-vue/bookmarks-vue.component';

import { ShareModule } from '../shared/sharemodule.module';
import { BookmarkRoutingModule } from './bookmarks-router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CreateBookmarksComponent } from './create-bookmarks/create-bookmarks.component';


@NgModule({
  imports: [
    ShareModule,
    BookmarkRoutingModule
  ],
  declarations: [
    BookmarkRoutingModule.components,
    BookmarksVueComponent,
    CreateBookmarksComponent,
    BookmarkComponent,
    SafePipe
  ],
  entryComponents: [CreateBookmarksComponent,
    BookmarksVueComponent]
})
export class BookmarksModule { }
