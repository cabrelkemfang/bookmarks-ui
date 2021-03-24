import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DataResponse } from 'src/app/core/model/response';
import { CategoryService } from 'src/app/core/service/category.service';
import { NotificationService } from 'src/app/core/service/notification.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categorysLoging: boolean;
  constructor(
    private dialogRef: MatDialogRef<CreateCategoryComponent>,
    private notificationService: NotificationService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.createCategotyForm();
  }

  createCategotyForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onCloseDialog(msg) {
    this.dialogRef.close(msg);
  }

  onClose() {
    this.onCloseDialog(" ");
  }

  onClear() {
    this.categoryForm.reset();
  }

  onSubmit(value) {
    this.categorysLoging = true;
    this.categoryService.createCategory(value).subscribe((response: DataResponse) => {
      this.notificationService.success(response.message);
      this.categorysLoging = false;
      this.onCloseDialog(response.message);
    }, (error => {
      this.categorysLoging = false;
    }));
  }

  

}
