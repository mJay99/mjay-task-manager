import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router) {

  }


  getAlerts(): Observable<any> {
    var alert :any;
    return this.subject.asObservable();
  }

  clearAlertMessage(): void {
      this.subject = undefined;
  }

  success(message: string, timeout = 3000) {
    this.subject.next({ type: 'success', text: message , timeout: timeout});
  }

  error(message: string,) {
    this.subject.next({ type: 'danger', text: message });
  }

}

