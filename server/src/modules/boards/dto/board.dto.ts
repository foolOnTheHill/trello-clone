import { IsString } from 'class-validator';

export class BoardDto {
	@IsString() readonly title : string;
	@IsString() readonly user : string;
}
