import Connection from '../models/connection.js';

export default {
  Query: {
    connections: (parent, args, {user}) => {
      if (!user) {
        throw new AuthenticationError('You are not authenticated');
      }
      Connection.find();
    },
  },
};
