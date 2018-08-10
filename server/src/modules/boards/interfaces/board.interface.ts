import { Document } from 'mongoose';

import { List } from './list.interface';

export interface Board extends Document {
	title : string;
	lists? : List[];
}
