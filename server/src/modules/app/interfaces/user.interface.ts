import { Document } from 'mongoose';

import { UserId } from '../../../common/types';

export interface TokenData {
	id : UserId;
	user : User;
}

export interface User extends Document {
	name : string;
	email : string;
	password? : string;
}
