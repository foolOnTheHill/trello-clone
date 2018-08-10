import { Document } from 'mongoose';

import { Card } from './card.interface';

export interface List extends Document {
	title : string;
	cards? : Card[];
}
