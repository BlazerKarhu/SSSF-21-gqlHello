import Levels from '../models/levels.js';

export default {
  Query: {
    levels: (parent, args) => {
      return Levels.find();
    },
  },
  Connection: {
    LevelID(parent) {
      console.log('levels', parent);
      return Levels.findById(parent.LevelType);
    },
  },
};
