import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DataResponse } from 'src/app/core/model/response';
import { NotificationService } from 'src/app/core/service/notification.service';
import { BookmarksService } from 'src/app/core/service/bookmarks.service';

@Component({
  selector: 'app-create-bookmarks',
  templateUrl: './create-bookmarks.component.html',
  styleUrls: ['./create-bookmarks.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateBookmarksComponent implements OnInit {

  bookmarksForm: FormGroup;
  categoryData: any;
  bookmarksLoging: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private bookmarksService: BookmarksService,
    private dialogRef: MatDialogRef<CreateBookmarksComponent>,
    private notificationService: NotificationService) { }


  ngOnInit() {
    this.createBookmarksForm();
    this.getCategory();
  }

  createBookmarksForm() {
    this.bookmarksForm = this.formBuilder.group({
      link: ['', Validators.required],
      category: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onClear() {
    this.bookmarksForm.reset();
    this.initializeForm();
  }

  getCategory() {
    this.bookmarksService.getCategoies().subscribe((data: DataResponse) => {
      this.categoryData = data.data;
    });
  }

  onCloseDialog(msg) {
    this.dialogRef.close(msg);
  }

  onClose() {
    this.onCloseDialog(" ");
  }

  onSubmit(value) {
    this.bookmarksLoging = true;
    this.bookmarksService.createBookmarks(value).subscribe((response: DataResponse) => {
      this.notificationService.success(response.message);
      this.bookmarksLoging = false;
      this.onCloseDialog(response.message);
    }, (error => {
      this.bookmarksLoging = false;
    }));
  }

  initializeForm() {
    this.bookmarksForm.setValue({
      link: '',
      category: '',
      status: ''
    });
  }
}
