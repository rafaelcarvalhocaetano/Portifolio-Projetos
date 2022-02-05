import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Passenger extends Document {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
}
