import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GameSchema, Game } from 'schema/game.schema';

import { ChessController } from './chess.controller';
import { ChessService } from './chess.service';
import { GameRepository } from './game.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Game.name,
        schema: GameSchema,
      },
    ]),
  ],
  controllers: [ChessController],
  providers: [ChessService, GameRepository],
  exports: [ChessService, GameRepository],
})
export class ChessModule {}
