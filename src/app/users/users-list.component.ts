import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { DataResponse } from 'src/app/core/model/response';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UsersService } from '../core/service/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersData: MatTableDataSource<any>;
  constructor(
    private userSerice: UsersService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userSerice.getUsers().subscribe((response: DataResponse) => {
      this.usersData = new MatTableDataSource(response.data);
    }, (error => {
      // this.loading = false;
    }));
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.position = { top: "5%" };
    // dialogConfig.height = "50%";

    const dialogRef = this.dialog.open(CreateUsersComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result != " ") {
        this.getUser();
      }
    });
  }


}
