import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { ProxyModule } from '../common/proxy/client-proxy.modele';

@Module({
  imports: [ProxyModule],
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
