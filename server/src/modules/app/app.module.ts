import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { BoardsController, AuthController } from './controllers';
import { boardsProviders, authProviders } from './providers';
import { BoardsService, AuthService } from './services';

@Module({
  modules: [
		DatabaseModule
	],
  controllers: [
		BoardsController,
		AuthController
	],
  components: [
		BoardsService,
		...boardsProviders,
		...authProviders
	]
})
export class AppModule {}
