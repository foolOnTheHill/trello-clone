import { Component, Inject, BadRequestException, ForbiddenException } from '@nestjs/common';

import { Model } from 'mongoose';

import { AuthToken, BoardId, ListId, CardId } from '../../../common/types';

import { Board, List, Card } from '../interfaces';
import { BoardDto, ListDto, CardDto } from '../dto';

import { AuthService } from './auth.service';

@Component()
export class BoardsService {

	constructor(
		@Inject('BoardModelToken') private readonly boardModel: Model<Board>,
		@Inject('ListModelToken') private readonly listModel: Model<List>,
		@Inject('CardModelToken') private readonly cardModel: Model<Card>,
		private readonly authService : AuthService
	) {}

	public async findAllBoards(token : AuthToken) : Promise<Board[]> {
		const user = await this.authService.authorize(token);

		const boards = await this.boardModel.find({ user : user._id }).exec();

		return boards || [];
	}

	public async createBoard(token : AuthToken, board : BoardDto) : Promise<Board> {
		const user = await this.authService.authorize(token);

		const boardData = {
			user : user._id,
			title : board.title
		};

		const newBoard = new this.boardModel(boardData);

		return await newBoard.save();
	}

	public async findOneBoard(token : AuthToken, boardId : BoardId) : Promise<Board> {
		const user = await this.authService.authorize(token);

		const board = await this.boardModel.findById(boardId).populate('user').exec();

		if (!board) {
			throw new BadRequestException(`Board does not exists : ${boardId}`);
		} else if (board.user._id !== user._id){
			throw new ForbiddenException(`User does not have access to this board : ${boardId}`);
		} else {
			return board;
		}
	}

	public async updateBoard(token : AuthToken, boardId : BoardId, board : BoardDto) : Promise<Board> {
		const currentBoard = await this.findOneBoard(token, boardId);

		currentBoard.set(board);

		return await currentBoard.save();
	}

	public async deleteBoard(token : AuthToken, boardId : BoardId) : Promise<void> {
		const board = await this.findOneBoard(token, boardId);

		await board.remove();

		return;
	}

	public async findAllLists(token : AuthToken) : Promise<List[]> {
		return null;
	}

	public async createList(token : AuthToken, list : ListDto) : Promise<void> {
		return null;
	}

	public async findOneList(token : AuthToken, listId : ListId) : Promise<List> {
		return null;
	}

	public async updateList(token : AuthToken, listId : ListId, list : ListDto) : Promise<void> {
		return null;
	}

	public async deleteList(token : AuthToken, listId : ListId) : Promise<void> {
		return null;
	}

	public async findAllCards(token : AuthToken) : Promise<Card[]> {
		return null;
	}

	public async createCard(token : AuthToken, card : CardDto) : Promise<void> {
		return null;
	}

	public async findOneCard(token : AuthToken, cardId : CardId) : Promise<Card> {
		return null;
	}

	public async updateCard(token : AuthToken, cardId : CardId, card : CardDto) : Promise<void> {
		return null;
	}

	public async deleteCard(token : AuthToken, cardId : CardId) : Promise<void> {
		return null;
	}

}
