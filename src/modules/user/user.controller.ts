import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): UserDTO[] {
    return this.userService.getAllUsers();
  }

  @Post('create')
  async createUser(@Body() userDto: UserDTO): Promise<UserDTO> {
    try {
      const createdUser = await this.userService.createUser(userDto);
      return createdUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
