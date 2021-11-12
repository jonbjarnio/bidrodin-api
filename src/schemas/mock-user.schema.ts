import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type MockUserDocument = MockUser & Document;

@Schema()
export class MockUser {
  @Prop()
  ssn: number;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  children: [{ type: ObjectId; ref: 'MockUser' }];
}

export const MockUserSchema = SchemaFactory.createForClass(MockUser);
