import Levels from '../models/levels.js';

export default {
  Query: {
    levels: (parent, args) => {
      return Levels.find();
    },
  },
};
