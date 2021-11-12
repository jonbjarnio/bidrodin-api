import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MedicalCenter,
  MedicalCenterDocument,
} from '../../schemas/medical-center.schema';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class MedicalCenterService {
  private readonly logger = new Logger(MedicalCenterService.name);

  constructor(
    @InjectModel(MedicalCenter.name)
    private medicalCenterModel: Model<MedicalCenterDocument>,
    private httpService: HttpService,
  ) {}

  /*  @Cron('45 * * * * *')
  handleCron() {
  }

  @Interval(10000)
  getCurrentEstimatedWaitingTime() {
    console.log('getCurrentEstimatedWaitingTime');
    return this.httpService
      .get('https://numer.laeknavaktin.is/index.php?rest_route=/wp/v2/pages/6');
    //  .map((response) => response.data);
  }*/
}
