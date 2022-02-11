import { Controller, Get } from '@nestjs/common';

import { ChessService } from './chess.service';
import { GameRepository } from './game.repository';

@Controller('chess')
export class ChessController {
  constructor(
    private readonly service: ChessService,
    private readonly repository: GameRepository,
  ) {}

  @Get('game/new')
  public async newGame() {
    const userId = 'some-user-id';
    const game = this.service.startGame();
    await this.repository.saveGame(userId, game);
    return game;
  }
}
