import * as bcrypt from 'bcrypt';

import { CONFIG } from '../config/config';

export class Crypt {

	static async hashPassword(password : string) : Promise<string> {
		return new Promise<string>((resolve, reject) => {
			bcrypt.hash(password, CONFIG.SALT_ROUNDS, function(err, hash) {
				if (err) {
					reject(err);
				}

				resolve(hash);
			});
		});
	}

	static async compare(plaintextPassword : string, hashedPassword : string) : Promise<boolean> {
		return new Promise<boolean>((resolve, reject) => {
			bcrypt.compare(plaintextPassword, hashedPassword, function(err, res) {
				if (err) {
					reject(err);
				}

				resolve(res);
			});
		});
	}

}
