import {
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

export class LogInDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class SignUpDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

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
