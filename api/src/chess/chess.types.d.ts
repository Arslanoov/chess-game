export type ChessGame = {
  moves: {
    [key: string]: [string, string];
  };
  pieces: {
    [key: string]: [string, string];
  };
  turn: string;
  isFinished: boolean;
  check: boolean;
  checkMate: boolean;
  castling: {
    whiteShort: boolean;
    blackShort: boolean;
    whiteLong: boolean;
    blackLong: boolean;
  };
  enPassant: string | null;
  halfMove: number;
  fullMove: number;
};
