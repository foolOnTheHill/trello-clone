import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './guards';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
				path: '', loadChildren: './dashboard/dashboard.module#DashboardModule',
				canActivate: [AuthGuard],
				canActivateChild: [AuthGuard]
			},
			{ path: 'login', loadChildren: './login/login.module#LoginModule' },
			{ path: 'register', loadChildren: './register/register.module#RegisterModule' },
			{ path: '**', redirectTo: 'login' }
		],
		{
			useHash: true
		})
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
