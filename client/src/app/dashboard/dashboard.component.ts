import { Component, OnInit, ViewChild } from '@angular/core';

import { Board } from '../../common/interfaces';
import { BoardId } from '../../common/types';

import { BoardsService, UserService } from '../services';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	@ViewChild('addBoardModal') addBoardModal;

	newBoard : Board = { title: '' };
	error = null;

	boards : Board[];

	constructor(
		private boardsService : BoardsService,
		private userService : UserService
	) {
		this.boards = [];
	}

	async fetchAllBoards() {
		this.boards = await this.boardsService.findAllBoards();
	}

	ngOnInit() {
		this.fetchAllBoards();
	}

	async addBoard() {
		try {
			await this.boardsService.createBoard(this.newBoard);

			this.newBoard.title = '';

			this.addBoardModal.hide();
			this.error = null;

			this.fetchAllBoards();
		} catch(error) {
			this.error = error.message;
		}
	}

	async deleteBoard(event, boardId : BoardId) {
		event.stopPropagation();

		try {
			await this.boardsService.deleteBoard(boardId);

			this.fetchAllBoards();
		} catch(error) {
			this.error = error.message;
		}
	}

}
