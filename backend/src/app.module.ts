import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { UsersModule } from './users/users.module';
import { GlobalConfigModule } from './infrastructure/config/config.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [GlobalConfigModule, DatabaseModule, TweetsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
