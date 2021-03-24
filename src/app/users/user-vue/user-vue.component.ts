import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { Subscription } from 'rxjs';
import { DataResponse } from 'src/app/core/model/response';
import { NotificationService } from 'src/app/core/service/notification.service';
import { UsersService } from '../../core/service/users.service';
import { MediaChange, MediaService } from '@angular/flex-layout';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';


@Component({
  selector: 'app-user-vue',
  templateUrl: './user-vue.component.html',
  styleUrls: ['./user-vue.component.css']
})
export class UserVueComponent implements OnInit {

  displayedColumns: string[] = ['email', 'github', 'name', 'roleName', 'privatePost', 'publicPost', 'createdAt', 'action'];

  expression = false
  @Input() users: MatTableDataSource<any>;
  mediaSub: Subscription
  userLoging: boolean;
  constructor(
    public dialog: MatDialog,
    private userService: UsersService,
    private notificationService: NotificationService,
    private mediaObserver: MediaService
  ) { }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      if (result.mqAlias === "sm" || result.mqAlias === "xs" || result.mqAlias === "sm") {
        this.deleteColunm("createdAt");
        this.deleteColunm("github");
        this.deleteColunm("privatePost");
        this.deleteColunm("publicPost");
        this.deleteColunm("action");
        this.deleteColunm("email");
      } else if (result.mqAlias === "lg" || result.mqAlias === "md") {
        this.displayedColumns = ['email', 'github', 'name', 'roleName', 'privatePost', 'publicPost', 'createdAt', 'action'];
      }
    });
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  deleteColunm(colunm: string) {
    const index: number = this.displayedColumns.indexOf(colunm);
    if (index !== -1) {
      this.displayedColumns.splice(index, 1);
    }
  }

  onDeactivate(element) {
    this.updateStatus(element);
  }

  onActivate(element) {

    this.updateStatus(element);
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  getUser() {
    this.userService.getUsers().subscribe((response: DataResponse) => {
      this.users = new MatTableDataSource(response.data);
    });
  }

  async updateStatus(element) {
    this.userLoging = true;

    this.userService.updateUserStatus(element.email, !element.active).subscribe((response: DataResponse) => {
      this.notificationService.success(response.message);
      this.getUser();
      this.userLoging = false;
    });
  }

  onDelete(user) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.position = { top: "5%" }; 
    dialogConfig.data = { name: "User", id: user.id };
    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result != " ") {
        this.getUser();
      }

    });
  }
}
