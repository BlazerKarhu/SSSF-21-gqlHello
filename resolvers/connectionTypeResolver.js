import ConnectionType from '../models/connectionType.js';

export default {
  Connection: {
    ConnectionTypeID(parent) {
      console.log('connectionType', parent);
      return ConnectionType.findById(parent.ConnectionTypeID);
    },
  },
};
