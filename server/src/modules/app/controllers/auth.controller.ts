import {
  Controller,
	Post,
  Body,
  UsePipes,
  Headers
} from '@nestjs/common';

import { ValidationPipe } from '../../../common/pipes/validation.pipe';

import { AuthService } from '../services';

import { CredentialsDto, UserDto } from '../dto';

import { User, LoginResponse } from '../interfaces';

@Controller('auth')
export class AuthController {
  constructor(
		private readonly auth : AuthService
	) {}

	@Post('login')
	@UsePipes(new ValidationPipe())
	async login(@Body() credentials : CredentialsDto) : Promise<LoginResponse> {
		return this.auth.login(credentials);
	}

	@Post('register')
	@UsePipes(new ValidationPipe())
	async register(@Body() credentials : UserDto) : Promise<User> {
		return this.auth.register(credentials);
	}

	@Post('logout')
	@UsePipes(new ValidationPipe())
	async logout(@Headers() headers) : Promise<void> {
		return this.auth.logout(headers.authorization);
	}

}
