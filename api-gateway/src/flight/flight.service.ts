import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientProxyFlight } from 'src/common/proxy/client-proxy';
import { FlightMSG, PassengerMSG } from 'src/common/proxy/rabbitmq.enum';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Injectable()
export class FlightService {
  constructor(private readonly clientProxy: ClientProxyFlight) {}

  private _clientProxyFlight = this.clientProxy.clientProxyFlight();
  private _clientProxyPassenger = this.clientProxy.clientProxyPassenger();

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

  async addPessagen(flightId: string, passengerId: string) {
    const passenge = await this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, passengerId).toPromise();
    if (!passenge) {
      throw new HttpException('Not found passenger', HttpStatus.NOT_FOUND);
    }
    return this._clientProxyFlight.send(FlightMSG.ADD_PASSENGER, { flightId, passengerId})
  }
}
