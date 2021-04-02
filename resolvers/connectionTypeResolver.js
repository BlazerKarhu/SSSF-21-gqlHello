import ConnectionType from '../models/connectionType.js';

export default {
  Station: {
    Connections(parent) {
      console.log('connectionType', parent);
      return ConnectionType.findById(parent.Connections);
    },
  },
};
