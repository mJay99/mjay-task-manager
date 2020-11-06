import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  private subsription: Subscription;
  alert: any;
  private delay: any;

  constructor(private alertService: AlertService) {
    var self = this;
    self.subsription = self.alertService.getAlerts().subscribe((alert) => {
      self.alert = alert;
      if (self.alert && self.alert.timeout)
        self.showAlert(alert.timeout);
    });
  }

  ngOnInit() {
  }

  showAlert(timeout) {
    setTimeout(() => {
      this.alert = undefined;
    }, timeout);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }

  closeAlert(): void {
    this.alert = undefined;
  }

}
