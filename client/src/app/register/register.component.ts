import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { RegisterCredentials } from '../../common/interfaces';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-register',
	templateUrl: 'register.component.html',
	styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
	error : string;
	success : string;
	isRequesting : boolean;

	credentials : RegisterCredentials = { name: '', email: '', password: '' };

	constructor(
		private userService : UserService,
		private router : Router
	) { }

	ngOnInit() {
		if (this.userService.currentUser) {
			this.router.navigate(['/']);
		}
	}

	ngOnDestroy() { }

	async doRegister(form) {
		this.success = '';
		if (!form.valid) {
			this.error = 'Fill all required fields';
			return;
		}

		try {
			this.isRequesting = true;
			this.error = '';

			const { email, password, name } = this.credentials;

			await this.userService.register(this.credentials);

			this.success = 'Account created successfully!';
		} catch (error) {
			this.error = error.message;
		} finally {
			this.isRequesting = false;
		}
	}

}
