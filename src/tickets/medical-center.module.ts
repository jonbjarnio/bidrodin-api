import { Module } from "@nestjs/common";
import { MedicalCenterService } from "./services/medical-center/medical-center.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [MedicalCenterService],
})
export class MedicalCenterModule {}
