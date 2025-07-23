import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: '1234567890abcdef', description: 'User ID' })
  id: string;

  @ApiProperty({ example: 'john', description: 'Username' })
  username: string;
}
