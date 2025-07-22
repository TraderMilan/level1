import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TweetDocument = Tweet & Document;

@Schema({
  collection: 'tweets',
  timestamps: true,
})
export class Tweet {
  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
