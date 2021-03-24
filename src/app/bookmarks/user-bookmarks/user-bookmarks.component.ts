import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { DataResponse } from 'src/app/core/model/response';
import { BookmarksService } from 'src/app/core/service/bookmarks.service';
import { CreateBookmarksComponent } from '../create-bookmarks/create-bookmarks.component';

@Component({
  selector: 'app-user-bookmarks',
  templateUrl: './user-bookmarks.component.html',
  styleUrls: ['./user-bookmarks.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('2000ms  1.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(40px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class UserBookmarksComponent implements OnInit {

  bookmarksUser: MatTableDataSource<any>;
  loading: boolean;
  search: string;
  constructor(
    public dialog: MatDialog,
    private bookmarksService: BookmarksService
  ) { }

  ngOnInit() {
    this.getUserBookmarks();
  }


  getUserBookmarks() {
    this.loading = true;
    this.bookmarksService.getUsersBookmarks().subscribe((response: DataResponse) => {
      this.bookmarksUser = new MatTableDataSource(response.data);
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }


  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.position = { top: "5%" };

    const dialogRef = this.dialog.open(CreateBookmarksComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result != " ") {
        this.getUserBookmarks();
      }
    });
  }

  searchBookmark() {
    this.loading = true;
    this.bookmarksService.searchBookmarksByUser(this.search).subscribe((response: DataResponse) => {
      this.bookmarksUser = new MatTableDataSource(response.data);
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

}
