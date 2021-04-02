import Connection from '../models/connection.js';

export default {
  Station: {
    Connections(parent) {
      console.log('connections', parent);
      return Connection.findById(parent.connection);
    },
  },
};
