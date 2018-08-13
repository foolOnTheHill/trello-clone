import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserService } from '../services';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RegisterRoutingModule
	],
	declarations: [
		RegisterComponent
	],
	providers: [
		UserService
	]
})
export class RegisterModule {}
