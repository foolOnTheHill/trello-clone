import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent, ListComponent, BoardComponent } from './components';

import { BoardsService } from '../services';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule
	],
	declarations: [
		CardComponent,
		ListComponent,
		BoardComponent,
		DashboardComponent
	],
	providers: [
		BoardsService
	]
})
export class DashboardModule {}
