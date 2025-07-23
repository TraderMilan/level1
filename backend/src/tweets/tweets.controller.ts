import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TweetsService } from './tweets.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { CurrentUser, RequestWithUser } from '../decorators/current-user.decorator';
import { TweetResponseDto } from './dto/tweet-response.dto';

@ApiTags('tweets')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetService: TweetsService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new tweet' })
  @ApiResponse({
    status: 201,
    description: 'Tweet was created successfully',
    type: TweetResponseDto,
  })
  addTweet(
    @CurrentUser() user: RequestWithUser['user'],
    @Body() createTweetDto: CreateTweetDto,
  ) {
    return this.tweetService.addTweet({ ...createTweetDto, userId: user.id });
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of tweets' })
  @ApiResponse({
    status: 200,
    description: 'List of tweets by authenticated user',
    type: TweetResponseDto,
    isArray: true,
  })
  getTweets(@CurrentUser() user: RequestWithUser['user']) {
    return this.tweetService.getAllTweetsByUser(user.id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove a tweet by id' })
  @ApiResponse({
    status: 204,
    description: 'Removed tweet',
  })
  deleteTweet(
    @CurrentUser() user: RequestWithUser['user'],
    @Param('id') id: string,
  ): Promise<void> {
    return this.tweetService.deleteTweet(id, user.id);
  }
}
