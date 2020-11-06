import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssigneePipe } from './pipes/assignee.pipe';
import { SearchByAllPipe } from './pipes/search-by-all.pipe';



@NgModule({
  declarations: [AssigneePipe, SearchByAllPipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
