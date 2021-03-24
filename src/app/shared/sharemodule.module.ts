import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { DeleteComponent } from './delete/delete.component';
import { PermissionDirective } from './directive/permissions.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoadingComponent,
    MaterialsModule,
    FlexLayoutModule,
    DeleteComponent,
    PermissionDirective
  ],
  declarations: [
    LoadingComponent,
    DeleteComponent,
    PermissionDirective,
  ],
  entryComponents: [ DeleteComponent]
})
export class ShareModule { }
