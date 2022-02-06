import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';


import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('api/gateway/user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  sendUser(@Body() createUserDto: CreateUserDto): Observable<any> {
    Logger.log(' Post sendUser ')
    return this.userService.sendUser(createUserDto);
  }

  @Get()
  findAll(): Observable<any> {
    Logger.log(' get find all ')
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<any> {
    Logger.log(' Get sendUser ')
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Observable<any> {
    Logger.log(' Patch sendUser ')
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<any> {
    Logger.log(' Delete sendUser ')
    return this.userService.remove(id);
  }
}
