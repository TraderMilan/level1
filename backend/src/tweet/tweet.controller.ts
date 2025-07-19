import { Body, Controller, Param, Get, Post, Delete } from '@nestjs/common';
import { CreateTweetDto, TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private readonly tweetService: TweetService) {}

  @Post()
  addTweet(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetService.addTweet(createTweetDto);
  }

  @Get()
  getTweets() {
    return this.tweetService.getAllTweets();
  }

  @Delete(':id')
  deleteTweet(@Param('id') id: string) {
    return this.tweetService.deleteTweet(id);
  }
}
