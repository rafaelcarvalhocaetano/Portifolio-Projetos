import { Document } from 'mongoose';
import { PassengerDto } from '../dto/passenger.dto';


export class Flight extends Document {
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: PassengerDto[];
  weather: any[];
}
