import {
  Controller,
  Put,
	Get,
	Post,
	Delete,
  Body,
  Param,
  UsePipes,
  Headers
} from '@nestjs/common';

import { ValidationPipe } from '../../../common/pipes/validation.pipe';

import { BoardsService } from '../services';

import { BoardDto, ListDto, CardDto } from '../dto';

import { Board, List, Card } from '../interfaces';

@Controller('boards')
export class BoardsController {

  constructor(
		private readonly boards : BoardsService
	) {}

	@Get()
	async findAllBoards(@Headers() headers) : Promise<Board[]>{
		return this.boards.findAllBoards(headers.authorization);
	}

	@Post()
	@UsePipes(new ValidationPipe())
	async createBoard(@Headers() headers, @Body() createBoardDto : BoardDto) : Promise<Board>{
		return this.boards.createBoard(headers.authorization, createBoardDto);
	}

	@Get(':boardId')
	async findOneBoard(@Headers() headers, @Param() params) : Promise<Board> {
		return this.boards.findOneBoard(headers.authorization, params.boardId);
	}

	@Put(':boardId')
	@UsePipes(new ValidationPipe())
	async updateBoard(@Headers() headers, @Body() updateBoardDto : BoardDto, @Param() params) : Promise<Board> {
		return this.boards.updateBoard(headers.authorization, params.boardId, updateBoardDto);
	}

	@Delete(':boardId')
	async deleteBoard(@Headers() headers, @Param() params) : Promise<void> {
		return this.boards.deleteBoard(headers.authorization, params.boardId);
	}

	@Get(':boardId/lists')
	async findAllLists(@Headers() headers, @Param() params) : Promise<List[]>{
		return this.boards.findAllLists(headers.authorization, params.boardId);
	}

	@Post(':boardId/lists')
	@UsePipes(new ValidationPipe())
	async createList(@Headers() headers, @Body() createListDto : ListDto, @Param() params) : Promise<List>{
		return this.boards.createList(headers.authorization, params.boardId, createListDto);
	}

	@Get(':boardId/lists/:listId')
	async findOneList(@Headers() headers, @Param() params) : Promise<List> {
		return this.boards.findOneList(headers.authorization, params.boardId, params.listId);
	}

	@Put(':boardId/lists/:listId')
	@UsePipes(new ValidationPipe())
	async updateList(@Headers() headers, @Body() updateListDto : ListDto, @Param() params) : Promise<List> {
		return this.boards.updateList(headers.authorization, params.boardId, params.listId, updateListDto);
	}

	@Delete(':boardId/lists/:listId')
	async deleteList(@Headers() headers, @Param() params) : Promise<void> {
		return this.boards.deleteList(headers.authorization, params.boardId, params.listId);
	}

	@Get(':boardId/lists/:listId/cards')
	async findAllCards(@Headers() headers, @Param() params) : Promise<Card[]>{
		return this.boards.findAllCards(headers.authorization, params.boardId, params.listId);
	}

	@Post(':boardId/lists/:listId/cards')
	@UsePipes(new ValidationPipe())
	async createCard(@Headers() headers, @Body() createCardDto : CardDto, @Param() params) : Promise<Card>{
		return this.boards.createCard(headers.authorization, params.boardId, params.listId, createCardDto);
	}

	@Get(':boardId/lists/:listId/cards/:cardId')
	async findOneCard(@Headers() headers, @Param() params) : Promise<Card> {
		return this.boards.findOneCard(headers.authorization, params.boardId, params.listId, params.cardId);
	}

	@Put(':boardId/lists/:listId/cards/:cardId')
	@UsePipes(new ValidationPipe())
	async updateCard(@Headers() headers, @Body() updateCardDto : CardDto, @Param() params) : Promise<Card> {
		return this.boards.updateCard(headers.authorization, params.boardId, params.listId, params.cardId, updateCardDto);
	}

	@Delete(':boardId/lists/:listId/cards/:cardId')
	async deleteCard(@Headers() headers, @Param() params) : Promise<void> {
		return this.boards.deleteCard(headers.authorization, params.boardId, params.listId, params.cardId);
	}

}
