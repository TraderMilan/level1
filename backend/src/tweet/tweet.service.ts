import { Injectable } from '@nestjs/common';

export class CreateTweetDto {
  content: string;
}

export class Tweet {
  id: number;
  content: string;
}

@Injectable()
export class TweetService {
  private tweets: Tweet[] = [];

  addTweet(tweetDto: CreateTweetDto): Tweet {
    const newTweet = {
      id:
        this.tweets.length > 0
          ? Math.max(...this.tweets.map((t) => t.id)) + 1
          : 1,
      content: tweetDto.content,
    };

    this.tweets.push(newTweet);
    return newTweet;
  }

  getAllTweets(): Tweet[] {
    return this.tweets;
  }

  deleteTweet(id: number) {
    this.tweets = this.tweets.filter((t) => t.id !== id);
  }
}
