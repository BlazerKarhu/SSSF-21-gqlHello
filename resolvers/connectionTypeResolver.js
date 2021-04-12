import ConnectionType from '../models/connectionType.js';

export default {
  Query: {
    connectiontypes: (parent, args, {user}) => {
      if (!user) {
        throw new AuthenticationError('You are not authenticated');
      }
      return ConnectionType.find();
    },
  },
};
