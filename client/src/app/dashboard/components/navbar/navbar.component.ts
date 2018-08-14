import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	error = null;
	userName = 'Guest';
	showLogout = false;

	collapse = false;

	constructor(
		private userService : UserService,
		private router : Router
	) { }

	ngOnInit() {
		if (this.userService.currentUser) {
			this.userName = this.userService.currentUser.name;
			this.showLogout = true;
		}
	}

	async doLogout() {
		try {
			await this.userService.logout();

			this.router.navigate(['/login']);
		} catch(error) {
			this.error = error.message;
		}
	}

}
