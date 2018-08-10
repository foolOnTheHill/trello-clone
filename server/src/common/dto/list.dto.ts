import { IsString } from 'class-validator';

import { ListId } from '../types';

export class ListDto {
	@IsString() readonly id? : ListId;
	@IsString() readonly title : string;
}
