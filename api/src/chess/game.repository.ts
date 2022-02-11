import { Model } from 'mongoose';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ChessGame } from './chess.types';

import { Game } from 'schema/game.schema';

export class GameRepository {
  constructor(
    @InjectModel(Game.name) private readonly gameModel: Model<Game>,
  ) {}

  async saveGame(userId: string, gameObject: ChessGame): Promise<void> {
    const game = new this.gameModel({
      userId,
      game: JSON.stringify(gameObject),
    });

    try {
      await game.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    if (!game) {
      throw new ConflictException('Game not created');
    }
  }
}
