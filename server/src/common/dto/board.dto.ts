import { IsString } from 'class-validator';

import { BoardId } from '../types';

export class BoardDto {
	@IsString() readonly id? : BoardId;
	@IsString() readonly title : string;
}
