import { Injectable } from '@nestjs/common';
import { ClientProxyFlight } from 'src/common/proxy/client-proxy';
import { FlightMSG } from 'src/common/proxy/rabbitmq.enum';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  constructor(private readonly clientProxy: ClientProxyFlight) {}

  private _clientProxyFlight = this.clientProxy.clientProxyFlight();

  create(createPassengerDto: CreateFlightDto) {
    return this._clientProxyFlight.send(FlightMSG.CREATE, createPassengerDto);
  }

  findAll() {
    return this._clientProxyFlight.send(FlightMSG.FIND_ALL, '');
  }

  findOne(id: string) {
    return this._clientProxyFlight.send(FlightMSG.FIND_ONE, id);
  }

  update(id: string, updatePassengerDto: UpdateFlightDto) {
    return this._clientProxyFlight.send(FlightMSG.UPDATE, {
      id,
      updatePassengerDto,
    });
  }

  remove(id: string) {
    return this._clientProxyFlight.send(FlightMSG.DELETE, id);
  }
}
