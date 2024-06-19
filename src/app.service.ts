import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to nestapi with kazibyte! Awesome!';
  }
}
