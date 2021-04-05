import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Bookmark, DataResponse, PageResult } from 'src/app/core/model/response';
import { BookmarksService } from 'src/app/core/service/bookmarks.service';
import { CreateBookmarksComponent } from '../create-bookmarks/create-bookmarks.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

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

  bookmarksUser: Bookmark[];
  loading: boolean;
  search: string;
  maxValue: number;
  currentPage = 1;
  pageSize: number;
  totalPage: number
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;


  constructor(
    public dialog: MatDialog,
    private bookmarksService: BookmarksService
  ) { }

  ngOnInit() {

    if (localStorage.getItem('token') === null) {

      this.getPulicBookmarks(this.currentPage);
    } else {

      this.getUserBookmarks(this.currentPage);
    }
  }


  getPulicBookmarks(page: number) {
    this.loading = true;
    this.bookmarksService.getPublicBookmarks(page).subscribe((response: PageResult) => {
      this.bookmarksUser = response.data;
      this.totalPage = response.totalOfItems;
      this.pageSize = response.size;
      this.currentPage = response.page;
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

  getPaginatedData(page: number) {
    if (localStorage.getItem('token') === null) {

      this.getPulicBookmarks(page)
    } else {

      this.getUserBookmarks(this.currentPage);
    }
  }

  getUserBookmarks(page: number) {
    this.loading = true;
    this.bookmarksService.getUsersBookmarks(page).subscribe((response: PageResult) => {
      this.bookmarksUser = response.data;
      this.totalPage = response.totalOfItems;
      this.pageSize = response.size;
      this.currentPage = response.page;
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
        this.getUserBookmarks(this.currentPage);
      }
    });
  }

  searchBookmark() {
    if (localStorage.getItem('token') === null) {

      this.searchPublicBookmark();
    } else {

      this.searchBookmarkByUser();
    }
  }


  searchBookmarkByUser() {
    this.loading = true;
    this.bookmarksService.searchBookmarksByUser(this.search).subscribe((response: DataResponse) => {
      this.bookmarksUser = response.data;
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

  searchPublicBookmark() {
    this.loading = true;
    this.bookmarksService.searchBookmarks(this.search).subscribe((response: DataResponse) => {
      this.bookmarksUser = response.data;
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

  pageChanged(pageNumber) {

    console.log(pageNumber);
    this.getPaginatedData(pageNumber);
  }

}
