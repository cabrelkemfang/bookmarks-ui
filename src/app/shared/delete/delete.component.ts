import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataResponse, DialogData } from 'src/app/core/model/response';
import { BookmarksService } from 'src/app/core/service/bookmarks.service';
import { CategoryService } from 'src/app/core/service/category.service';
import { NotificationService } from 'src/app/core/service/notification.service';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DeleteComponent implements OnInit {
  loading: boolean;
  constructor(
    private dialogRef: MatDialogRef<DeleteComponent>,
    private userService: UsersService,
    private bookmarksService: BookmarksService,
    private categoryService: CategoryService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.data);

  }

  onCloseDialog(msg) {
    this.dialogRef.close(msg);
  }

  onClose() {
    this.onCloseDialog(" ");
  }

  onConfirm() {
    switch (this.data.name) {
      case 'Category': {
        this.OnDeleteCategory(this.data.id);
        break;
      }
      case 'Bookmark': {
        this.onDeleBookmarks(this.data.id);
        break;
      }
      case 'User': {
        this.OnDeleteUser(this.data.id);
        break;
      }
      default: {
        //statements; 
        break;
      }
    }

  }

  onCancel() {
    this.onClose();
  }

  OnDeleteCategory(categoryId) {
    this.loading = true;
    this.categoryService.deleteCategory(categoryId).subscribe((response: DataResponse) => {
      this.loading = false;
      this.onCloseDialog(response.message)
      this.notificationService.success(response.message);
    }, (error => {
      this.loading = false;
    }));
  }

  OnDeleteUser(userId) {
    this.loading = true;
    this.userService.deleteUser(userId).subscribe((response: DataResponse) => {
      this.loading = false;
      this.onCloseDialog(response.message);
      this.notificationService.success(response.message);
    }, (error => {
      this.loading = false;
    }));
  }

  onDeleBookmarks(bookmarkId) {
    this.loading = true;
    this.bookmarksService.deleteBookmarks(bookmarkId).subscribe((response: DataResponse) => {
      this.loading = false;
      this.onCloseDialog(response.message);
      this.notificationService.success(response.message);
    }, (error => {
      this.loading = false;
    }));
  }
}
