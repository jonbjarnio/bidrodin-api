import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateTicketDto } from '../../tickets/dtos/create-ticket.dto';
import { TicketsService } from '../../tickets/tickets.service';
import { Ticket } from '../../schemas/ticket.schema';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketService: TicketsService) {}

  @Post()
  async create(@Body() createTicketDto: CreateTicketDto) {
    console.log(createTicketDto);
    await this.ticketService.create(createTicketDto);
  }

  @Get()
  async findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Get('currentlyWaiting')
  async findActiveUsers(): Promise<Ticket[]> {
    return this.ticketService.findActiveUsers();
  }

  @Put()
  async deactivateUser(ticketNumber) {
    return this.ticketService.deactivateUser(ticketNumber);
  }
}
