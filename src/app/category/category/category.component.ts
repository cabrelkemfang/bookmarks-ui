import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DataResponse } from 'src/app/core/model/response';
import { CategoryService } from 'src/app/core/service/category.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: any;
  loading: boolean ;
  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
  }
  
  ngOnChanges() {
    console.log("The Value Have been change ");
  }

  getCategory() {
    this.loading = true;
    this.categoryService.getAllCategory().subscribe((response: DataResponse) => {
      this.category = response.data;
      console.log(this.category);
      
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }

  onDelete(category) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.position = { top: "20%" };
    // dialogConfig.height = "50%";
    dialogConfig.data = { name: "Category", id: category.id };

    const dialogRef = this.dialog.open(DeleteComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result != " ") {
        // this.getCategory();
      }  
    });
  }
}
