import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppModule { }
