import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const locationSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'], // 'location.type' must be 'Point'
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

export default mongoose.model('Location', locationSchema);
