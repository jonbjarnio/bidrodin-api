import { Module } from '@nestjs/common';
import { TicketsService } from '../services/tickets/tickets.service';
import { Ticket, TicketSchema } from '../schemas/ticket.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketsController } from '../controllers/ticket/tickets.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
