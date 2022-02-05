import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PASSEGER } from '../common/models/model';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Passenger } from './entities/passenger.entity';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSEGER.name) private readonly model: Model<Passenger>,
  ) {}

  async create(createPassengerDto: CreatePassengerDto): Promise<Passenger> {
    const newPassenger = new this.model(createPassengerDto);
    return await newPassenger.save();
  }

  async findAll(): Promise<Passenger[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<Passenger> {
    return await this.model.findById(id);
  }

  async update(
    id: string,
    updatePassengerDto: UpdatePassengerDto,
  ): Promise<Passenger> {
    const data = await this.model.findByIdAndUpdate(id, updatePassengerDto);
    return data;
  }

  remove(id: string) {
    this.model.findByIdAndDelete(id);
    return {
      message: `Passenger id: ${id} deleted success.`,
    };
  }
}
