import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  userId?: string;
}
