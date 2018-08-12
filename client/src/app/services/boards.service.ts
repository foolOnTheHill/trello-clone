import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { environment } from '../../environments/environment';

import { AuthToken } from '../../common/types';
import { } from '../../common/interfaces';

const BackendUrl = environment.backendUrl;

@Injectable()
export class BoardsService {

	constructor(
		private http : HttpClient
	) {	}

}
