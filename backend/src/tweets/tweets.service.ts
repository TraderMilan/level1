import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tweet, TweetDocument } from './tweet.schema';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>,
  ) {}

  async addTweet(tweetDto: CreateTweetDto): Promise<Tweet> {
    const createdTweet = new this.tweetModel(tweetDto);
    return createdTweet.save();
  }

  async getAllTweetsByUser(userId: string): Promise<Tweet[]> {
    return this.tweetModel.find({ userId }).exec();
  }

  async deleteTweet(tweetId: string, userId: string): Promise<void> {
    const tweet = await this.tweetModel.findById(tweetId);

    if (!tweet) {
      throw new NotFoundException('Tweet not found');
    }

    if (tweet.userId.toString() !== userId) {
      throw new ForbiddenException('You are not allowed to delete this tweets');
    }

    await tweet.deleteOne();
  }
}
