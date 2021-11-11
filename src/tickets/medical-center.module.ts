import { Module } from '@nestjs/common';
import { MedicalCenterController } from '../controllers/medical-center/medical-center.controller';
import { MedicalCenterService } from './services/medical-center/medical-center.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [MedicalCenterController],
  providers: [MedicalCenterService],
})
export class MedicalCenterModule {}
