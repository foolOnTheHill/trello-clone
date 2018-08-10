import {
  Controller,
  Put,
	Get,
	Post,
  Body,
  Param,
  UsePipes,
  Headers
} from '@nestjs/common';

import { ValidationPipe } from '../../common/pipes/validation.pipe';

import { BoardsService } from './boards.service';

import { BoardDto, ListDto, CardDto } from './dto';

import { } from './interfaces';

@Controller('boards')
export class BoardsController {
  constructor(
		private readonly boards : BoardsService
	) {}
}
