import { Document } from 'mongoose';

import { List } from './list.interface';

export interface Card extends Document {
	list : List;
	title : string;
	content : string;
}
