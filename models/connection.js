import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  ConnectionTypeID: {type: mongoose.Types.ObjectId, ref: 'ConnectionType'},
  CurrentTypeID: {type: mongoose.Types.ObjectId, ref: 'CurrentType'},
  LevelID: {type: mongoose.Types.ObjectId, ref: 'Levels'},
  Quantity: Number,
});

export default mongoose.model('Connection', connectionSchema);
