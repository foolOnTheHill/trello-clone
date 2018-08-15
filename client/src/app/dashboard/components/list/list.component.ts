import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { ListId } from '../../../../common/types';
import { List, Card } from '../../../../common/interfaces';

import { BoardsService } from '../../../services';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Output() updateParent : EventEmitter<any>;

	@Input('data') list : List;

	newCard : Card = { title: '', content: '' };
	cards : Card[];

	isFormVisible = false;

	error = null;

	constructor(
		private boardService : BoardsService
	) {
		this.cards = [];

		this.updateParent = new EventEmitter();
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

			this.error = null;

			await this.fetchListCards();

			this.isFormVisible = false;
		} catch(error) {
			this.error = error.message;
		}
	}

	setFormVisibility(status) {
		this.isFormVisible = status;
	}

	async deleteList(listId : ListId) {
		try {
			await this.boardService.deleteList(this.list.board._id, this.list._id);

			this.updateParent.emit();
		} catch(error) {
			this.error = error.message;
		}
	}

}
