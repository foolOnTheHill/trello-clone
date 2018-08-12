import { Document } from 'mongoose';

import { Board } from './board.interface';

export interface List extends Document {
	title : string;
	board : Board;
}
