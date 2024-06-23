export class LogInDTO {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class SignUpDTO {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export class LogInResponseDTO {
  token: string;
  expiresIn: number;
  constructor(token: string, expiresIn: number) {
    this.token = token;
    this.expiresIn = expiresIn;
  }
}

export class SignUpResponseDTO {
  token: string;
  expiresIn: number;
  constructor(token: string, expiresIn: number) {
    this.token = token;
    this.expiresIn = expiresIn;
  }
}

export class AuthHistoryDTO {
  email: string;
  token: string;
  expiresIn: number;
  constructor(email: string, token: string, expiresIn: number) {
    this.email = email;
    this.token = token;
    this.expiresIn = expiresIn;
  }
}
