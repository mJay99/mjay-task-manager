import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public loading: boolean = false;
  public modalLoading: boolean = false;
  private subsription: Subscription;

  constructor(private loaderService: LoaderService) {

  }

  ngOnInit() {
    var self = this;
    self.subsription = self.loaderService.getLoading().subscribe((loader: any) => {
      self.loading = loader ? loader.loading : false;
    });

    self.subsription = self.loaderService.getModalLoading().subscribe((modalLoader: any) => {
      self.modalLoading = modalLoader ? modalLoader.modalLoading : false;
    });

  }

}
