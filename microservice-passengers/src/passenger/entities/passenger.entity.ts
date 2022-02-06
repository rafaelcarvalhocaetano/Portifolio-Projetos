import { Document } from 'mongoose';

export class Passenger extends Document {
  name: string;
  email: string;
}
