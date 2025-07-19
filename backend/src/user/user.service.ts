import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(username: string, password: string): Promise<User> {
    return this.userModel.create({ username, password });
  }

  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userModel.findOne({ username });
    if (!user) throw new UnauthorizedException('User not found');

    if (user.password !== password) {
      throw new UnauthorizedException('Password incorrect');
    }

    const payload = {
      id: user._id,
      username: user.username,
    };
    const token = this.jwtService.sign(payload);

    return { access_token: token };
  }
}
