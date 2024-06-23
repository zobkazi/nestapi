import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from './dto/user.dto';
import { User, UserDocument } from './models/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(userDTO: UserDTO): Promise<User> {
    // Validate userDTO using Zod or class-validator if needed
    if (!userDTO.name || !userDTO.email || !userDTO.password) {
      throw new BadRequestException('Name, email, and password are required');
    }

    const existingUser = await this.userModel.findOne({ email: userDTO.email });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(userDTO.password, 10);

    const newUser = new this.userModel({
      name: userDTO.name,
      email: userDTO.email,
      password: hashedPassword,
    });
    return await newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
