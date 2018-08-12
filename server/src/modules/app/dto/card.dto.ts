import { IsString } from 'class-validator';

export class CardDto {
	@IsString() readonly title : string;
	@IsString() readonly content : string;
}
