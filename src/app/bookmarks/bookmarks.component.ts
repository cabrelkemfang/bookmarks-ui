import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { BookmarksService } from 'src/app/core/service/bookmarks.service';
import { DataResponse } from 'src/app/core/model/response';
import { MatTableDataSource, MatDialog } from '@angular/material';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
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

  bookmarksData: MatTableDataSource<any>;
  loading: boolean;
  search: string;
  constructor(
    public dialog: MatDialog,
    private bookmarksService: BookmarksService
  ) { }

  ngOnInit() {
    
    this.getBookmarks();
  }

  getBookmarks() {
    this.loading = true;
    this.bookmarksService.getAllBookmarks().subscribe((response: DataResponse) => {
      this.bookmarksData = new MatTableDataSource(response.data);
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

  searchBookmark() {
    this.loading = true;
    this.bookmarksService.searchBookmarksByAdmin(this.search).subscribe((response: DataResponse) => {
      this.bookmarksData = new MatTableDataSource(response.data);
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }


  // searchBookmark(searchBy: string) {
  //   this.loading = true;
  //   this.bookmarksService.searchBookmarks(searchBy).subscribe((response: DataResponse) => {
  //     this.bookmarksData = new MatTableDataSource(response.data);
  //     this.loading = false;
  //   }, (error => {
  //     this.loading = false;
  //   }));
  // }

}
