import { ForbiddenException, InternalServerErrorException } from '@nestjs/common';

import * as jwt from 'jsonwebtoken';

import { AuthToken } from '..//types';

// FIXME: Use proper config management
const JWT_SECRET = 'secret';

export class JwtUtil {

	static async sign(data : any) : Promise<AuthToken> {
		try {
			return jwt.sign(data, JWT_SECRET, {
				expiresIn: 60 * 60 * 24 // expires in 24 hours
			});
		} catch(error) {
			throw new InternalServerErrorException(`Could not sign user data: ${error.message}`);
		}
	}

	static async verify(token : AuthToken) : Promise<any> {
		return new Promise((resolve, reject) => {
			jwt.verify(token, JWT_SECRET, (err, data) => {
				if (err) {
					reject(new ForbiddenException('Invalid token'));
				}

				resolve(data);
			});
		});
	}

}
