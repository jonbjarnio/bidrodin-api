import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MockUser, MockUserSchema } from './schemas/mock-user.schema';
import { MockUserService } from './services/mock-user/mock-user.service';
import { MockUserController } from './controllers/mock-user/mock-user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MockUser.name, schema: MockUserSchema },
    ]),
  ],
  controllers: [MockUserController],
  providers: [MockUserService],
})
export class MockUsersModule {}
