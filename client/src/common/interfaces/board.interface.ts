import { User } from './user.interface';
import { List } from './list.interface';

export interface Board {
	_id? : string;
	title : string;
	lists? : List[];
	user? : User;
}
