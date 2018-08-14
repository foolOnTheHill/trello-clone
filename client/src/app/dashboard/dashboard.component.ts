import { Component, OnInit } from '@angular/core';

import { Board } from '../../common/interfaces';

import { BoardsService, UserService } from '../services';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	isFormVisible = false;
	newBoard : Board = { title: '' };
	error = '';

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

			this.setFormVisibility(false);

			this.error = null;

			this.fetchAllBoards();
		} catch(error) {
			this.error = error.message;
		}
	}

	setFormVisibility(status) {
		this.isFormVisible = status;
	}

}
