import { Component, Inject, Res, BadRequestException, ForbiddenException } from '@nestjs/common';

import { Model } from 'mongoose';

import { AuthToken } from '../../../common/types';

import { User } from '../interfaces';
import { CredentialsDto, UserDto } from '../dto';

@Component()
export class AuthService {

	constructor(
		@Inject('UserModelToken') private readonly userModel: Model<User>
	) {}

	// TODO:
	public async login(credentials : CredentialsDto) : Promise<AuthToken> {
		return null;
	}

	// TODO:
	public async register(credentials : UserDto) : Promise<void> {
		return null;
	}

	// TODO:
	public async logout(token : AuthToken) : Promise<void> {
		return null;
	}

	// TODO:
	public async authorize(token : AuthToken) : Promise<User> {
		return null;
	}

}
