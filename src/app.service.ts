import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Zobaidul kazi is re1';
  }

  getProfile(): string {
    return 'is a progfile of zobaidul kazi';
  }
}
