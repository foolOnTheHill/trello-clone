import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DragulaService } from 'ng2-dragula';

import { Board, List } from '../../../../common/interfaces';

import { BoardsService } from '../../../services';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {
	@ViewChild('addListModal') addListModal;

	boardId = '';
	board : Board;

	newList : List = { title: '' };
	lists : List[];

	error = null;

	private sub : any;

	constructor(
		private boardService : BoardsService,
		private dragularService : DragulaService,
		private route: ActivatedRoute
	) {
		this.board = null;
		this.lists = [];
	}

	async fetchBoardLists() {
		this.board = await this.boardService.findOneBoard(this.boardId);
		this.lists = await this.boardService.findAllLists(this.boardId);
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
		   this.boardId = params['boardId'];

			 this.fetchBoardLists();
		});
	}

	async addList() {
		try {
			await this.boardService.createList(this.board._id, this.newList);

			this.newList.title = '';

			this.error = null;

			this.addListModal.hide();

			this.fetchBoardLists();
		} catch(error) {
			this.error = error.message;
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
