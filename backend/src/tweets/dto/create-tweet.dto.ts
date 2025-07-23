import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTweetDto {
  @ApiProperty({
    description: 'The content of the tweet',
    example: 'Hello world!',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'Optional user ID (usually set by backend)',
    example: '65a1234567abcdef12345678',
    required: false,
  })
  @IsString()
  @IsOptional()
  userId?: string;
}
