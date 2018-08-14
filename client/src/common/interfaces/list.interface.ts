import { Board } from './board.interface';
import { Card } from './card.interface';

export interface List {
	_id? : string;
	title : string;
	board? : Board;
	cards? : Card[];
}
