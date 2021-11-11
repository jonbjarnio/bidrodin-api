import { Module } from '@nestjs/common';
import { TicketsController } from '../controllers/tickets/tickets.controller';
import { TicketsService } from './tickets.service';
import { Ticket, TicketSchema } from '../schemas/ticket.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
  ],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
