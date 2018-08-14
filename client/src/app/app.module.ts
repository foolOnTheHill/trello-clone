import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BoardsService, UserService } from './services';

import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';

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
		AppRoutingModule,
		LoginModule,
		RegisterModule,
		DashboardModule
  ],
  providers: [
		AuthGuard,
		BoardsService,
		UserService
	],
  bootstrap: [
		AppComponent
	]
})
export class AppModule { }
