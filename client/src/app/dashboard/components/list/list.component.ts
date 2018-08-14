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

	error = '';

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

	async addCard() {
		try {
			await this.boardService.createCard(this.list.board._id, this.list._id, this.newCard);

			this.newCard.title = '';
			this.newCard.content = '';

			await this.fetchListCards();

			this.isFormVisible = false;
		} catch(error) {
			this.error = error.message;
		}
	}

	setFormVisibility(status) {
		this.isFormVisible = status;
	}

}
