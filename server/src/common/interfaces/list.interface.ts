import { ListId } from '../types';

import { Card } from './card.interface';

export interface List {
	title : string;
	id? : ListId;
	cards? : Card[];
}
