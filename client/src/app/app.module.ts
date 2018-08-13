import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BoardsService, UserService } from './services';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
		BoardsService,
		UserService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
