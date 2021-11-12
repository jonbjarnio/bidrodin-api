import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MockUser, MockUserDocument } from '../../schemas/mock-user.schema';
import { Model } from 'mongoose';
import { FindUserDto } from '../../tickets/dtos/find-user';

@Injectable()
export class MockUserService {
  constructor(
    @InjectModel(MockUser.name)
    private mockUserDocumentModel: Model<MockUserDocument>,
  ) {}

  async find(findUser: FindUserDto): Promise<MockUser[]> {
    return this.mockUserDocumentModel.find({ phone: findUser.phone }).exec();
  }
}
