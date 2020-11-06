import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbDateStruct, NgbModal, ModalDismissReasons, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { Task } from 'src/app/core/data-models/task.model';
import { HttpClient } from '@angular/common/http';
import { TaskService } from 'src/app/core/services/task/task.service';
import { UserService } from 'src/app/core/services';
import { CustomDateAdapter } from 'src/app/core/services/dateformat/custom-date-formater';
import { CustomDateParserFormatter } from 'src/app/core/services/dateformat/custom-date-parser';

@Component({
  selector: 'app-create-update-task',
  templateUrl: './create-update-task.component.html',
  styleUrls: ['./create-update-task.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: CustomDateAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}]
})
export class CreateUpdateTaskComponent implements OnInit {
  public task: Task = new Task();
  public closeResult: any;
  public model: NgbDateStruct;

  constructor(private modalService: NgbModal, 
    private taskService : TaskService,
    private userService : UserService
  ) { }

  @Input() taskToEdit: any;
  @Input() isEdit: boolean = false;

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() relaodTasks: EventEmitter<any> = new EventEmitter();

  users = [];
  usersBuffer = [];
  bufferSize = 5;
  numberOfItemsFromEndBeforeFetchingMore = 10;
  loading = false;

  ngOnInit() {
    var self = this;
    if(self.isEdit){
      self.task = self.taskToEdit;
    }
    self.getAllUsers()
  }

  getAllUsers(){
    var self = this;
    // self.loaderService.startLoader();
    self.userService.getAllUsersList().subscribe((response: any) => {
      console.log(response);
      self.users = response.users;
      // self.loaderService.stopLoader();
    }, (error) => {
      console.log(error);
      // self.loaderService.stopLoader();
    })
  }
  onScrollToEnd() {
    this.fetchMore();
}

onScroll({ end }) {
    if (this.loading || this.users.length <= this.usersBuffer.length) {
        return;
    }

    if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.usersBuffer.length) {
        this.fetchMore();
    }
}

private fetchMore() {
    const len = this.usersBuffer.length;
    const more = this.users.slice(len, this.bufferSize + len);
    this.loading = true;
    // using timeout here to simulate backend API delay
    setTimeout(() => {
        this.loading = false;
        this.usersBuffer = this.usersBuffer.concat(more);
    }, 200)
}


saveTask(){
  var self = this;
  var data = new FormData();
  let  task = {...self.task}
  task.due_date = task.due_date + " 12:12:12";
  let keys = Object.keys(task)

  keys.forEach((key:string) => {
    if(key != "id"){
      data.append(key,task[key])
    }
   });
  self.taskService.createNewTask(data).subscribe((response: any) => {
    console.log(response);
    self.relaodTasks.emit();
    self.close.emit()
    // self.users = response.users;
    // self.loaderService.stopLoader();
  }, (error) => {
    console.log(error);
    console.log(error);
    // self.loaderService.stopLoader();
  })
}
updateTask(task:Task){
  var self = this;
  var data = new FormData();
  let  task_to_edit = {...self.task}
  let keys = Object.keys(task_to_edit)

  keys.forEach((key:string) => {
    if(key === "id"){
      data.append("taskid",task_to_edit[key])
    }else{
      data.append(key,task_to_edit[key])
    }
      
   });
  self.taskService.updateTask(data).subscribe((response: any) => {
    console.log(response);
    self.relaodTasks.emit();
    self.close.emit()
    // self.users = response.users;
    // self.loaderService.stopLoader();
  }, (error) => {
    console.log(error);
    console.log(error);
    // self.loaderService.stopLoader();
  })
}

  cancel() {
    var self = this;
    self.close.emit()
  }

}
