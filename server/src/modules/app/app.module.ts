import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { BoardsController, AuthController } from './controllers';
import { boardsProviders, authProviders } from './providers';
import { BoardsService, AuthService } from './services';

@Module({
  imports: [
		DatabaseModule
	],
  controllers: [
		BoardsController,
		AuthController
	],
  providers: [
		BoardsService,
		AuthService,
		...boardsProviders,
		...authProviders
	]
})
export class AppModule {}
