import Species from '../models/species.js';

export default {
  Animal: {
    species(parent) {
      console.log('species', parent);
      return speciesData
        .filter((species) => species.id === parent.species)
        .pop();
    },
  },
  Mutation: {
    addSpecies: (parent, args) => {
      console.log('speciesResolver, addSpecies', args);
      const newSpecies = new Species(args);
      return newSpecies.save();
    },
  },
};
