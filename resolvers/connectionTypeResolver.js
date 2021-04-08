import ConnectionType from '../models/connectionType.js';

export default {
  Query: {
    connectiontypes: () => ConnectionType.find(),
  },
};
