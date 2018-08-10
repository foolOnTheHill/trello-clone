import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { BoardsController } from './boards.controller';
import { boardsProviders } from './boards.providers';
import { BoardsService } from './boards.service';

@Module({
  modules: [DatabaseModule],
  controllers: [BoardsController],
  components: [BoardsService, ...boardsProviders]
})
export class BoardsModule {}
