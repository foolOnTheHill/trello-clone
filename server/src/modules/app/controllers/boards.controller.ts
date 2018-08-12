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
	async findAllLists(@Headers() headers) : Promise<List[]>{
		return null;
	}

	@Post(':boardId/lists')
	@UsePipes(new ValidationPipe())
	async createList(@Headers() headers, @Body() createListDto : ListDto) : Promise<void>{
		return null;
	}

	@Get(':boardId/lists/:listId')
	async findOneList(@Headers() headers, @Param() params) : Promise<List> {
		return null;
	}

	@Put(':boardId/lists/:listId')
	@UsePipes(new ValidationPipe())
	async updateList(@Headers() headers, @Body() updateListDto : ListDto, @Param() params) : Promise<void> {
		return null;
	}

	@Delete(':boardId/lists/:listId')
	async deleteList(@Headers() headers, @Param() params) : Promise<void> {
		return null;
	}

	@Get(':boardId/lists/:listId/cards')
	async findAllCards(@Headers() headers) : Promise<Card[]>{
		return null;
	}

	@Post(':boardId/lists/:listId/cards')
	@UsePipes(new ValidationPipe())
	async createCard(@Headers() headers, @Body() createCardDto : CardDto) : Promise<void>{
		return null;
	}

	@Get(':boardId/lists/:listId/cards/:cardId')
	async findOneCard(@Headers() headers, @Param() params) : Promise<Card> {
		return null;
	}

	@Put(':boardId/lists/:listId/cards/:cardId')
	@UsePipes(new ValidationPipe())
	async updateCard(@Headers() headers, @Body() updateCardDto : CardDto, @Param() params) : Promise<void> {
		return null;
	}

	@Delete(':boardId/lists/:listId/cards/:cardId')
	async deleteCard(@Headers() headers, @Param() params) : Promise<void> {
		return null;
	}

}
