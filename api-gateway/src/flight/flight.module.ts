import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { ProxyModule } from '../common/proxy/client-proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
