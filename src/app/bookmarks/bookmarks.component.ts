import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { BookmarksService } from 'src/app/core/service/bookmarks.service';
import { Bookmark, DataResponse, PageResult } from 'src/app/core/model/response';
import { MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
  encapsulation: ViewEncapsulation.None,
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
export class BookmarksComponent implements OnInit {

  bookmarksData: Bookmark[];
  loading: boolean;
  search: string;
  maxValue: number;
  currentPage = 1;
  pageSize: number;
  totalPage: number

  constructor(
    public dialog: MatDialog,
    private bookmarksService: BookmarksService
  ) { }

  ngOnInit() {

    this.getBookmarks(this.currentPage);
  }

  getBookmarks(page: number) {
    this.loading = true;
    this.bookmarksService.getAllBookmarks(page).subscribe((response: PageResult) => {
      this.bookmarksData = response.data;
      this.totalPage = response.totalOfItems;
      this.pageSize = response.size;
      this.currentPage = response.page;
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

  searchBookmark() {
    this.loading = true;
    this.bookmarksService.searchBookmarksByAdmin(this.search).subscribe((response: PageResult) => {
      this.bookmarksData = response.data;
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }


  getPaginatedData(page: number) {
    this.getBookmarks(page);
  }


  pageChanged(pageNumber) {
    this.getPaginatedData(pageNumber);
  }

}
