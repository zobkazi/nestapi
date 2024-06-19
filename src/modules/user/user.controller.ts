import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/userDTO';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): UserDTO[] {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser(@Body() userDto: UserDTO): UserDTO {
    return this.userService.createUser(userDto);
  }
}
