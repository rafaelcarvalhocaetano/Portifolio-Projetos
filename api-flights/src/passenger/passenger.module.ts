import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { PassengerSchema } from './schema/passenger.schema';
import { PASSEGER } from '../common/models/model';
import { FlightModule } from '../flight/flight.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSEGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
    // FlightModule,
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
  exports: [PassengerService],
})
export class PassengerModule {}
