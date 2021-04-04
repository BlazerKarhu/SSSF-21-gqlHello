import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  ConnectionTypeID: {type: Schema.Types.ObjectId, ref: 'ConnectionType'},
  CurrentTypeID: {type: Schema.Types.ObjectId, ref: 'CurrentType'},
  LevelID: {type: Schema.Types.ObjectId, ref: 'Levels'},
  Quantity: Number,
});

export default mongoose.model('Connection', connectionSchema);
