import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
// import { DatabaseModule } from './database/database.module';
// import databaseConfig from './config/database.config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [databaseConfig],
    //   isGlobal: true,
    // }),
    // DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
