import { Component, Inject, Res, BadRequestException, ForbiddenException } from '@nestjs/common';

import { Model } from 'mongoose';

import { Board, List, Card } from '../interfaces';
import { BoardDto, ListDto, CardDto } from '../dto';

@Component()
export class BoardsService {

	constructor(
		@Inject('BoardModelToken') private readonly boardModel: Model<Board>,
		@Inject('ListModelToken') private readonly listModel: Model<List>,
		@Inject('CardModelToken') private readonly cardModel: Model<Card>
	) {}

}
