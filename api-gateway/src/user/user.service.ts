import { Injectable } from '@nestjs/common';
import { UserMSG } from 'src/common/proxy/rabbitmq.enum';

import { ClientProxyFlight } from '../common/proxy/client-proxy';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly clientProxy: ClientProxyFlight) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  sendUser(createUserDto: CreateUserDto) {
    return this._clientProxyUser.send(UserMSG.CREATE, createUserDto);
  }

  findAll() {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
  }

  findOne(id: string) {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this._clientProxyUser.send(UserMSG.UPDATE, { id, updateUserDto });
  }

  remove(id: string) {
    return this._clientProxyUser.send(UserMSG.DELETE, id);
  }
}
