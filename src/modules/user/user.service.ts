import { Injectable, BadRequestException } from '@nestjs/common';
import { UserDTO } from './dto/userDTO';
import User from './models/User';

@Injectable()
export class UserService {
  private users: UserDTO[] = [];

  createUser(userDto: UserDTO): UserDTO {
    try {
      const validatedUser = UserDTO.safeParse(userDto);
      if (!validatedUser.success) {
        throw new BadRequestException(validatedUser.error.errors);
      }

      const newUser = new User(validatedUser.data);
      this.users.push(newUser);
      return newUser;
    } catch (error) {
      throw new BadRequestException(error.errors);
    }
  }

  getAllUsers(): UserDTO[] {
    return this.users;
  }
}
