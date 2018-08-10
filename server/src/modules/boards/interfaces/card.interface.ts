import { Document } from 'mongoose';

export interface Card extends Document {
	title : string;
	content : string;
}
