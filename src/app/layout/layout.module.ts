import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ HeaderComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
