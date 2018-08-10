import { IsString } from 'class-validator';

import { CardId } from '../types';

export class CardDto {
	@IsString() readonly id? : CardId;
	@IsString() readonly title : string;
	@IsString() readonly content : string;
}
