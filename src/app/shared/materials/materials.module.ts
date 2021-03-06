import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    ScrollingModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    ScrollingModule
  ],
  declarations: []
})
export class MaterialsModule { }
