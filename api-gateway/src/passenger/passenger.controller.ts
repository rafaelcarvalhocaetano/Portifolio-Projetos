import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { PassengerService } from './passenger.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Passenger')
@UseGuards(JwtAuthGuard)
@Controller('api/gateway/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  send(@Body() createPassengerDto: CreatePassengerDto): Observable<any> {
    return this.passengerService.send(createPassengerDto);
  }

  @Get()
  findAll(): Observable<any> {
    return this.passengerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<any> {
    return this.passengerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePassengerDto: UpdatePassengerDto,
  ): Observable<any> {
    return this.passengerService.update(id, updatePassengerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Observable<any> {
    return this.passengerService.remove(id);
  }
}
