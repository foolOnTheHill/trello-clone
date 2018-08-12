import { Module } from '@nestjs/common';

import { AppModule } from './modules'

@Module({
  imports : [
		AppModule
	]
})
export class MainModule {}
