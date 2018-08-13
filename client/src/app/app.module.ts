import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';
import { ModalModule } from 'ngx-bootstrap';

import { BoardsService, UserService } from './services';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { AuthGuard } from './guards';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		HttpClientModule,
    HttpModule,
		DragulaModule,
		ModalModule,
		AppRoutingModule
  ],
  providers: [
		AuthGuard,
		BoardsService,
		UserService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
