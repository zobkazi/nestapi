import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';





export class LogInResponseDTO {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  expiresIn: number;

  constructor(token: string, expiresIn: number) {
    this.token = token;
    this.expiresIn = expiresIn;
  }
}

export class SignUpResponseDTO {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  expiresIn: number;

  constructor(token: string, expiresIn: number) {
    this.token = token;
    this.expiresIn = expiresIn;
  }
}

export class AuthHistoryDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  expiresIn: number;

  constructor(email: string, token: string, expiresIn: number) {
    this.email = email;
    this.token = token;
    this.expiresIn = expiresIn;
  }
}
