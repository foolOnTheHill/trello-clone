import { IsString } from 'class-validator';

export class ListDto {
	@IsString() readonly title : string;
}
