import { Injectable, Inject, BadRequestException, ForbiddenException } from '@nestjs/common';

import { Model } from 'mongoose';

import { AuthToken } from '../../../common/types';

import { User, TokenData, LoginResponse } from '../interfaces';
import { CredentialsDto, UserDto } from '../dto';

import { JwtUtil } from '../../../common/util';

@Injectable()
export class AuthService {

	constructor(
		@Inject('UserModelToken') private readonly userModel: Model<User>
	) {}

	public async login(credentials : CredentialsDto) : Promise<LoginResponse> {
		try {
			const user = await this.userModel.findOne({email : credentials.email, password : credentials.password}).exec();

			const userData = {
				name : user.name,
				email : user.email
			};

			const tokenData = {
				id : user._id,
				user : userData
			};

			const token = (await JwtUtil.sign(tokenData)) as AuthToken;

			return {
				token : token,
				user : userData
			} as LoginResponse;
		} catch(error) {
			throw new ForbiddenException(`Could not find user for email: ${credentials.email}`);
		}
	}

	public async register(credentials : UserDto) : Promise<User> {
		const user = await this.userModel.findOne({email : credentials.email}).exec();

		if (!user) {
			const newUser = new this.userModel(credentials);

			return await newUser.save();
		} else {
			throw new ForbiddenException(`This email is not available: ${credentials.email}`);
		}

	}

	public async logout(token : AuthToken) : Promise<void> {
		try {
			await this.authorize(token);
		} catch(error) {
			throw new BadRequestException(`Invalid token: ${error.message}`);
		}

	}

	public async authorize(token : AuthToken) : Promise<User> {
		const data : TokenData = await JwtUtil.verify(token);

		try {
			return await this.userModel.findById(data.id).exec();
		} catch(error) {
			throw new ForbiddenException(`Could not find user: ${data.id}`);
		}
	}

}
