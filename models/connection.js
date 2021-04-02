import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  Quantity: Number,
  ConnectionTypeID: {type: Schema.Types.ObjectId, ref: 'Connection'},
  LevelTypeID: {type: Schema.Types.ObjectId, ref: 'Levels'},
  CurrentTypeID: {type: Schema.Types.ObjectId, ref: 'CurrentType'},
});

export default mongoose.model('Connection', connectionSchema);
