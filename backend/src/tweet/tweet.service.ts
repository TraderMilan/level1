import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './tweet.schema';

export class CreateTweetDto {
  content: string;
}

@Injectable()
export class TweetService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>,
  ) {}

  async addTweet(tweetDto: CreateTweetDto): Promise<Tweet> {
    const createdTweet = new this.tweetModel(tweetDto);
    return createdTweet.save();
  }

  async getAllTweets(): Promise<Tweet[]> {
    return this.tweetModel.find().exec();
  }

  async deleteTweet(id: string): Promise<void> {
    await this.tweetModel.findByIdAndDelete(id);
  }
}
