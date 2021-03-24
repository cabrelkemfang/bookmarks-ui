import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataResponse } from '../core/model/response';
import { CategoryService } from '../core/service/category.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CreateCategoryComponent } from './create-category/create-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
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
export class CategoriesComponent implements OnInit {

  loading: boolean;
  categoriesData: any;
  search: string;
  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.loading = true;
    this.categoryService.getAllCategory().subscribe((response: DataResponse) => {
      this.categoriesData = response.data;
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
    dialogConfig.position = { top: "8%" };

    const dialogRef = this.dialog.open(CreateCategoryComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      if (result != " ") {
        this.getCategory();
      }
    });
  }


  searchCategory() {
    this.loading = true;
    this.categoryService.searchCategory(this.search).subscribe((response: DataResponse) => {
      this.categoriesData = response.data;
      this.loading = false;
    }, (error => {
      this.loading = false;
    }));
  }


}
