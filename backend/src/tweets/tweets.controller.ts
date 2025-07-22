import {Body, Controller, Param, Get, Post, Delete, UseGuards, Req, HttpCode, HttpStatus} from '@nestjs/common';
import { Request } from 'express';

import { TweetsService } from './tweets.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTweetDto } from './dto/create-tweet.dto';

export interface RequestWithUser extends Request {
  user: {
    id: string;
    username: string;
  };
}

@UseGuards(JwtAuthGuard)
@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetService: TweetsService) {}

  @Post()
  addTweet(@Req() req: RequestWithUser, @Body() createTweetDto: CreateTweetDto) {
    return this.tweetService.addTweet({...createTweetDto, userId: req.user.id,});
  }

  @Get()
  getTweets(@Req() req: RequestWithUser) {
    return this.tweetService.getAllTweetsByUser(req.user.id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTweet(@Req() req: RequestWithUser, @Param('id') id: string): Promise<void> {
    return this.tweetService.deleteTweet(id, req.user.id);
  }
}
