import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient ) { }

  getAllUsersList() {
    var self = this;
    return self.http.get(environment.baseUrl + 'listusers', httpOptions);
  }

 }
