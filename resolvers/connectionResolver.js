import Connection from '../models/connection.js';

export default {
  Station: {
    Connections(parent) {
      console.log('Connections', parent);
      return Connection.findById(parent.connection);
    },
  },
};
