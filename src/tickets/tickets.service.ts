import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from '../schemas/ticket.schema';
import { Model } from 'mongoose';
import { CreateTicketDto } from './dtos/create-ticket.dto';
import { UpdateResult } from 'mongodb';

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

  async deactivateUser(ticketNumber): Promise<UpdateResult> {
    return this.ticketModel.updateOne(
      { ticketNumber: ticketNumber },
      { $set: { active: false } },
    );
  }
}
