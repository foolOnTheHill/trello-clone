import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { AuthController } from './auth.controller';
import { authProviders } from './auth.providers';
import { AuthService } from './auth.service';

@Module({
  modules: [DatabaseModule],
  controllers: [AuthController],
  components: [AuthService, ...authProviders]
})
export class AuthModule {}
