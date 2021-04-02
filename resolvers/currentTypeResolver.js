import CurrentType from '../models/currentType.js';

export default {
  Connection: {
    ConnectionType(parent) {
      console.log('currentType', parent);
      return CurrentType.findById(parent.currentType);
    },
  },
};
