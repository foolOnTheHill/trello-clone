import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../services';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		LoginRoutingModule
	],
	declarations: [
		LoginComponent
	],
	providers: [
		UserService
	]
})
export class LoginModule {}
