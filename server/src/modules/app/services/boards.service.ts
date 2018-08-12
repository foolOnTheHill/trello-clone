import { Component, Inject, Res, BadRequestException, ForbiddenException } from '@nestjs/common';

import { Model } from 'mongoose';

import { AuthToken, BoardId, ListId, CardId } from '../../../common/types';

import { Board, List, Card } from '../interfaces';
import { BoardDto, ListDto, CardDto } from '../dto';

@Component()
export class BoardsService {

	constructor(
		@Inject('BoardModelToken') private readonly boardModel: Model<Board>,
		@Inject('ListModelToken') private readonly listModel: Model<List>,
		@Inject('CardModelToken') private readonly cardModel: Model<Card>
	) {}

	public async findAllBoards(token : AuthToken) : Promise<Board[]> {
		return null;
	}

	public async createBoard(token : AuthToken, board : BoardDto) : Promise<void> {
		return null;
	}

	public async findOneBoard(token : AuthToken, boardId : BoardId) : Promise<Board> {
		return null;
	}

	public async updateBoard(token : AuthToken, boardId : BoardId, board : BoardDto) : Promise<void> {
		return null;
	}

	public async deleteBoard(token : AuthToken, boardId : BoardId) : Promise<void> {
		return null;
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
