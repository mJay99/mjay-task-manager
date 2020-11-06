import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { BoardsComponent } from './task-manager/boards/boards.component';
import { ListTasksComponent } from './task-manager/list-tasks/list-tasks.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  // { path: 'login', component: DefaultLoginComponent },

  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [],
    children: [
      { path: '', component: BoardsComponent },
      { path: 'boards', component: BoardsComponent },
      { path: 'tasks', component: ListTasksComponent },
     
    ]
  },

  // { path: '**', component: NoDataFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
