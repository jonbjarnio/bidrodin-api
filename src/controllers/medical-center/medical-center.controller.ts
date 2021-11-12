import { Controller, Get } from '@nestjs/common';
import { MedicalCenterService } from '../../tickets/services/medical-center/medical-center.service';
import { Observable, map, pipe } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Controller('medical-center')
export class MedicalCenterController {
  constructor(private medicalCenterService: MedicalCenterService,     private httpService: HttpService,
  ) {}
  @Get('bla')
  async findAll(): Promise<Observable<any>> {
    return this.medicalCenterService.getCurrentEstimatedWaitingTime();
  }
  @Get()
  root() {
    return this.httpService
      .get('https://numer.laeknavaktin.is/index.php?rest_route=/wp/v2/pages/6')
      .pipe(map((response) => response.data.content.rendered));
  }
}
