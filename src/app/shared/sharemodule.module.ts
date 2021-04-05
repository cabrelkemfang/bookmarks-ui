import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { DeleteComponent } from './delete/delete.component';
import { PermissionDirective } from './directive/permissions.directive';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialsModule,
    NgxPaginationModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoadingComponent,
    MaterialsModule,
    FlexLayoutModule,
    DeleteComponent,
    PermissionDirective,
    NgxPaginationModule
  ],
  declarations: [
    LoadingComponent,
    DeleteComponent,
    PermissionDirective,
  ],
  entryComponents: [ DeleteComponent]
})
export class ShareModule { }
