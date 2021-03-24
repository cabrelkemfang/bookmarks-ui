import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bookmarks-vue',
  templateUrl: './bookmarks-vue.component.html',
  styleUrls: ['./bookmarks-vue.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BookmarksVueComponent implements OnInit {
  loaginBookmarks: boolean;

  constructor(
    private dialogRef: MatDialogRef<BookmarksVueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.loaginBookmarks = true;
  }

  onClose() {
    this.dialogRef.close();
  }

  myLoadEvent() {
    this.loaginBookmarks = false;
  }
}
