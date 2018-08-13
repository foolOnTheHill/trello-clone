import { List } from './list.interface';

export interface Card {
	title : string;
	content : string;
	list? : List;
}
