import Levels from '../models/levels.js';

export default {
  Connection: {
    LevelType(parent) {
      console.log('species', parent);
      return Levels.findById(parent.LevelType);
    },
  },
  Mutation: {
    addSpecies: (parent, args) => {
      console.log('speciesResolver, addSpecies', args);
      const newSpecies = new Levels(args);
      return newSpecies.save();
    },
  },
};
