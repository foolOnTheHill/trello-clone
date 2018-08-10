import { Module } from '@nestjs/common';

import { BoardsModule, AuthModule } from './modules'

@Module({
  modules : [
		BoardsModule,
		AuthModule
	]
})
export class AppModule {}
