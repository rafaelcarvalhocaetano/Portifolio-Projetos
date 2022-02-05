import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { ProxyModule } from 'src/common/proxy/client-proxy.modele';

@Module({
  imports: [ProxyModule],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
