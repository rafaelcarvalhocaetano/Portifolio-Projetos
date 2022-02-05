import * as mongoose from 'mongoose';
import { PASSEGER } from 'src/common/models/model';

export const FlightSchema = new mongoose.Schema(
  {
    pilot: { type: String, required: true },
    airplane: { type: String, required: true },
    destinationCity: { type: String, required: true },
    flightDate: { type: Date, required: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: PASSEGER.name }],
  },
  { timestamps: true },
);
