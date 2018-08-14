import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginCredentials } from '../../common/interfaces';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
	error : string;
	success : string;
	isRequesting : boolean;

	credentials : LoginCredentials = { email: '', password: '' };

	constructor(
		private userService : UserService,
		private router : Router
	) { }

	ngOnInit() {
		if (this.userService.currentUser) {
			this.router.navigate(['/dashboard']);
		}
	}

	ngOnDestroy() { }

	async doLogin(form) {
		this.success = '';
		if (!form.valid) {
			this.error = 'Fill all required fields';
			return;
		}

		try {
			this.isRequesting = true;
			this.error = '';

			const { email, password } = this.credentials;

			await this.userService.login(this.credentials);

			this.router.navigate(['/dashboard']);
		} catch (error) {
			this.error = error.message;
		} finally {
			this.isRequesting = false;
		}
	}

}
