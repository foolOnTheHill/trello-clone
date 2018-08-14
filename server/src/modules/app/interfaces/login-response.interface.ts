import { AuthToken } from '../../../common/types';

import { User } from './user.interface';

export interface LoginResponse {
	token : AuthToken;
	user : User;
};
