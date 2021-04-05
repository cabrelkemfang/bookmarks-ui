import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { BookmarksVueComponent } from '../bookmarks-vue/bookmarks-vue.component';

@Component({
  selector: 'app-bokmarks',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark: any;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log("The Value Have been change ");
  }

  onDelete(bookmark) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.position = { top: "20%" };
    // dialogConfig.height = "50%";
    dialogConfig.data = { name: "Bookmark", id: bookmark.id };
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result != " ") {
        // this.getBookmarks();
      }
    });
  }

  openBookmark(url) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "98%";
    dialogConfig.height = "95%";
    // dialogConfig.position = { top: "5%" };
    dialogConfig.data = { url: url }

    const dialogRef = this.dialog.open(BookmarksVueComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

    });
  }

}
