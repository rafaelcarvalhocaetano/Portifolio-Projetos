import { Injectable } from '@nestjs/common';

import { PassengerMSG } from '../common/proxy/rabbitmq.enum';
import { ClientProxyFlight } from '../common/proxy/client-proxy';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Injectable()
export class PassengerService {
  constructor(private readonly clientProxy: ClientProxyFlight) {}

  private _clientProxyPassenger = this.clientProxy.clientProxyPassenger();

  send(createPassengerDto: CreatePassengerDto) {
    return this._clientProxyPassenger.send(
      PassengerMSG.CREATE,
      createPassengerDto,
    );
  }

  findAll() {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
  }

  findOne(id: string) {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
  }

  update(id: string, updatePassengerDto: UpdatePassengerDto) {
    return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {
      id,
      updatePassengerDto,
    });
  }

  remove(id: string) {
    return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
  }
}
