import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateTicketDto } from '../../tickets/dtos/create-ticket.dto';
import { MedicalCenterService } from '../../tickets/services/medical-center/medical-center.service';

@Controller('medical')
export class MedicalCenterController {
  constructor(private medicalService: MedicalCenterService) {}

  // @Post()
  // async create(@Body() createTicketDto: CreateTicketDto) {
  //   console.log(createTicketDto);
  //   await this.medicalService.create(createTicketDto);
  // }
}
