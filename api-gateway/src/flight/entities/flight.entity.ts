import { ApiProperty } from '@nestjs/swagger';
import { Passenger } from '../../passenger/entities/passenger.entity';

export class Flight {
  @ApiProperty()
  pilot: string;
  @ApiProperty()
  airplane: string;
  @ApiProperty()
  destinationCity: string;
  @ApiProperty()
  flightDate: Date;
  @ApiProperty()
  passengers: Passenger[];
  @ApiProperty()
  weather: any[];
}
