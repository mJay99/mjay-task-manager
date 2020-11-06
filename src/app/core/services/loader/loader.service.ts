import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private subject = new Subject<any>()
  constructor() { }

  startLoader() {
    this.subject.next({ loading: true });
  }

  stopLoader() {
    this.subject.next({ loading: false });
  }

  getLoading(): Observable<any> {
    return this.subject.asObservable();
  }

  getModalLoading(): Observable<any> {
    return this.subject.asObservable();
  }

  startModalLoader() {
    this.subject.next({ modalLoading: true });
  }

  stopModalLoader() {
    this.subject.next({ modalLoading: false });
  }

}

