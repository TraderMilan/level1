import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { User, UserDocument } from './user.schema';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(username: string, password: string): Promise<{ message: string }> {
    const hashedPassword = await bcrypt.hash(password, 10);
    await this.userModel.create({ username, password: hashedPassword });
    return { message: 'User successfully registered' };
  }

  async login(username: string, password: string): Promise<{ access_token: string; user: User }> {
    const user = await this.userModel.findOne({ username });
    if (!user) throw new UnauthorizedException('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Password incorrect');

    const payload = {
      id: user._id,
      username: user.username,
    };
    const token = this.jwtService.sign(payload);

    const userWithoutPassword = plainToInstance(User, user.toObject());

    return { access_token: token, user: userWithoutPassword };
  }
}
