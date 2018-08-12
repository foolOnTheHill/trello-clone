import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { environment } from '../../environments/environment';

import { AuthToken } from '../../common/types';
import { User, LoginCredentials, RegisterCredentials } from '../../common/interfaces';

const BackendUrl = environment.backendUrl;

export interface IAuth {
	token : AuthToken;
	user : User;
}

@Injectable()
export class UserService {
	private current : User;
	private token : AuthToken;

	constructor(
		private http : HttpClient
	) {
		this.current = null;
		this.token = null;
	}

	public get currentUser() : User {
		return this.current;
	}

	public get userToken() : AuthToken {
		return this.token;
	}

	public async login(credentials : LoginCredentials) : Promise<void> {
		try {
			const auth = await this.http.post<IAuth>(
				`${BackendUrl}/auth/login`,
				{
					email : credentials.email,
					password : credentials.password
				}
			)
			.first()
			.toPromise();

			this.current = auth.user;
			this.token = auth.token;
		} catch (error) {
			if (error.error instanceof ErrorEvent) {
				throw new Error(error.message);
			} else {
				throw new Error(error.error.error);
			}
		}
	}

	public async register(credentials : RegisterCredentials) : Promise<void> {
		try {
			await this.http.post<IAuth>(
				`${BackendUrl}/auth/register`,
				{
					name : credentials.name,
					email : credentials.email,
					password : credentials.password
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			if (error.error instanceof ErrorEvent) {
				throw new Error(error.message);
			} else {
				throw new Error(error.error.error);
			}
		}
	}

	public async logout() : Promise<void> {
		try {
			await this.http.get<void>(
				`${BackendUrl}/auth/logout`,
				{
					headers: new HttpHeaders({
						'Authorization': this.token
					})
				}
			)
			.first()
			.toPromise();

			this.current = null;
			this.token = null;
		} catch (error) {
			if (error.error instanceof ErrorEvent) {
				throw new Error(error.message);
			} else {
				throw new Error(error.error.error);
			}
		}
	}
}
