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

	public async findAllLists(token : AuthToken, boardId : BoardId) : Promise<List[]> {
		const board = await this.findOneBoard(token, boardId);

		const lists = await this.listModel.find({ board : board._id }).populate('board').exec();

		return lists || [];
	}

	public async createList(token : AuthToken, boardId : BoardId, list : ListDto) : Promise<List> {
		const board = await this.findOneBoard(token, boardId);

		const listData = {
			title : list.title,
			board : board._id
		};

		const newList = new this.listModel(listData);

		return await newList.save();
	}

	public async findOneList(token : AuthToken, boardId : BoardId, listId : ListId) : Promise<List> {
		const board = await this.findOneBoard(token, boardId);

		const list = await this.listModel.findById(listId).populate('board').exec();

		if (!list) {
			throw new BadRequestException(`List does not exists : ${listId}`);
		} else if (list.board._id !== board._id) {
			throw new ForbiddenException(`User does not have access to this list : ${listId}`)
		} else {
			return list;
		}
	}

	public async updateList(token : AuthToken, boardId : BoardId, listId : ListId, list : ListDto) : Promise<List> {
		const currentList = await this.findOneList(token, boardId, listId);

		currentList.set(list);

		return await currentList.save();
	}

	public async deleteList(token : AuthToken, boardId : BoardId, listId : ListId) : Promise<void> {
		const list = await this.findOneList(token, boardId, listId);

		await list.remove();

		return;
	}

	public async findAllCards(token : AuthToken, boardId : BoardId, listId: ListId) : Promise<Card[]> {
		const list = await this.findOneList(token, boardId, listId);

		const cards = await this.cardModel.find({ list : list._id }).populate('list').exec();

		return cards || [];
	}

	public async createCard(token : AuthToken, boardId : BoardId, listId : ListId, card : CardDto) : Promise<Card> {
		const list = await this.findOneList(token, boardId, listId);

		const cardData = {
			title : card.title,
			description : card.content,
			list : list._id
		};

		const newCard = new this.cardModel(cardData);

		return await newCard.save();
	}

	public async findOneCard(token : AuthToken, boardId : BoardId, listId : ListId, cardId : CardId) : Promise<Card> {
		const list = await this.findOneList(token, boardId, listId);

		const card = await this.cardModel.findById(cardId).populate('list').exec();

		if (!card) {
			throw new BadRequestException(`Card does not exists : ${cardId}`);
		} else if (card.list._id !== list._id) {
			throw new ForbiddenException(`User does not have access to this card : ${cardId}`)
		} else {
			return card;
		}
	}

	public async updateCard(token : AuthToken, boardId : BoardId, listId : ListId, cardId : CardId, card : CardDto) : Promise<Card> {
		const currentCard = await this.findOneCard(token, boardId, listId, cardId);

		currentCard.set(card);

		return await currentCard.save();
	}

	public async deleteCard(token : AuthToken, boardId : BoardId, listId : ListId, cardId : CardId) : Promise<void> {
		const currentCard = await this.findOneCard(token, boardId, listId, cardId);

		await currentCard.remove();

		return;
	}

}
