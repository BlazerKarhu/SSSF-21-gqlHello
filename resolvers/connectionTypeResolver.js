import ConnectionType from '../models/connectionType.js';

export default {
  Query: {
    connectiontypes: (parent, args, {user}) => {
      return ConnectionType.find();
    },
  },
};
