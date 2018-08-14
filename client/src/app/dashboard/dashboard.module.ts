import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragulaModule } from 'ng2-dragula';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DragulaService } from 'ng2-dragula';

import { CardComponent, ListComponent, BoardComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DragulaModule,
		ModalModule.forRoot(),
		DashboardRoutingModule
	],
	declarations: [
		CardComponent,
		ListComponent,
		BoardComponent,
		DashboardComponent
	],
	providers: [
		DragulaService
	]
})
export class DashboardModule {}
