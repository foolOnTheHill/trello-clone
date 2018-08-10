import { CardId } from '../types';

export interface Card {
	title : string;
	content : string;
	id? : CardId;
}
