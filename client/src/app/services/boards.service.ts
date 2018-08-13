import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';

import { environment } from '../../environments/environment';

import { AuthToken, BoardId, ListId, CardId } from '../../common/types';
import { Board, List, Card } from '../../common/interfaces';

import { UserService } from './user.service';

import { handleError } from '../../common/error';

const BackendUrl = environment.backendUrl;

@Injectable()
export class BoardsService {

	constructor(
		private http : HttpClient,
		private userService : UserService
	) {	}

	public async findAllBoards() : Promise<Board[]> {
		try {
			return await this.http.get<Board[]>(
				`${BackendUrl}/boards`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async createBoard(board : Board) : Promise<Board> {
		try {
			return await this.http.post<Board>(
				`${BackendUrl}/boards`,
				board,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async findOneBoard(boardId : BoardId) : Promise<Board> {
		try {
			return await this.http.get<Board>(
				`${BackendUrl}/boards/${boardId}`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async updateBoard(boardId : BoardId, board : Board) : Promise<Board> {
		try {
			return await this.http.put<Board>(
				`${BackendUrl}/boards${boardId}`,
				board,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async deleteBoard(boardId : BoardId) : Promise<void> {
		try {
			return await this.http.delete<void>(
				`${BackendUrl}/boards/${boardId}`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async findAllLists(boardId : BoardId) : Promise<List[]> {
		try {
			return await this.http.get<List[]>(
				`${BackendUrl}/boards/${boardId}/lists`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async createList(boardId : BoardId, list : List) : Promise<List> {
		try {
			return await this.http.post<List>(
				`${BackendUrl}/boards/${boardId}/lists`,
				list,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async findOneList(boardId : BoardId, listId : ListId) : Promise<List> {
		try {
			return await this.http.get<List>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async updateList(boardId : BoardId, listId : ListId, list : List) : Promise<List> {
		try {
			return await this.http.put<List>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}`,
				list,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async deleteList(boardId : BoardId, listId : ListId) : Promise<void> {
		try {
			return await this.http.delete<void>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async findAllCards(boardId : BoardId, listId : ListId) : Promise<Card[]> {
		try {
			return await this.http.get<Card[]>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}/cards`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async createCard(boardId : BoardId, listId : ListId, card : Card) : Promise<Card> {
		try {
			return await this.http.post<Card>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}/cards`,
				card,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async findOneCard(boardId : BoardId, listId : ListId, cardId : CardId) : Promise<Card> {
		try {
			return await this.http.get<Card>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}/cards/${cardId}`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async updateCard(boardId : BoardId, listId : ListId, cardId : CardId, card : Card) : Promise<Card> {
		try {
			return await this.http.put<Card>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}/cards/${cardId}`,
				card,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

	public async deleteCard(boardId : BoardId, listId : ListId, cardId : CardId) : Promise<void> {
		try {
			return await this.http.delete<void>(
				`${BackendUrl}/boards/${boardId}/lists/${listId}/cards/${cardId}`,
				{
					headers: new HttpHeaders({
						'Authorization': this.userService.userToken
					})
				}
			)
			.first()
			.toPromise();
		} catch (error) {
			handleError(error);
		}
	}

}
