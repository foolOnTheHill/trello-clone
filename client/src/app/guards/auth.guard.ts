import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';

import { UserService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
	public constructor(
		private router : Router,
		private user : UserService
	) {}

	public canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
		if (!this.user.currentUser) {
			this.router.navigate(['/login']);

			return false;
		} else {
			return true;
		}
	}

	public canActivateChild(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : boolean {
		return this.canActivate(route, state);
	}
}
