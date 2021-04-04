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
  Mutation: {
    addSpecies: (parent, args) => {
      console.log('levelsResolver, addLevels', args);
      const newSpecies = new Levels(args);
      return newSpecies.save();
    },
  },
};
