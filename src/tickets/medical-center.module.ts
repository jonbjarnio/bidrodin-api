import { Module } from '@nestjs/common';
import { MedicalCenterService } from './services/medical-center/medical-center.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { MedicalCenter, MedicalCenterSchema } from "../schemas/medical-center.schema";
import { MedicalCenterController } from '../controllers/medical-center/medical-center.controller';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    MongooseModule.forFeature([
      { name: MedicalCenter.name, schema: MedicalCenterSchema },
    ]),
  ],
  controllers: [MedicalCenterController],
  providers: [MedicalCenterService],
})
export class MedicalCenterModule {}
