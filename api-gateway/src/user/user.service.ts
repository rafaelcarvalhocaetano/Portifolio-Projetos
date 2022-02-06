import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UserMSG } from '../common/proxy/rabbitmq.enum';
import { ClientProxyFlight } from '../common/proxy/client-proxy';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly clientProxy: ClientProxyFlight) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  sendUser(createUserDto: CreateUserDto): Observable<any> {
    return this._clientProxyUser.send(UserMSG.CREATE, createUserDto);
  }

  findAll(): Observable<any> {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
  }

  findOne(id: string): Observable<any> {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  update(id: string, updateUserDto: UpdateUserDto): Observable<any> {
    return this._clientProxyUser.send(UserMSG.UPDATE, { id, updateUserDto });
  }

  remove(id: string): Observable<any> {
    return this._clientProxyUser.send(UserMSG.DELETE, id);
  }
}
