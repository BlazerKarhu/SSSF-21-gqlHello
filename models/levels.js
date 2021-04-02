import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const levelsSchema = new Schema({
  comment: String,
  isFastChargeable: Boolean,
  title: String,
});

export default mongoose.model('Levels', levelsSchema);
