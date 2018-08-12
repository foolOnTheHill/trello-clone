import { Document } from 'mongoose';

import { User } from './user.interface';

export interface Board extends Document {
	title : string;
	user : User;
}
