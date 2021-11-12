import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MockUser, MockUserDocument } from '../../schemas/mock-user.schema';
import { Model } from 'mongoose';

@Injectable()
export class MockUserService {
  constructor(
    @InjectModel(MockUser.name)
    private mockUserDocumentModel: Model<MockUserDocument>,
  ) {}

  async find(): Promise<MockUser[]> {
    return this.mockUserDocumentModel.find({}).exec();
  }
}
