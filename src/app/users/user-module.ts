import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './user-router';

import { ShareModule } from '../shared/sharemodule.module';
import { CreateUsersComponent } from './create-users/create-users.component';
import { UserVueComponent } from './user-vue/user-vue.component';

@NgModule({
  imports: [
    ShareModule,
    UsersRoutingModule
  ],
  declarations: [
    UsersRoutingModule.components,
    UserVueComponent,
    CreateUsersComponent,

  ],
  entryComponents: [CreateUsersComponent]
})
export class UserModule { }
