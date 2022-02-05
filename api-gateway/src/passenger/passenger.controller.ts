import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Passenger')
@Controller('api/ms/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  send(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengerService.send(createPassengerDto);
  }

  @Get()
  findAll() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePassengerDto: UpdatePassengerDto,
  ) {
    return this.passengerService.update(id, updatePassengerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengerService.remove(id);
  }
}
