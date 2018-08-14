import { List } from './list.interface';

export interface Card {
	_id? : string;
	title : string;
	content : string;
	list? : List;
}
