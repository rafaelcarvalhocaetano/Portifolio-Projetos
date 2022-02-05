import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { PassengerSchema } from './schema/passenger.schema';
import { PASSEGER } from '../common/models/model';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSEGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
