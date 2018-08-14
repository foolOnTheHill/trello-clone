import { Component, Input } from '@angular/core';

import { List } from '../../../../common/interfaces';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent {
	@Input('data') list : List;
}
