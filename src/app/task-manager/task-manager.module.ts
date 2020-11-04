import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateTaskComponent } from './create-update-task/create-update-task.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CreateUpdateTaskComponent, ListUsersComponent, ListTasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    // NgbModule,
    RouterModule,
  ]
})
export class TaskManagerModule { }
