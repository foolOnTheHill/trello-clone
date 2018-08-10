import { Module } from '@nestjs/common';

import { AppModule } from './modules'

@Module({
  modules : [
		AppModule
	]
})
export class MainModule {}
