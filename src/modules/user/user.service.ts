import { Injectable, BadRequestException } from '@nestjs/common';
import { UserDTO } from './dto/userDTO';
import User from './models/User';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  private users: UserDTO[] = [];

  async createUser(userDto: UserDTO): Promise<UserDTO> {
    try {
      const validatedUser = UserDTO.safeParse(userDto);
      if (!validatedUser.success) {
        return new BadRequestException('Invalid user data');
      }
      //check if user already exists
      const existingUser = this.users.find(
        (user) => user.email === validatedUser.data.email,
      );
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }
      // check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(validatedUser.data.email)) {
        throw new BadRequestException('Invalid email address');
      }

      // check if password is valid
      if (validatedUser.data.password.length < 6) {
        throw new BadRequestException('Password must be at least 6 characters');
      }
      //hash password
      if (validatedUser.data.password.length < 6) {
        throw new BadRequestException('Password must be at least 6 characters');
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(validatedUser.data.password, 10);
      // Create new user with hashed password
      const newUser = new User({
        ...validatedUser.data,
        password: hashedPassword,
        createdAt: new Date(),
      });

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
