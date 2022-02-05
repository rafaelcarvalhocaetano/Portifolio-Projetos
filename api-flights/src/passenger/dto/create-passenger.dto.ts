import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePassengerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}
