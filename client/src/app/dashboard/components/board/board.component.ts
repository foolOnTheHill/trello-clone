import { Component, Input } from '@angular/core';

import { Board } from '../../../../common/interfaces';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent {
	@Input('data') board : Board;
}
