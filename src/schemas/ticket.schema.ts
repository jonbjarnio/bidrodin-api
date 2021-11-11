import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
  @Prop()
  ownerName: string;

  @Prop()
  ownerId: number;

  @Prop()
  reason: string;

  @Prop()
  ticketNumber: string;

  @Prop()
  active: boolean;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
