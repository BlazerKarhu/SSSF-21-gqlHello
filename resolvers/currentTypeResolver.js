import CurrentType from '../models/currentType.js';

export default {
  Connection: {
    CurrentTypeID(parent) {
      console.log('currentType', parent);
      return CurrentType.findById(parent.currentType);
    },
  },
};
