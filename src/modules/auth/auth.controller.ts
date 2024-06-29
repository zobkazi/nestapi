// src/modules/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogInDTO } from './dto/log-in.dto.ts';
import { SignUpDTO } from './dto/sign-up.dto';
import { LogInResponseDTO } from './dto/log-in-response.dto';
import { SignUpResponseDTO } from './dto/sign-up-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LogInDTO): Promise<LogInResponseDTO> {
    return this.authService.login(loginDTO);
  }

  @Post('signup')
  async signUp(@Body() signUpDTO: SignUpDTO): Promise<SignUpResponseDTO> {
    return this.authService.signUp(signUpDTO);
  }
}
