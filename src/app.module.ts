import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { MedicalCenterModule } from './tickets/medical-center.module';

@Module({
  imports: [
    TicketsModule,
    MedicalCenterModule,
    MongooseModule.forRoot(
      'mongodb+srv://johannas:alliribidrod@bidrodincluster.sldi2.mongodb.net/ticketdb?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
