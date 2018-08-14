import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragulaModule } from 'ng2-dragula';
import { DragulaService } from 'ng2-dragula';

import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CardComponent, ListComponent, BoardComponent, NavbarComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DragulaModule,
		ModalModule.forRoot(),
		CollapseModule.forRoot(),
		DashboardRoutingModule
	],
	declarations: [
		NavbarComponent,
		CardComponent,
		ListComponent,
		BoardComponent,
		DashboardComponent
	],
	exports: [
		NavbarComponent
	],
	providers: [
		DragulaService
	]
})
export class DashboardModule {}
