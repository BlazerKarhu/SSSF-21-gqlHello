import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const connectionSchema = new Schema({
  ConnectionTypeID: {type: Schema.Types.ObjectId, ref: 'Connection'},
  LevelTypeID: {type: Schema.Types.ObjectId, ref: 'Levels'},
  CurrentType: {type: Schema.Types.ObjectId, ref: 'CurrentType'},
  quantity: Number,
});

export default mongoose.model('Connection', connectionSchema);
