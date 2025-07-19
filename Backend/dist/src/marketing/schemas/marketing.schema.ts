
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarketingDocument = HydratedDocument<Marketing>;

@Schema()
export class Marketing {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'customer' })
  role: string; // "customer", "admin"
}
export const MarketingSchema = SchemaFactory.createForClass(Marketing);
