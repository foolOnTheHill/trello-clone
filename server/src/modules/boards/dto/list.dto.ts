import { IsString } from 'class-validator';

export class ListDto {
	@IsString() readonly board : string;
	@IsString() readonly title : string;
}
