import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  constructor(private http: HttpClient ) { }

  getAllTasksList() {
    var self = this;
    return self.http.get(environment.baseUrl + 'list', httpOptions);
  }

  createNewTask(task: any): Observable<any> {
    var self = this;
    return self.http.post(environment.baseUrl  + 'create', task);
  }
 
  updateTask(task: any): Observable<any> {
    var self = this;
    return self.http.post(environment.baseUrl  + 'update', task);
  }

  deleteTask(task: any): Observable<any> {
    var self = this;
    return self.http.post(environment.baseUrl  + 'delete', task);
  }


}
