import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type TweetDocument = Tweet & Document;

@Schema({
  collection: 'tweets',
  timestamps: true,
})
export class Tweet {
  @ApiProperty({ description: 'Content of a tweet' })
  @Prop({ required: true })
  content: string;

  @ApiProperty({ description: 'Author of tweet' })
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
