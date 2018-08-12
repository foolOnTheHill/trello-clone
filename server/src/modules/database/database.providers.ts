import * as mongoose from 'mongoose';

import { CONFIG } from '../../common/config/config';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> => {
			console.log('> Trying to connect to MongoDb Database...');

			const res = await mongoose.connect(CONFIG.MONGODB_URI, { useNewUrlParser: true });

			console.log('> Sucessfully connected to MongoDb Database!');

			return res;
		},
  },
];
