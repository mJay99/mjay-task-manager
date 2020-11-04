import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateTaskComponent } from './create-update-task/create-update-task.component';
import { ListUsersComponent } from './list-users/list-users.component';



@NgModule({
  declarations: [CreateUpdateTaskComponent, ListUsersComponent],
  imports: [
    CommonModule
  ]
})
export class TaskManagerModule { }
