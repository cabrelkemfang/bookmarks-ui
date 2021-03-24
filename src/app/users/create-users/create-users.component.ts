import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DataResponse } from 'src/app/core/model/response';
import { NotificationService } from 'src/app/core/service/notification.service';
import { UsersService } from '../../core/service/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class CreateUsersComponent implements OnInit {

  adminForm: FormGroup;
  loging: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<CreateUsersComponent>,
    private notificationService: NotificationService) { }


  ngOnInit() {
    this.createAdminForm();
  }

  createAdminForm() {
    this.adminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['']
    });
  }

  onClear() {
    this.adminForm.reset();
    this.initializeForm();
  }

  // getroles() {
  //   this.bookmarksService.getCategoies().subscribe((data: DataResponse) => {
  //     this.categoryData = data.data;
  //   });
  // }


  onCloseDialog(msg) {
    this.dialogRef.close(msg);
  }

  onClose() {
    this.onCloseDialog(" ");
  }

  onSubmit(value) {
    this.loging = true;
    this.usersService.createUser(value).subscribe((response: DataResponse) => {
      this.notificationService.success(response.message);
      this.loging = false;
      this.onCloseDialog(response.message);
    });
  }

  initializeForm() {
    this.adminForm.setValue({
      email: '',
      name: '',
      role: '',
      password: '',
      confirmPassword: ''
    });
  }
}
