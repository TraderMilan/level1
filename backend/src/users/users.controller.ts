import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';
import {LoginResponseDto} from "./dto/login-response.dto";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserResponseDto,
  })
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(
      createUserDto.username,
      createUserDto.password,
    );
  }

  @ApiOperation({ summary: 'Login existing user' })
  @ApiResponse({
    status: 200,
    description: 'Login successful, returns token and user info',
    type: LoginResponseDto,
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() createUserDto: CreateUserDto) {
    return this.userService.login(
      createUserDto.username,
      createUserDto.password,
    );
  }
}
