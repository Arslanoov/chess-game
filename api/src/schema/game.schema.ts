import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ChessGame } from 'chess/chess.types';

@Schema()
export class Game extends Document {
  @Prop({ required: true, type: String })
  userId: string;

  @Prop({ required: true, type: String })
  game: ChessGame;
}

export const GameSchema = SchemaFactory.createForClass(Game);
