import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicalCenterDocument = MedicalCenter & Document;

@Schema()
export class MedicalCenter {
  @Prop()
  nextNumber: string;

  @Prop()
  estimatedWaitingTime: number;
}

export const MedicalCenterSchema = SchemaFactory.createForClass(MedicalCenter);
