import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const stationSchema = new Schema({
  Connections: [{type: Schema.Types.ObjectId, ref: 'Connection'}],
  Title: String,
  Town: String,
  AddressLine1: String,
  StateOrProvince: String,
  Postcode: Number,
  Location: {
    type: {
      type: String,
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export default mongoose.model('Station', stationSchema);
