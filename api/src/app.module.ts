import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigService } from 'config/config.service';

import { ConfigModule } from 'config/config.module';
import { ChessModule } from 'chess/chess.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.getMongoConfig(),
    }),
    ChessModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
