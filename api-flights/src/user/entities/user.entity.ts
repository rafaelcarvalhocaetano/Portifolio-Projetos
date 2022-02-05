import { Document } from 'mongoose';

export class User extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}
