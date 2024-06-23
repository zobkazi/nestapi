import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { User } from './models/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userDTO: UserDTO): Promise<User> {
    try {
      return await this.userService.createUser(userDTO);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    try {
      return await this.userService.getUserByEmail(email);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
