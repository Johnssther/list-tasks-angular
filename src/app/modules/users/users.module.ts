import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShowUsersComponent } from './components/show-users/show-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { MainUsersComponent } from './components/main-users/main-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    ShowUsersComponent,
    ListUsersComponent,
    MainUsersComponent,
    CreateUsersComponent,
    EditUsersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersComponent,
  ],
})
export class UsersModule { }
