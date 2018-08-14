import { Component, Input, OnInit } from '@angular/core';

import { List, Card } from '../../../../common/interfaces';

import { BoardsService } from '../../../services';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input('data') list : List;

	newCard : Card = { title: '', content: '' };
	cards : Card[];

	isFormVisible = false;

	constructor(
		private boardService : BoardsService
	) {
		this.cards = [];
	}

	async fetchListCards() {
		this.cards = await this.boardService.findAllCards(this.list.board._id, this.list._id);
	}

	ngOnInit() {
		this.fetchListCards();
	}

	setFormVisibility(status) {
		this.isFormVisible = status;
	}

}
