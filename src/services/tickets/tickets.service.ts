import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from '../../schemas/ticket.schema';
import { Model } from 'mongoose';
import { CreateTicketDto } from '../../tickets/dtos/create-ticket.dto';
import { UpdateResult } from 'mongodb';
import { DeactivateTicketDto } from '../../tickets/dtos/deactivate-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const createdTicket = new this.ticketModel(createTicketDto);
    return createdTicket.save();
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async findActiveUsers(): Promise<Ticket[]> {
    return this.ticketModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivateTicketDto: DeactivateTicketDto,
  ): Promise<UpdateResult> {
    console.log(deactivateTicketDto);
    return this.ticketModel.updateOne(
      { ticketNumber: deactivateTicketDto.ticketNumber },
      { $set: { active: false } },
    );
  }

  async update(): Promise<UpdateResult> {
    return this.ticketModel.updateMany({}, { $set: { active: true } });
  }
}
