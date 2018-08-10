import { BoardId } from '../types';

import { List } from './list.interface';

export interface Board {
	title : string;
	id? : BoardId;
	lists? : List[];
}
