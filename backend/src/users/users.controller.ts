import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(
      createUserDto.username,
      createUserDto.password,
    );
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() createUserDto: CreateUserDto) {
    return this.userService.login(
      createUserDto.username,
      createUserDto.password,
    );
  }
}
