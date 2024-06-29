// src/modules/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LogInDTO } from './dto/log-in.dto.ts';
import { SignUpDTO } from './dto/sign-up.dto';
import { UserService } from '../user/user.service';
import { LogInResponseDTO } from './dto/log-in-response.dto';
import { SignUpResponseDTO } from './dto/sign-up-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDTO: LogInDTO): Promise<LogInResponseDTO> {
    const user = await this.userService.findOneByEmail(loginDTO.email);
    if (!user || !(await bcrypt.compare(loginDTO.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      expiresIn: 3600,
    };
  }

  async signUp(signUpDTO: SignUpDTO): Promise<SignUpResponseDTO> {
    const hashedPassword = await bcrypt.hash(signUpDTO.password, 10);
    const user = await this.userService.create({
      ...signUpDTO,
      password: hashedPassword,
    });

    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      expiresIn: 3600,
    };
  }
}
