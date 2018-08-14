import { Component, Input } from '@angular/core';

import { Card } from '../../../../common/interfaces';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent {
	@Input('data') card : Card;
}
