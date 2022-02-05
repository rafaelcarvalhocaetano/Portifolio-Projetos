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
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

import { PassengerService } from './passenger.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Passengers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  @ApiOperation({ summary: 'Create passenger' })
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengerService.create(createPassengerDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all passenger' })
  findAll() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List passenger by id' })
  findOne(@Param('id') id: string) {
    return this.passengerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update passenger by id' })
  update(
    @Param('id') id: string,
    @Body() updatePassengerDto: UpdatePassengerDto,
  ) {
    return this.passengerService.update(id, updatePassengerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete passenger by id' })
  remove(@Param('id') id: string) {
    return this.passengerService.remove(id);
  }
}
