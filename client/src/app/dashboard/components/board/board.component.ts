import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Board, List } from '../../../../common/interfaces';

import { BoardsService } from '../../../services';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {

	boardId = '';
	board : Board;

	lists : List[];

	private sub : any;

	constructor(
		private boardService : BoardsService,
		private route: ActivatedRoute
	) {
		this.board = null;
		this.lists = [];
	}

	async fetchBoardLists() {
		this.board = await this.boardService.findOneBoard(this.boardId);
		this.lists = await this.boardService.findAllLists(this.boardId);

		console.log(this.lists);
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
		   this.boardId = params['boardId'];

			 this.fetchBoardLists();
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}
