import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const levelsSchema = new Schema({
  Comment: String,
  IsFastChargeable: Boolean,
  Title: String,
});

export default mongoose.model('Levels', levelsSchema);
