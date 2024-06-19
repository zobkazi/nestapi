// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule.forRoot(), // Ensure the ConfigModule is initialized
//     MongooseModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         uri: configService.get<string>('mongoURI'),
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//       }),
//       inject: [ConfigService],
//     }),
//   ],
// })
// export class DatabaseModule {}

import { Module, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongoose from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(), // Ensure the ConfigModule is initialized
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongoURI'),
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  private readonly logger = new Logger(DatabaseModule.name);

  constructor() {
    mongoose.connection.on('connected', () => {
      this.logger.log('Successfully connected to the database');
    });

    mongoose.connection.on('error', (err) => {
      this.logger.error(`Database connection error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      this.logger.warn('Database connection lost');
    });
  }
}
