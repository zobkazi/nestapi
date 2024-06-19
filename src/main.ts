import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

import * as morgan from 'morgan';
// import * as helmet from 'helmet';
import db from './database/db';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB success');
  });

  app.use(morgan('dev'));

  await app.listen(3000);

  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
