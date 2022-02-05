import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateFlightDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pilot: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  airplane: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  destinationCity: string;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  flightDate: Date;
}
