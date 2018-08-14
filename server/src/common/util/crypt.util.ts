import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export class Crypt {

	static async hashPassword(password : string) : Promise<string> {
		return new Promise<string>((resolve, reject) => {
			bcrypt.hash(password, SALT_ROUNDS, function(err, hash) {
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
