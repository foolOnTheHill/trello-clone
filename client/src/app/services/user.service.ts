import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { environment } from '../../environments/environment';

import { AuthToken } from '../../common/types';
import { User, LoginCredentials, RegisterCredentials } from '../../common/interfaces';

import { handleError } from '../../common/error';

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

		const auth = this.retrieveAuthData();

		if (auth) {
			console.log('User already logged in');

			this.current = auth.user;
			this.token = auth.token;
		}
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

			this.saveAuthData(auth);

			this.current = auth.user;
			this.token = auth.token;
		} catch (error) {
			this.deleteAuthdata();
			handleError(error);
		}
	}

	private saveAuthData(auth : IAuth) {
		const data = JSON.stringify(auth);
		window.localStorage.setItem('user', data);
	}

	private retrieveAuthData() : IAuth {
		const data = window.localStorage.getItem('user');

		if (!data) { return null; }

		const auth = JSON.parse(data);

		return auth as IAuth;
	}

	private deleteAuthdata() {
		window.localStorage.removeItem('user');
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
			this.deleteAuthdata();
			handleError(error);
		}
	}

	public async logout() : Promise<void> {
		try {
			await this.http.post<void>(
				`${BackendUrl}/auth/logout`,
				{},
				{
					headers: new HttpHeaders({
						'Authorization': this.token
					})
				}
			)
			.first()
			.toPromise();

			this.deleteAuthdata();

			this.current = null;
			this.token = null;
		} catch (error) {
			handleError(error);
		}
	}
}
