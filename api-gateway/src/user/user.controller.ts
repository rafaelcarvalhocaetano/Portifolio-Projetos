import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';


import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxyFlight } from '../common/proxy/client-proxy';
import { UserMSG } from '../common/proxy/rabbitmq.enum';

@ApiTags('Users')
@Controller('api/gateway/user')
export class UserController {

  // constructor(private readonly clientProxy: ClientProxyFlight) {}

  // private _clientProxyUser = this.clientProxy.clientProxyUsers();
  constructor(private readonly userService: UserService) {}

  @Post()
  sendUser(@Body() createUserDto: CreateUserDto): Observable<any> {
    Logger.log(' Post sendUser ')
    return this.userService.sendUser(createUserDto);
    // return this._clientProxyUser.send(UserMSG.CREATE, createUserDto);
  }

  @Get()
  findAll(): Observable<any> {
    Logger.log(' get find all ')
    return this.userService.findAll();
    // return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<any> {
    Logger.log(' Get sendUser ')
    return this.userService.findOne(id);
    // return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Observable<any> {
    Logger.log(' Patch sendUser ')
    return this.userService.update(id, updateUserDto);
    // return this._clientProxyUser.send(UserMSG.UPDATE, { id, updateUserDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<any> {
    Logger.log(' Delete sendUser ')
    return this.userService.remove(id);
    // return this._clientProxyUser.send(UserMSG.DELETE, id);
  }
}
