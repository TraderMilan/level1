import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet, TweetSchema } from './tweet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tweet.name, schema: TweetSchema }]),
  ],
  controllers: [TweetController],
  providers: [TweetService],
})
export class TweetModule {}
