import { Connection } from 'mongoose';

import { BoardSchema, ListSchema, CardSchema } from '../schemas';

export const boardsProviders = [
  {
    provide: 'BoardModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Board', BoardSchema),
    inject: ['DbConnectionToken']
  },
	{
		provide: 'ListModelToken',
		useFactory: (connection: Connection) =>
			connection.model('List', ListSchema),
		inject: ['DbConnectionToken']
	},
	{
		provide: 'CardModelToken',
		useFactory: (connection: Connection) =>
			connection.model('Card', CardSchema),
		inject: ['DbConnectionToken']
	}
];
