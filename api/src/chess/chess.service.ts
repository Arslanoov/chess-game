import { Injectable } from '@nestjs/common';

import type { ChessGame } from './chess.types';

const { Game } = require('js-chess-engine');

@Injectable()
export class ChessService {
  public startGame(): ChessGame {
    const game = new Game();
    return game.exportJson();
  }
}
